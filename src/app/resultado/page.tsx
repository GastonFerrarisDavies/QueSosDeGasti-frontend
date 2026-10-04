'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RESULT_STORAGE_KEY, type MatchResult } from '@/lib/api';

export default function ResultadoPage() {
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
    <section className="flex flex-1 flex-col justify-center gap-8 text-center">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-widest text-neutral-500">Sos...</p>
        <h1 className="text-5xl font-bold tracking-tight">{result.name}</h1>
        <p className="text-sm text-neutral-400">{Math.round(result.similarity * 100)}% de coincidencia</p>
      </div>
      <p className="rounded-2xl bg-white p-5 text-left leading-relaxed text-neutral-700 shadow-sm">
        {result.description}
      </p>
      <Link
        href="/test"
        onClick={() => sessionStorage.removeItem(RESULT_STORAGE_KEY)}
        className="rounded-full border border-neutral-300 px-6 py-3 active:scale-95"
      >
        Volver a jugar
      </Link>
    </section>
  );
}
