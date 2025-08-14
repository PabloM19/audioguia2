export type Track = {
  id: string;
  title: string;
  src: string;
  image: string;
  description: string;
};

export type TrackGroup = {
  id: string;
  title: string;
  tracks: Track[];
};

export const trackGroups: TrackGroup[] = [
  {
    id: "intro",
    title: "Introducción",
    tracks: [
      {
        id: "intro-1",
        title: "Bienvenida",
        src: "/audios/intro.mp3",
        image: "/images/intro.jpg",
        description: "Breve introducción a la visita."
      }
    ]
  },
  {
    id: "sala-1",
    title: "Sala 1 — Capilla",
    tracks: [
      {
        id: "sala1-1",
        title: "Pinturas Murales",
        src: "/audios/sala1-1.mp3",
        image: "/images/sala1-1.jpg",
        description: "Descripción de las pinturas murales de la capilla."
      },
      {
        id: "sala1-2",
        title: "Retablo",
        src: "/audios/sala1-2.mp3",
        image: "/images/sala1-2.jpg",
        description: "Historia del retablo principal."
      }
    ]
  },
  {
    id: "sala-2",
    title: "Sala 2 — Claustro",
    tracks: [
      {
        id: "sala2-1",
        title: "Arcos y columnas",
        src: "/audios/sala2-1.mp3",
        image: "/images/sala2-1.jpg",
        description: "Explicación de los elementos arquitectónicos."
      }
    ]
  }
];
