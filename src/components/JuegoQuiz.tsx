import { useState, useEffect, useRef } from 'react'
import type { JuegoData, Opcion } from '../data/niveles'

interface JuegoQuizProps {
  datos: JuegoData
  onVolver: () => void
}

export const JuegoQuiz = ({ datos, onVolver }: JuegoQuizProps) => {
  // Estado del juego
  const [seccionActualIndex, setSeccionActualIndex] = useState(0)
  const [preguntaActualIndex, setPreguntaActualIndex] = useState(0)
  const [juegoCompletado, setJuegoCompletado] = useState(false)
  // Estado de transición de sección
  const [mostrarTransicion, setMostrarTransicion] = useState(false)
  
  // Estado de la pregunta actual
  const [mostrarPista, setMostrarPista] = useState(false)

  const seccionActual = datos.secciones[seccionActualIndex]
  const preguntaActual = seccionActual.preguntas[preguntaActualIndex]

  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<Opcion | null>(null)
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [esCorrecta, setEsCorrecta] = useState(false)
  
  // Referencias de audio
  const audioFondoRef = useRef<HTMLAudioElement>(null)
  const audioVictoriaRef = useRef<HTMLAudioElement>(null)
  const audioPistaRef = useRef<HTMLAudioElement>(null)



  // Mapeo de colores para temas
  const themeColors = {
    blue: {
      text: 'text-blue-700',
      border: 'border-blue-400',
      borderHover: 'hover:border-blue-600',
      bg: 'bg-blue-100',
      bgHover: 'hover:bg-blue-200',
      buttonBg: 'bg-linear-to-r from-blue-500 to-blue-600',
      buttonHover: 'hover:bg-blue-50',
    },
    purple: {
      text: 'text-purple-700',
      border: 'border-purple-400',
      borderHover: 'hover:border-purple-600',
      bg: 'bg-purple-100',
      bgHover: 'hover:bg-purple-200',
      buttonBg: 'bg-linear-to-r from-purple-500 to-purple-600',
      buttonHover: 'hover:bg-purple-50',
    },
    green: {
      text: 'text-green-700',
      border: 'border-green-400',
      borderHover: 'hover:border-green-600',
      bg: 'bg-green-100',
      bgHover: 'hover:bg-green-200',
      buttonBg: 'bg-linear-to-r from-green-500 to-green-600',
      buttonHover: 'hover:bg-green-50',
    },
  }

  const theme = themeColors[datos.colorTema]

  // Control de audio de fondo (cambia con la sección)
  useEffect(() => {
    const audioFondo = audioFondoRef.current
    if (audioFondo && !juegoCompletado) {
      audioFondo.src = seccionActual.audioFondo
      audioFondo.volume = 0.3
      audioFondo.load()
      audioFondo.play().catch(err => console.log('Error al reproducir audio:', err))
    }
    return () => {
      if (audioFondo) {
        audioFondo.pause()
        audioFondo.currentTime = 0
      }
    }
  }, [seccionActualIndex, juegoCompletado])

  // Control de audio de victoria
  useEffect(() => {
    if (juegoCompletado) {
      const audioFondo = audioFondoRef.current
      const audioVictoria = audioVictoriaRef.current
      
      if (audioFondo) {
        audioFondo.pause()
      }
      if (audioVictoria) {
        audioVictoria.volume = 0.5
        audioVictoria.play().catch(err => console.log('Error al reproducir victoria:', err))
      }
    }
  }, [juegoCompletado])

  const reproducirAudioPista = () => {
    const audioPista = audioPistaRef.current
    if (audioPista) {
      audioPista.volume = 0.7
      audioPista.currentTime = 0
      audioPista.play().catch(err => console.log('Error al reproducir pista:', err))
    }
  }

  const verificarRespuesta = (opcion: Opcion) => {
    setRespuestaSeleccionada(opcion)
    setEsCorrecta(opcion.esCorrecta)
    setMostrarResultado(true)
  }

  const siguientePregunta = () => {
    // Si hay más preguntas en la sección actual
    if (preguntaActualIndex < seccionActual.preguntas.length - 1) {
      setPreguntaActualIndex(preguntaActualIndex + 1)
      resetearEstadoPregunta()
    } 
    // Si hay más secciones, mostrar transición
    else if (seccionActualIndex < datos.secciones.length - 1) {
      setMostrarTransicion(true)
    } 
    // Juego completado
    else {
      setJuegoCompletado(true)
      setMostrarResultado(false)
    }
  }

  const avanzarSeccion = () => {
    setMostrarTransicion(false)
    setSeccionActualIndex(seccionActualIndex + 1)
    setPreguntaActualIndex(0)
    resetearEstadoPregunta()
  }

  const resetearEstadoPregunta = () => {
    setRespuestaSeleccionada(null)
    setMostrarResultado(false)
    setMostrarPista(false)
    setEsCorrecta(false)
  }

  const reiniciarJuego = () => {
    setSeccionActualIndex(0)
    setPreguntaActualIndex(0)
    setJuegoCompletado(false)
    resetearEstadoPregunta()
    
    const audioVictoria = audioVictoriaRef.current
    const audioFondo = audioFondoRef.current
    
    if (audioVictoria) {
      audioVictoria.pause()
      audioVictoria.currentTime = 0
    }
    if (audioFondo) {
      audioFondo.currentTime = 0
      // El useEffect se encargará de reproducir el audio de la sección 1
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <audio ref={audioFondoRef} loop />
      <audio ref={audioVictoriaRef}>
        <source src="/recursos/victoria.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioPistaRef}>
        <source src="/recursos/pista.mp3" type="audio/mpeg" />
      </audio>
      
      <div className="w-full">
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white/90 rounded-xl shadow-2xl p-8">
            {mostrarTransicion ? (
               <div className="text-center py-12 animate-fade-in">
                 <h2 className="text-4xl font-bold text-gray-800 mb-4">¡Sección Completada! 🎉</h2>
                 <p className="text-xl text-gray-600 mb-8">Has terminado {seccionActual.nombre}</p>
                 
                 <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 mb-8 max-w-lg mx-auto">
                   <p className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-2">Siguiente Nivel</p>
                   <h3 className="text-2xl font-bold text-gray-800">{datos.secciones[seccionActualIndex + 1]?.nombre}</h3>
                 </div>

                 <button
                   onClick={avanzarSeccion}
                   className={`px-8 py-4 text-xl font-bold text-white ${theme.buttonBg} rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 ${theme.border}`}
                 >
                   🚀 Continuar
                 </button>
               </div>
            ) : juegoCompletado ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <img src="/recursos/victoria.gif" alt="Victoria" className="max-w-md w-full rounded-xl shadow-2xl" />
                </div>
                <h1 className="text-5xl font-bold text-green-600 mb-4">🏆 ¡Victoria!</h1>
                <p className="text-2xl text-gray-700 mb-8 font-medium">¡Felicidades! Has completado todos los niveles de {datos.titulo}</p>
                
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={reiniciarJuego}
                    className={`px-8 py-4 text-xl font-bold text-white ${theme.buttonBg} rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 ${theme.border} min-w-[200px]`}
                  >
                    🔄 Volver a Jugar
                  </button>
                  
                  <button
                    onClick={onVolver}
                    className="px-8 py-4 text-xl font-bold text-white bg-linear-to-r from-gray-600 to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-gray-500 hover:border-gray-400 min-w-[200px]"
                  >
                    🏠 Menú Principal
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
                  <h1 className={`text-3xl font-bold ${theme.text}`}>📐 {datos.titulo}</h1>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-gray-700">{seccionActual.nombre}</span>
                    <span className="text-sm font-semibold text-gray-500">Pregunta {preguntaActualIndex + 1}/{seccionActual.preguntas.length}</span>
                  </div>
                </div>

                {!mostrarResultado ? (
              <>
                {preguntaActual.imagen && (
                  <div className="flex justify-center mb-6">
                    <img src={preguntaActual.imagen} alt="Pregunta" className="max-w-md w-full rounded-lg shadow-md" />
                  </div>
                )}

                {preguntaActual.texto && (
                  <p className="text-xl text-gray-800 mb-6 text-center font-medium">{preguntaActual.texto}</p>
                )}

                <div className="space-y-3 mb-6">
                  {preguntaActual.opciones.map((opcion, index) => (
                    <button
                      key={index}
                      onClick={() => verificarRespuesta(opcion)}
                      className={`w-full px-6 py-4 text-lg font-semibold text-gray-800 bg-white border-2 ${theme.border} rounded-xl ${theme.buttonHover} ${theme.borderHover} hover:scale-105 active:scale-95 transition-all duration-200 shadow-md`}
                    >
                      {opcion.texto}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setMostrarPista(!mostrarPista)
                    if (!mostrarPista) {
                      reproducirAudioPista()
                    }
                  }}
                  className={`w-full px-4 py-2 text-sm font-semibold ${theme.text} ${theme.bg} rounded-lg ${theme.bgHover} transition-all duration-200 mb-4`}
                >
                  {mostrarPista ? '🔒 Ocultar Pista' : '💡 Ver Pista'}
                </button>

                {mostrarPista && (
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-4">
                    <p className="text-yellow-800 font-medium">💡 Pista: {preguntaActual.pista}</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center">
                {esCorrecta ? (
                  <div className="flex justify-center mb-4">
                    <img src="/recursos/joker-happy.png" alt="Correcto" className="max-w-sm w-full rounded-lg shadow-lg" />
                  </div>
                ) : (
                  <div className="flex justify-center mb-4">
                    <img src="/recursos/joker-sad.png" alt="Incorrecto" className="max-w-sm w-full rounded-lg shadow-lg" />
                  </div>
                )}
                <h2 className={`text-3xl font-bold mb-4 ${esCorrecta ? 'text-green-600' : 'text-red-600'}`}>
                  {esCorrecta ? '¡Correcto!' : 'Incorrecto'}
                </h2>
                <p className="text-lg text-gray-700 mb-6">Tu respuesta: <strong>{respuestaSeleccionada?.texto}</strong></p>
                
                {/* Acordeón de Explicación */}
                <div className="mb-8 text-left">
                  <div className={`border-l-4 ${esCorrecta ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'} p-4 rounded-r-lg`}>
                    <h3 className="font-bold text-lg mb-2">📖 Explicación:</h3>
                    
                    {esCorrecta ? (
                      // Explicación Correcta
                      <div>
                        <p className="mb-2">¡Muy bien! Esa es la respuesta correcta.</p>
                        {preguntaActual.imagenExplicacionCorrecta && (
                          <div className="mt-3">
                            <img 
                              src={preguntaActual.imagenExplicacionCorrecta} 
                              alt="Explicación" 
                              className="max-w-full h-auto rounded-lg shadow-sm border border-gray-200"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      // Explicación Incorrecta
                      <div>
                        <p className="mb-2">
                          {respuestaSeleccionada?.explicacion || "Esa no es la respuesta correcta. Revisa la imagen para entender mejor."}
                        </p>
                        {respuestaSeleccionada?.imagenExplicacion && (
                          <div className="mt-3">
                            <img 
                              src={respuestaSeleccionada.imagenExplicacion} 
                              alt="Explicación Error" 
                              className="max-w-full h-auto rounded-lg shadow-sm border border-gray-200"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {esCorrecta ? (
                    <button
                      onClick={siguientePregunta}
                      className="w-full px-6 py-3 text-lg font-bold text-white bg-linear-to-r from-green-500 to-green-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-green-400"
                    >
                      {/* Lógica para texto del botón */}
                      {(preguntaActualIndex < seccionActual.preguntas.length - 1) || (seccionActualIndex < datos.secciones.length - 1) 
                        ? '➡️ Siguiente' 
                        : '🏆 Finalizar'}
                    </button>
                  ) : (
                    <button
                      onClick={resetearEstadoPregunta}
                      className="w-full px-6 py-3 text-lg font-bold text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-orange-400"
                    >
                      🔄 Intentar de Nuevo
                    </button>
                  )}
                </div>
              </div>
            )}

                <button
                  onClick={onVolver}
                  className="w-full mt-6 px-6 py-3 text-lg font-bold text-white bg-linear-to-r from-gray-600 to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-gray-500 hover:border-gray-400"
                >
                  🏠 Volver al Menú
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
