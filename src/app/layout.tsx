import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '¿Qué sos de Gasti?',
  description: 'Respondé 20 preguntas y descubrí a qué conocido de Gasti te parecés.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fafafa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh antialiased">
        <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-8">{children}</main>
      </body>
    </html>
  );
}
