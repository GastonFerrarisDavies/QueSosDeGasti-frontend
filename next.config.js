/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática (genera /out) para Azure Static Web Apps.
  output: 'export',
  // Genera /test/index.html, /resultado/index.html: rutas limpias sin depender de rewrites.
  trailingSlash: true,
  // La optimización de imágenes requiere servidor; no existe en un export estático.
  images: { unoptimized: true },
};

module.exports = nextConfig;
