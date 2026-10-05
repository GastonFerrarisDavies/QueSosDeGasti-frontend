export type MatchResult = {
  name: string;
  description: string;
  phrase: string;
};

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080').replace(/\/$/, '');

// Clave de sessionStorage para pasar el resultado de /test a /resultado
// (en un export estático no hay servidor que mantenga ese estado).
export const RESULT_STORAGE_KEY = 'qsdg:result';

export async function submitAnswers(answers: string[], signal?: AbortSignal): Promise<MatchResult> {
  const res = await fetch(`${API_URL}/api/test/match`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers }),
    signal,
  });

  if (!res.ok) {
    let message = `Error ${res.status}`;
    try {
      const body = (await res.json()) as { error?: string };
      if (body.error) message = body.error;
    } catch {
      // cuerpo no JSON: nos quedamos con el status
    }
    throw new Error(message);
  }

  return (await res.json()) as MatchResult;
}
