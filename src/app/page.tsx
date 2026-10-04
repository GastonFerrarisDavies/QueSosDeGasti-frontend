import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tight">¿Qué sos de Gasti?</h1>
        <p className="text-neutral-500">20 preguntas rápidas. Un solo resultado.</p>
      </div>
      <Link
        href="/test"
        className="w-full rounded-full bg-neutral-900 px-6 py-4 text-lg font-medium text-white transition active:scale-95"
      >
        Descubre qué conocido de Gasti eres
      </Link>
    </section>
  );
}
