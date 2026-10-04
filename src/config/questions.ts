export type Question = {
  id: number;
  text: string;
  // Cada opción es una frase en primera persona: es el texto que se envía al
  // backend y se convierte en embedding, así que conviene que sea descriptiva.
  options: string[];
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '¿Cómo es tu sábado ideal?',
    options: [
      'Mi sábado ideal es salir de fiesta hasta tarde con amigos.',
      'Mi sábado ideal es un asado tranquilo con la familia.',
      'Mi sábado ideal es quedarme en casa viendo series o jugando videojuegos.',
      'Mi sábado ideal es hacer deporte o una escapada al aire libre.',
    ],
  },
  {
    id: 2,
    text: 'En un grupo de amigos, vos sos...',
    options: [
      'En el grupo soy el que organiza todo y arma los planes.',
      'En el grupo soy el gracioso que hace reír a todos.',
      'En el grupo soy el que escucha y da consejos.',
      'En el grupo soy el que se suma a lo que sea sin quejarse.',
    ],
  },
  {
    id: 3,
    text: '¿Qué hacés cuando llegás tarde?',
    options: [
      'Nunca llego tarde, soy muy puntual.',
      'Llego tarde siempre y no me hago problema.',
      'Aviso con tiempo y pido disculpas.',
      'Invento una excusa creativa.',
    ],
  },
  {
    id: 4,
    text: '¿Qué música no puede faltar?',
    options: [
      'Escucho rock nacional y clásicos de siempre.',
      'Escucho cumbia, cuarteto y reggaetón para bailar.',
      'Escucho música electrónica o techno.',
      'Escucho indie, jazz o cosas poco conocidas.',
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejás la plata?',
    options: [
      'Ahorro todo lo que puedo y planifico mis gastos.',
      'Gasto en experiencias, viajes y salidas.',
      'Invierto y me interesan las finanzas.',
      'La plata me dura poco, vivo el momento.',
    ],
  },
  {
    id: 6,
    text: '¿Cuál es tu relación con el deporte?',
    options: [
      'Entreno casi todos los días, el deporte es parte de mi vida.',
      'Soy fanático del fútbol pero lo miro desde el sillón.',
      'Hago algo de actividad física cuando puedo.',
      'El deporte no es lo mío.',
    ],
  },
  {
    id: 7,
    text: 'Te ofrecen un viaje sorpresa mañana. ¿Qué hacés?',
    options: [
      'Armo la mochila y me voy sin pensarlo.',
      'Primero reviso mi agenda y lo planifico bien.',
      'Pregunto quién más va antes de decidir.',
      'Prefiero quedarme, no me gustan las sorpresas.',
    ],
  },
  {
    id: 8,
    text: '¿Cómo es tu relación con la tecnología?',
    options: [
      'Me encanta la tecnología y siempre estoy probando cosas nuevas.',
      'Uso lo básico: el celular y las redes sociales.',
      'Trabajo con computadoras y programo.',
      'Prefiero desconectarme de las pantallas.',
    ],
  },
  {
    id: 9,
    text: 'En una discusión, vos...',
    options: [
      'Defiendo mi postura hasta el final.',
      'Busco el punto medio y trato de calmar las cosas.',
      'Evito el conflicto y me quedo callado.',
      'Uso el humor para bajar la tensión.',
    ],
  },
  {
    id: 10,
    text: '¿Qué comida elegís?',
    options: [
      'Elijo un buen asado con chimichurri.',
      'Elijo pizza o hamburguesa sin dudarlo.',
      'Elijo comida saludable y casera.',
      'Elijo probar comidas exóticas de otros países.',
    ],
  },
  {
    id: 11,
    text: '¿A qué hora te levantás un día libre?',
    options: [
      'Me levanto temprano igual, soy muy madrugador.',
      'Me levanto al mediodía, me encanta dormir.',
      'Me levanto a media mañana sin alarma.',
      'Depende de a qué hora me acosté la noche anterior.',
    ],
  },
  {
    id: 12,
    text: '¿Qué te dicen tus amigos que sos?',
    options: [
      'Mis amigos dicen que soy muy responsable.',
      'Mis amigos dicen que soy un desastre pero divertido.',
      'Mis amigos dicen que soy muy leal y buena persona.',
      'Mis amigos dicen que soy muy inteligente y curioso.',
    ],
  },
  {
    id: 13,
    text: '¿Cómo usás las redes sociales?',
    options: [
      'Subo historias todo el tiempo.',
      'Miro pero casi nunca publico nada.',
      'Las uso para informarme y aprender.',
      'Casi no uso redes sociales.',
    ],
  },
  {
    id: 14,
    text: '¿Qué tipo de películas preferís?',
    options: [
      'Me gustan las comedias para reírme.',
      'Me gustan las de acción y superhéroes.',
      'Me gustan los dramas y el cine de autor.',
      'Me gustan las de terror y suspenso.',
    ],
  },
  {
    id: 15,
    text: '¿Qué hacés en una fiesta donde no conocés a nadie?',
    options: [
      'Me hago amigo de todos en cinco minutos.',
      'Me quedo cerca de la persona con la que fui.',
      'Busco la comida y la bebida primero.',
      'Me voy temprano.',
    ],
  },
  {
    id: 16,
    text: '¿Cómo es tu forma de trabajar o estudiar?',
    options: [
      'Soy muy organizado y hago todo con tiempo.',
      'Dejo todo para último momento pero cumplo.',
      'Trabajo mejor en equipo que solo.',
      'Me apasiona lo que hago y le dedico muchas horas.',
    ],
  },
  {
    id: 17,
    text: '¿Mate o café?',
    options: [
      'Tomo mate todo el día, es sagrado.',
      'Soy de café, no arranco sin uno.',
      'Tomo las dos cosas según el momento.',
      'No tomo ni mate ni café.',
    ],
  },
  {
    id: 18,
    text: '¿Qué tipo de vacaciones preferís?',
    options: [
      'Prefiero playa, sol y descanso.',
      'Prefiero montaña, trekking y naturaleza.',
      'Prefiero recorrer ciudades y museos.',
      'Prefiero quedarme en casa y descansar.',
    ],
  },
  {
    id: 19,
    text: '¿Cómo reaccionás ante un problema inesperado?',
    options: [
      'Mantengo la calma y busco una solución práctica.',
      'Me estreso mucho pero termino resolviéndolo.',
      'Pido ayuda a alguien de confianza.',
      'Lo tomo con humor y no me hago mala sangre.',
    ],
  },
  {
    id: 20,
    text: '¿Qué es lo más importante para vos?',
    options: [
      'Lo más importante para mí es la familia.',
      'Lo más importante para mí son los amigos.',
      'Lo más importante para mí es crecer profesionalmente.',
      'Lo más importante para mí es disfrutar y ser libre.',
    ],
  },
];
