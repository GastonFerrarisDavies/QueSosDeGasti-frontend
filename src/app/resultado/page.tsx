'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RESULT_STORAGE_KEY, type MatchResult } from '@/lib/api';

export default function ResultadoPage() {
  const router = useRouter();
  // undefined = todavía no leímos sessionStorage; null = no hay resultado.
  const [result, setResult] = useState<MatchResult | null | undefined>(undefined);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(RESULT_STORAGE_KEY);
      setResult(raw ? (JSON.parse(raw) as MatchResult) : null);
    } catch {
      setResult(null);
    }
  }, []);

  function playAgain() {
    sessionStorage.clear();
    router.push('/');
  }

  if (result === undefined) return null;

  if (result === null) {
    return (
      <section className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <p className="text-neutral-600">Todavía no hiciste el test.</p>
        <Link href="/test" className="rounded-full bg-neutral-900 px-6 py-3 text-white active:scale-95">
          Empezar
        </Link>
      </section>
    );
  }

  return (
    <section className="flex flex-1 flex-col justify-center gap-8">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500">Sos...</p>
        <h1 className="text-5xl font-bold tracking-tight">{result.name}</h1>
      </div>

      <blockquote className="relative rounded-2xl bg-neutral-900 px-6 pb-6 pt-10 text-white">
        <span aria-hidden className="absolute left-5 top-1 font-serif text-6xl leading-none text-neutral-500">
          &ldquo;
        </span>
        <p className="text-lg font-medium italic leading-snug">{result.phrase}</p>
        <footer className="mt-3 text-sm text-neutral-400">— {result.name}</footer>
      </blockquote>

      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Quién es para Gasti</h2>
        <p className="rounded-2xl bg-white p-5 leading-relaxed text-neutral-700 shadow-sm">{result.description}</p>
      </div>

      <button
        type="button"
        onClick={playAgain}
        className="rounded-full border border-neutral-300 px-6 py-3 active:scale-95"
      >
        Volver a jugar
      </button>
    </section>
  );
}
