'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTIONS } from '@/config/questions';
import { RESULT_STORAGE_KEY, submitAnswers } from '@/lib/api';

type Status = 'answering' | 'loading' | 'error';

export default function QuizWizard() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(() => QUESTIONS.map(() => null));
  const [status, setStatus] = useState<Status>('answering');
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => () => abortRef.current?.abort(), []);

  const question = QUESTIONS[current];
  const selected = answers[current];
  const isLast = current === QUESTIONS.length - 1;
  const progress = ((current + 1) / QUESTIONS.length) * 100;

  function selectOption(option: string) {
    setAnswers((prev) => prev.map((a, i) => (i === current ? option : a)));
  }

  async function submit() {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus('loading');
    setError(null);
    try {
      const result = await submitAnswers(answers as string[], controller.signal);
      sessionStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(result));
      router.push('/resultado');
    } catch (err) {
      if (controller.signal.aborted) return;
      setError(err instanceof Error ? err.message : 'Algo salió mal');
      setStatus('error');
    }
  }

  function next() {
    if (!selected) return;
    if (isLast) {
      void submit();
    } else {
      setCurrent((c) => c + 1);
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center" role="status" aria-live="polite">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-900" />
        <p className="text-neutral-600">Analizando tus respuestas...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center" role="alert">
        <p className="text-lg font-medium">No pudimos calcular tu resultado</p>
        <p className="text-sm text-neutral-500">{error}</p>
        <button
          onClick={() => void submit()}
          className="rounded-full bg-neutral-900 px-6 py-3 text-white active:scale-95"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-2 flex justify-between text-sm text-neutral-500">
          <span>
            Pregunta {current + 1} de {QUESTIONS.length}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
          <div className="h-full bg-neutral-900 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h2 className="text-2xl font-semibold leading-tight">{question.text}</h2>

      <ul className="flex flex-col gap-3">
        {question.options.map((option) => {
          const isSelected = selected === option;
          return (
            <li key={option}>
              <button
                type="button"
                onClick={() => selectOption(option)}
                aria-pressed={isSelected}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition active:scale-[0.98] ${
                  isSelected
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-3">
        {current > 0 && (
          <button
            type="button"
            onClick={() => setCurrent((c) => c - 1)}
            className="rounded-full border border-neutral-300 px-6 py-3 active:scale-95"
          >
            Atrás
          </button>
        )}
        <button
          type="button"
          onClick={next}
          disabled={!selected}
          className="flex-1 rounded-full bg-neutral-900 px-6 py-3 font-medium text-white transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
        >
          {isLast ? 'Ver resultado' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
}
