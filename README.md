# QueSosDeGasti — Frontend

Next.js (App Router) + React + Tailwind CSS + TypeScript, exportado como sitio estático para Azure Static Web Apps.

## Estructura

```
src/app/layout.tsx          # Layout mobile-first
src/app/page.tsx            # Home (/)
src/app/test/page.tsx       # Wizard (/test)
src/app/resultado/page.tsx  # Resultado (/resultado)
src/components/QuizWizard.tsx
src/config/questions.ts     # Las 20 preguntas hardcodeadas
src/lib/api.ts              # fetch al backend
public/staticwebapp.config.json
next.config.js              # output: 'export'
```

## Desarrollo

```bash
cp .env.example .env.local   # NEXT_PUBLIC_API_URL=http://localhost:8080
npm install
npm run dev
```

El backend tiene que estar levantado (`docker compose up` en `QueSosDeGasti-backend`) y su `ALLOWED_ORIGINS` debe incluir el origen del frontend.

## Build / Deploy en Azure Static Web Apps

`npm run build` genera el sitio estático en `out/`. En el workflow de Azure SWA:

```yaml
app_location: "/"
output_location: "out"
```

`NEXT_PUBLIC_API_URL` se embebe en tiempo de build: configurala como variable de entorno del job de build (no como App Setting de SWA).

El resultado se pasa de `/test` a `/resultado` vía `sessionStorage`, ya que un export estático no tiene servidor.
