// Las preguntas viven en public/q.json y se cargan en tiempo de ejecución,
// así se pueden editar sin tocar el código.
export type Question = {
  id: number;
  question: string;
  // El texto de la opción elegida es lo que se envía al backend y se convierte
  // en embedding, así que conviene que sea descriptivo.
  options: string[];
};

export async function loadQuestions(signal?: AbortSignal): Promise<Question[]> {
  const res = await fetch('/q.json', { signal });
  if (!res.ok) throw new Error(`No se pudieron cargar las preguntas (error ${res.status})`);
  return (await res.json()) as Question[];
}
