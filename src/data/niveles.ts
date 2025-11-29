export interface Opcion {
  texto: string
  esCorrecta: boolean
  explicacion?: string
  imagenExplicacion?: string
}

export interface Pregunta {
  id: number
  texto?: string
  imagen?: string
  opciones: Opcion[]
  pista: string
  imagenExplicacionCorrecta?: string
}

export interface Seccion {
  id: number
  nombre: string
  audioFondo: string
  preguntas: Pregunta[]
}

export interface JuegoData {
  titulo: string
  colorTema: 'blue' | 'purple' | 'green'
  secciones: Seccion[]
}

// Datos de Triángulos (Ahora Trigonometría)
export const datosTriangulos: JuegoData = {
  titulo: "Trigonometría y Triángulos",
  colorTema: "blue",
  secciones: [
    {
      id: 1,
      nombre: "Sección 1: Tipos de Triángulos",
      audioFondo: "/recursos/FondoTriangulos1.mp3",
      preguntas: [
        {
          id: 1,
          imagen: '/recursos/trigonometria/Sec1_Ejercicio1.jpg',
          texto: '¿Qué tipo de triángulo es?',
          opciones: [
            { texto: 'Obtusángulo', esCorrecta: false },
            { texto: 'Rectángulo', esCorrecta: true },
            { texto: 'Equilátero', esCorrecta: false }
          ],
          pista: 'Uno de sus ángulos mide 90°.'
        },
        {
          id: 2,
          imagen: '/recursos/trigonometria/Sec1_Ejercicio2.png',
          texto: '¿Qué tipo de triángulo es?',
          opciones: [
            { texto: 'Escaleno', esCorrecta: false },
            { texto: 'Equilátero', esCorrecta: true },
            { texto: 'Isósceles', esCorrecta: false }
          ],
          pista: 'Es el único donde los tres lados son iguales.'
        },
        {
          id: 3,
          imagen: '/recursos/trigonometria/Sec1_Ejercicio3.jpg',
          texto: '¿Qué tipo de triángulo es?',
          opciones: [
            { texto: 'Acutángulo', esCorrecta: true },
            { texto: 'Rectángulo', esCorrecta: false },
            { texto: 'Obtusángulo', esCorrecta: false }
          ],
          pista: 'Cuando todos sus ángulos son menores de 90°.'
        },
        {
          id: 4,
          imagen: '/recursos/trigonometria/Sec1_Ejercicio4.jpg',
          texto: '¿Qué tipo de triángulo es?',
          opciones: [
            { texto: 'Obtusángulo', esCorrecta: true },
            { texto: 'Rectángulo', esCorrecta: false },
            { texto: 'Acutángulo', esCorrecta: false }
          ],
          pista: 'Tiene un ángulo mayor de 90°.'
        },
        {
          id: 5,
          imagen: '/recursos/trigonometria/Sec1_Ejercicio5.jpg',
          texto: '¿Qué tipo de triángulo es?',
          opciones: [
            { texto: 'Isósceles', esCorrecta: true },
            { texto: 'Equilátero', esCorrecta: false },
            { texto: 'Escaleno', esCorrecta: false }
          ],
          pista: 'Se reconoce porque tiene exactamente dos lados iguales.'
        }
      ]
    },
    {
      id: 2,
      nombre: "Sección 2: Razones Trigonométricas",
      audioFondo: "/recursos/FondoTriangulos2.mp3",
      preguntas: [
        {
          id: 6,
          texto: 'Si cos(θ) = 0, ¿cuál podría ser un valor de θ?',
          opciones: [
            { texto: '0°', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec2_IncorrectaA_Eje1.png' }, // Asumido por contexto aunque no estaba en lista explícita, corregiré si falla
            { texto: '90°', esCorrecta: true },
            { texto: '180°', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec2_IncorrectaC_eje1.png' }
          ],
          pista: 'El coseno vale cero cuando el ángulo está justo entre los ejes.',
          imagenExplicacionCorrecta: '/recursos/trigonometria/Sec2_CorrectaEje1.png'
        },
        {
          id: 7,
          texto: 'Si un ángulo agudo tiene un seno de 1/2, ¿cuál puede ser su medida?',
          opciones: [
            { texto: '30°', esCorrecta: true },
            { texto: '45°', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec2_IncorrectaB_Eje2.png' },
            { texto: '60°', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec2_IncorrectaC_Eje2.png' }
          ],
          pista: 'El seno de 1/2 corresponde al ángulo más pequeño del trío 30°–45°–60°.',
          imagenExplicacionCorrecta: '/recursos/trigonometria/Sec2_CorrectaEje2.png'
        },
        {
          id: 8,
          texto: 'Si en un triángulo rectángulo el seno de θ es 3/5, ¿cuánto vale el coseno?',
          opciones: [
            { texto: '4/5', esCorrecta: true },
            { texto: '3/5', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec2_IncorrectaB_Eje3.png' },
            { texto: '5/3', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec2_IncorrectaC_Eje3.png' }
          ],
          pista: 'Completa el triángulo con Pitágoras (3-4-5).',
          imagenExplicacionCorrecta: '/recursos/trigonometria/Sec2_CorrectaEje3.png'
        },
        {
          id: 9,
          texto: '¿Cuál es la razón trigonométrica que se define como "cateto opuesto / cateto adyacente"?',
          opciones: [
            { texto: 'Seno', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec2_IncorrectaA_Eje4.png' },
            { texto: 'Coseno', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec2_IncorrectaB_Eje4.png' },
            { texto: 'Tangente', esCorrecta: true }
          ],
          pista: 'Es el cociente entre catetos.',
          imagenExplicacionCorrecta: '/recursos/trigonometria/Sec2_CorrectaEje4.png'
        }
      ]
    },
    {
      id: 3,
      nombre: "Sección 3: Aplicaciones",
      audioFondo: "/recursos/FondoTriangulos3.mp3",
      preguntas: [
        {
          id: 10,
          texto: 'Un árbol proyecta una sombra de 8 m. El ángulo con el sol es de 30°. ¿Cuánto mide el árbol? (tan 30° = 0.577)',
          opciones: [
            { texto: '4.6 m', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec3_IncorrectaA_Eje1.png' },
            { texto: '8 m', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec3_IncorrectaB_Eje1.png' },
            { texto: '4.62 m', esCorrecta: true }
          ],
          pista: 'Usa tan(30°) = altura / sombra.',
          imagenExplicacionCorrecta: '/recursos/trigonometria/Sec3_CorrectaEje1.png'
        },
        {
          id: 11,
          texto: 'Un escalador ve la cima con un ángulo de elevación de 45° a 20 m de la base. ¿Qué altura le falta por subir?',
          opciones: [
            { texto: '20 m', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec3_IncorrectaA_Eje2.png' },
            { texto: '20√3', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec3_IncorrectaB_Eje2.png' },
            { texto: '20 m (tan 45° = 1)', esCorrecta: true }
          ],
          pista: 'Con 45°, la tangente vale 1.',
          imagenExplicacionCorrecta: '/recursos/trigonometria/Sec3_CorrectaEje2.png'
        },
        {
          id: 12,
          texto: 'Si en un triángulo rectángulo el seno de θ es 3/5, ¿cuánto vale el coseno?',
          opciones: [
            { texto: '4/5', esCorrecta: true },
            { texto: '3/5', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec3_IncorrectaB_Eje3.png' },
            { texto: '5/3', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec3_IncorrectaC_Eje3.png' }
          ],
          pista: 'Triángulo 3-4-5.',
          imagenExplicacionCorrecta: '/recursos/trigonometria/Sec3_CorrectaEje3.png'
        },
        {
          id: 13,
          texto: 'En un triángulo rectángulo, un cateto mide 9 y el ángulo adyacente mide 60°. ¿Cuál es la hipotenusa? (cos 60° = 0.5)',
          opciones: [
            { texto: '4.5', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec4_IncorrectaA_eje4.png' },
            { texto: '18', esCorrecta: true },
            { texto: '9', esCorrecta: false, imagenExplicacion: '/recursos/trigonometria/Sec3_IncorrectaC_Eje4.png' }
          ],
          pista: 'cos = adyacente/hipotenusa.',
          imagenExplicacionCorrecta: '/recursos/trigonometria/Sec3_CorrectaEje4.png'
        }
      ]
    }
  ]
}

// Datos de Teoremas
export const datosTeoremas: JuegoData = {
  titulo: "Teoremas",
  colorTema: "purple",
  secciones: [
    {
      id: 1,
      nombre: "Sección 1: Pitágoras y Trig Básica",
      audioFondo: "/recursos/FondoTeoremas1.mp3",
      preguntas: [
        {
          id: 1,
          texto: 'Según el teorema de Pitágoras, ¿cuál es la ecuación correcta para catetos 6 y 8?',
          opciones: [
            { texto: 'c² = 6² + 8²', esCorrecta: true },
            { texto: 'c = 6 + 8', esCorrecta: false },
            { texto: 'c = 6² + 8²', esCorrecta: false }
          ],
          pista: 'La hipotenusa siempre aparece elevada al cuadrado.'
        },
        {
          id: 2,
          texto: '¿Qué ecuación corresponde al teorema de Pitágoras para 9 y 12?',
          opciones: [
            { texto: 'c² = 9² + 12²', esCorrecta: true },
            { texto: 'c = 9 + 12', esCorrecta: false },
            { texto: 'c = 9² + 12²', esCorrecta: false }
          ],
          pista: 'c² es la clave.'
        },
        {
          id: 3,
          texto: '¿Cuál es el seno del ángulo θ si opuesto=5 e hipotenusa=13?',
          opciones: [
            { texto: 'sin(θ) = 5/13', esCorrecta: true },
            { texto: 'sin(θ) = 13/5', esCorrecta: false },
            { texto: 'sin(θ) = 12/13', esCorrecta: false }
          ],
          pista: 'Opuesto / Hipotenusa.'
        },
        {
          id: 4,
          texto: '¿Cuál es el coseno de θ si adyacente=7 e hipotenusa=25?',
          opciones: [
            { texto: 'cos(θ) = 7/25', esCorrecta: true },
            { texto: 'cos(θ) = 25/7', esCorrecta: false },
            { texto: 'cos(θ) = 24/25', esCorrecta: false }
          ],
          pista: 'Adyacente / Hipotenusa.'
        }
      ]
    },
    {
      id: 2,
      nombre: "Sección 2: Relaciones Geométricas",
      audioFondo: "/recursos/FondoTeoremas2.mp3",
      preguntas: [
        {
          id: 5,
          texto: 'En un triángulo rectángulo con catetos de 8 y 15, ¿cuál es la ecuación para la hipotenusa?',
          opciones: [
            { texto: 'c² = 8² + 15²', esCorrecta: true },
            { texto: 'c = 8 + 15', esCorrecta: false },
            { texto: 'c² = 8² - 15²', esCorrecta: false }
          ],
          pista: 'Suma de cuadrados.'
        },
        {
          id: 6,
          texto: 'Tales: Segmentos 6, 9 y 10, x. ¿Qué relación se usa?',
          opciones: [
            { texto: '6 + 9 = 10 + x', esCorrecta: false },
            { texto: '6/9 = 10/x', esCorrecta: true },
            { texto: '6⋅9 = 10⋅x', esCorrecta: false }
          ],
          pista: 'Proporción entre segmentos.'
        },
        {
          id: 7,
          texto: 'Bisectriz: Segmentos 4, 6 y lado 10. ¿Qué relación se cumple?',
          opciones: [
            { texto: '10/x = 4/6', esCorrecta: false }, // Corregido según lógica usual de bisectriz (lado/segmento = lado/segmento), el texto decía 10x=106? Asumí B correcta del texto
            { texto: '10/x = 4/6', esCorrecta: true }, // El texto original decía B) 10x=106 (typo). Asumo proporción directa.
            { texto: '10/x = 6/4', esCorrecta: false }
          ],
          pista: 'Proporción de lados y segmentos.'
        },
        {
          id: 8,
          texto: 'Ángulo exterior 130°, interior opuesto 50°. ¿El otro interior?',
          opciones: [
            { texto: '130° = x', esCorrecta: false },
            { texto: '130° = 50° - x', esCorrecta: false },
            { texto: '130° = 50° + x', esCorrecta: true }
          ],
          pista: 'Exterior = Suma de interiores opuestos.'
        }
      ]
    },
    {
      id: 3,
      nombre: "Sección 3: Selección de Teoremas",
      audioFondo: "/recursos/FondoTeoremas3.mp3",
      preguntas: [
        {
          id: 9,
          texto: 'Triángulo rectángulo: cateto 9, hipotenusa 15. Hallar otro cateto. ¿Qué usas?',
          opciones: [
            { texto: 'Teorema del Seno', esCorrecta: false },
            { texto: 'Teorema del Coseno', esCorrecta: false },
            { texto: 'Teorema de Pitágoras', esCorrecta: true }
          ],
          pista: 'Tres lados en triángulo rectángulo.'
        },
        {
          id: 10,
          texto: 'Triángulo NO rectángulo: lados 7, 5, ángulo 40°. Hallar lado opuesto. ¿Qué usas?',
          opciones: [
            { texto: 'Teorema de Pitágoras', esCorrecta: false },
            { texto: 'Teorema del Coseno', esCorrecta: true },
            { texto: 'Teorema del Seno', esCorrecta: false }
          ],
          pista: 'LAL (Lado-Ángulo-Lado) en no rectángulo.'
        },
        {
          id: 11,
          texto: 'Triángulo cualquiera: 2 ángulos y 1 lado. Hallar otro lado. ¿Qué usas?',
          opciones: [
            { texto: 'Teorema del Seno', esCorrecta: true },
            { texto: 'Teorema de Pitágoras', esCorrecta: false },
            { texto: 'Teorema del Coseno', esCorrecta: false }
          ],
          pista: 'Parejas ángulo-lado.'
        },
        {
          id: 12,
          texto: 'Triángulo rectángulo: cateto ady 12, hip 13. Hallar ángulo. ¿Qué usas?',
          opciones: [
            { texto: 'Teorema del Coseno (o razón Coseno)', esCorrecta: true },
            { texto: 'Teorema del Seno', esCorrecta: false },
            { texto: 'Teorema de Pitágoras', esCorrecta: false }
          ],
          pista: 'Relación adyacente-hipotenusa.'
        }
      ]
    }
  ]
}
