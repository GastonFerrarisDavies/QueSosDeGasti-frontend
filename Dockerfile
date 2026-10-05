# syntax=docker/dockerfile:1

# ---- Dependencias ----
# Solo copia los manifiestos: mientras package.json y package-lock.json no
# cambien, Docker reutiliza esta capa y no vuelve a instalar nada.
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# El caché de npm persiste entre builds: si cambia una dependencia, solo se
# descargan los paquetes nuevos.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

# ---- Build ----
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# Se embebe en el bundle en tiempo de build (no se puede cambiar al correr el contenedor).
ARG NEXT_PUBLIC_API_URL=http://localhost:8080
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
COPY --from=deps /app/node_modules ./node_modules
# Solo lo que usa Next: un cambio en nginx.conf u otros archivos no invalida el build.
COPY package.json next.config.js tsconfig.json postcss.config.mjs ./
COPY public ./public
COPY src ./src
# El caché incremental de Next persiste entre builds y acelera la recompilación.
RUN --mount=type=cache,target=/app/.next/cache \
    npm run build

# ---- Runtime ----
# El export estático (out/) no necesita Node: lo sirve Nginx sin root.
FROM nginxinc/nginx-unprivileged:alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 8080
