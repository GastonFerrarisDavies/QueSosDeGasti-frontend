import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-semibold">Página no encontrada</h1>
      <Link href="/" className="underline">
        Volver al inicio
      </Link>
    </section>
  );
}
