export type Track = {
  id: string
  title: string
  src: string
  description: string
  image: string
}

export type TrackGroup = {
  id: string
  title: string
  tracks: Track[]
}

export const trackGroups: TrackGroup[] = [
  {
    id: "intro",
    title: "Introducción · 08:30am",
    tracks: [
      {
        id: "audio1",
        title: "Intro jeje",
        src: "/audios/1.mp3",
        description: "Bienvenida a la jornada especial en Valencia con desayuno sorpresa.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio2",
        title: "¿Un cafecito o qué?",
        src: "/audios/2.mp3",
        description: "Parada en la Horchatería Santa Catalina y opciones de desayuno en la plaza.",
        image: "/images/placeholder.jpg",
      },
    ],
  },
  {
    id: "catedral",
    title: "Catedral de Valencia · 09:10am",
    tracks: [
      {
        id: "audio3",
        title: "Puerta del Palau",
        src: "/audios/3.mp3",
        description: "Arco románico con relieves bíblicos y leyendas sobre canteros y verdugos.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio4",
        title: "Puerta de los Apóstoles",
        src: "/audios/4.mp3",
        description: "Doce estatuas góticas y el histórico Tribunal de las Aguas celebrado cada jueves.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio5",
        title: "El Micalet",
        src: "/audios/5.mp3",
        description: "Campanario gótico con 207 escalones y vistas panorámicas de toda la ciudad.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio6",
        title: "Nave central",
        src: "/audios/6.mp3",
        description: "Interior gótico solemne con bóvedas altas y columnas monumentales.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio7",
        title: "Cimborrio y alabastro",
        src: "/audios/7.mp3",
        description: "Cúpula octogonal con ventanales de alabastro que filtran la luz.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio8",
        title: "Capilla del Santo Cáliz",
        src: "/audios/8.mp3",
        description: "Reliquia venerada: copa del siglo I, usada según la tradición en la Última Cena.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio9",
        title: "San Vicent Ferrer y Mártir",
        src: "/audios/9.mp3",
        description: "Urna con brazo incorrupto de San Vicente Mártir, reliquia llegada desde Padua.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio10",
        title: "Retablo y frescos",
        src: "/audios/10.mp3",
        description: "Retablo renacentista con frescos descubiertos en 2003 de ángeles músicos.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio11",
        title: "Capillas laterales",
        src: "/audios/11.mp3",
        description: "Girola con capillas de santos y vitrales renacentistas.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio12",
        title: "Órgano histórico",
        src: "/audios/12.mp3",
        description: "Órgano barroco del XVII-XVIII aún usado en ceremonias.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio13",
        title: "Ventana de Pere Compte",
        src: "/audios/13.mp3",
        description: "Elemento renacentista integrado en templo gótico, símbolo de innovación.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio14",
        title: "Cierre y salida",
        src: "/audios/14.mp3",
        description: "Resumen de estilos y despedida de la Catedral de Valencia.",
        image: "/images/placeholder.jpg",
      },
    ],
  },
  {
    id: "reina",
    title: "Plaza de la Reina · 10:30am",
    tracks: [
      {
        id: "audio15",
        title: "Breve paseo",
        src: "/audios/15.mp3",
        description: "Historia de la plaza, reformas recientes y restos arqueológicos hallados.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio16",
        title: "Rafael Guastavino",
        src: "/audios/16.mp3",
        description: "Escultura homenaje al arquitecto valenciano de bóvedas en Nueva York.",
        image: "/images/placeholder.jpg",
      },
    ],
  },
  {
    id: "serranos",
    title: "Torres de Serranos · 11:00am",
    tracks: [
      {
        id: "audio17",
        title: "Las torres",
        src: "/audios/17.mp3",
        description: "Puerta gótica construida en 1392, usada como prisión y refugio de arte.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio18",
        title: "¿Subida o seguimos?",
        src: "/audios/18.mp3",
        description: "Decisión de subir o continuar, según fuerzas.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio19",
        title: "Subida",
        src: "/audios/19.mp3",
        description: "Vistas panorámicas de Valencia desde lo alto y promesas amorosas.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio20",
        title: "Puente de Serranos",
        src: "/audios/20.mp3",
        description: "Cruce romántico con vistas al parque y murallas.",
        image: "/images/placeholder.jpg",
      },
    ],
  },
  {
    id: "pio5",
    title: "Museo de Bellas Artes · 11:30am",
    tracks: [
      {
        id: "audio21",
        title: "Entrada",
        src: "/audios/21.mp3",
        description: "Introducción al museo con obras del XIV al XX.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio22",
        title: "Sala Sorolla",
        src: "/audios/22.mp3",
        description: "Obras de Sorolla como 'La esposa del pintor' y 'Grupa valenciana'.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio23",
        title: "Patio Embajador Vich",
        src: "/audios/23.mp3",
        description: "Patio renacentista trasladado desde palacio del XVI.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio24",
        title: "Sala Gerstenmaier",
        src: "/audios/24.mp3",
        description: "Colección flamenca con obras de Rubens, Marten de Vos y grabados.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio25",
        title: "Retablo de la Virgen de la Leche",
        src: "/audios/25.mp3",
        description: "Retablo gótico con Virgen amamantando al Niño.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio26",
        title: "Escuela Valenciana",
        src: "/audios/26.mp3",
        description: "Obras de Juan de Juanes, Ribalta y bodegones barrocos.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio27",
        title: "Goya",
        src: "/audios/27.mp3",
        description: "Único autorretrato de Goya conservado aquí.",
        image: "/images/placeholder.jpg",
      },
    ],
  },
  {
    id: "comida",
    title: "Rumbo a la comida · 13:30pm",
    tracks: [
      {
        id: "audio28",
        title: "Camino a San Tommaso",
        src: "/audios/28.mp3",
        description: "Paseo por casco histórico hacia restaurante italiano.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio29",
        title: "Portal de la Valldigna",
        src: "/audios/29.mp3",
        description: "Arco gótico del XV y lugar de la primera imprenta en valenciano.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio30",
        title: "Plaza Redonda",
        src: "/audios/30.mp3",
        description: "Plaza neoclásica circular con comercios y fuente central.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio31",
        title: "Calle Corretgeria",
        src: "/audios/31.mp3",
        description: "Calle de antiguos artesanos del cuero camino al almuerzo.",
        image: "/images/placeholder.jpg",
      },
    ],
  },
  {
    id: "monforte",
    title: "Jardines de Monforte · 15:45pm",
    tracks: [
      {
        id: "audio32",
        title: "Llegando",
        src: "/audios/32.mp3",
        description: "Opciones para llegar y transición hacia oasis verde.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio33",
        title: "Presentación",
        src: "/audios/33.mp3",
        description: "Historia y estructura del jardín neoclásico.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio34",
        title: "Fuente de Dafnis y Cloe",
        src: "/audios/34.mp3",
        description: "Escultura romántica en mármol sobre el primer amor.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio35",
        title: "Leones y estatuas",
        src: "/audios/35.mp3",
        description: "Leones destinados al Congreso y esculturas alegóricas.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio36",
        title: "Rosaleda y Fuente de los Naranjos",
        src: "/audios/36.mp3",
        description: "Rosales, azahares y fuente símbolo de amor duradero.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio37",
        title: "Pérgola y Montañeta",
        src: "/audios/37.mp3",
        description: "Pérgola con buganvillas y montañeta para pasear.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio38",
        title: "Bodas civiles",
        src: "/audios/38.mp3",
        description: "Los jardines son hoy escenario de bodas gratuitas.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio39",
        title: "Cierre en Monforte",
        src: "/audios/39.mp3",
        description: "Despedida íntima entre esculturas y fuentes románticas.",
        image: "/images/placeholder.jpg",
      },
      {
        id: "audio40",
        title: "Lo siento",
        src: "/audios/40.mp3",
        description: "Audio especial de cierre.",
        image: "/images/placeholder.jpg",
      },
    ],
  },
]
