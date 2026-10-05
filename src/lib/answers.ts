import type { Question } from '@/config/questions';

export type Answer = { questionId: number; answer: string };

// Cola de respuestas en sessionStorage: sobrevive a un refresh de /test y se
// usa para armar la petición al backend al terminar.
export const ANSWERS_STORAGE_KEY = 'qsdg:answers';

export function readAnswers(): Answer[] {
  try {
    const raw = sessionStorage.getItem(ANSWERS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Answer[]) : [];
  } catch {
    return [];
  }
}

// Encola la respuesta; si la pregunta ya estaba respondida (volvió atrás y
// cambió de opción) reemplaza la anterior para no duplicarla.
export function saveAnswer(questionId: number, answer: string): Answer[] {
  const answers = readAnswers().filter((a) => a.questionId !== questionId);
  answers.push({ questionId, answer });
  sessionStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(answers));
  return answers;
}

export function clearAnswers() {
  sessionStorage.removeItem(ANSWERS_STORAGE_KEY);
}

// Arma el cuerpo de /api/test/match: los textos en el orden de q.json.
// Devuelve null si falta responder alguna pregunta.
export function buildAnswersPayload(questions: Question[], answers: Answer[]): string[] | null {
  const byId = new Map(answers.map((a) => [a.questionId, a.answer]));
  const ordered = questions.map((q) => byId.get(q.id));
  return ordered.every((a): a is string => !!a) ? ordered : null;
}
