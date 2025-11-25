import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface Nivel {
  imagen?: string
  texto?: string
  opciones: string[]
  correcta: string
  pista: string
}

const niveles: Nivel[] = [
  { imagen: '/recursos/Equilatero.png', opciones: ['Isósceles', 'Equilátero', 'Escaleno'], correcta: 'Equilátero', pista: 'Todos sus lados son iguales.' },
  { imagen: '/recursos/isosceles.png', opciones: ['Rectángulo', 'Isósceles', 'Obtusángulo'], correcta: 'Isósceles', pista: 'Tiene dos lados iguales y uno desigual.' },
  { imagen: '/recursos/cateto_adyacente.png', opciones: ['Cateto opuesto', 'Cateto adyacente', 'Hipotenusa'], correcta: 'Cateto adyacente', pista: 'Es el lado que forma el ángulo, pero no es la hipotenusa.' },
  { texto: 'Un triángulo con un ángulo de 90 grados se llama...', opciones: ['Rectángulo', 'Agudo', 'Obtusángulo'], correcta: 'Rectángulo', pista: 'Piensa en una esquina perfecta.' },
  { texto: 'La razón trigonométrica que se calcula como cateto opuesto / hipotenusa es...', opciones: ['Seno', 'Coseno', 'Tangente'], correcta: 'Seno', pista: 'Es el lado opuesto al ángulo dividido por la hipotenusa.' },
  { texto: 'En un triángulo rectángulo, la hipotenusa siempre es...', opciones: ['El lado más largo', 'El lado más corto', 'Un cateto'], correcta: 'El lado más largo', pista: 'Es la hipotenusa.' },
]

export const JugarTriangulos = () => {
  const navigate = useNavigate()
  const [nivelActual, setNivelActual] = useState(0)
  const [mostrarPista, setMostrarPista] = useState(false)
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null)
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [esCorrecta, setEsCorrecta] = useState(false)
  const [juegoCompletado, setJuegoCompletado] = useState(false)
  
  const audioFondoRef = useRef<HTMLAudioElement>(null)
  const audioVictoriaRef = useRef<HTMLAudioElement>(null)
  const audioPistaRef = useRef<HTMLAudioElement>(null)

  const nivel = niveles[nivelActual]

  // Control de audio de fondo
  useEffect(() => {
    const audioFondo = audioFondoRef.current
    if (audioFondo && !juegoCompletado) {
      audioFondo.volume = 0.3 // 30% de volumen
      audioFondo.play().catch(err => console.log('Error al reproducir audio:', err))
    }
    return () => {
      if (audioFondo) {
        audioFondo.pause()
        audioFondo.currentTime = 0
      }
    }
  }, [])

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
      audioPista.volume = 0.7 // 70% de volumen
      audioPista.currentTime = 0
      audioPista.play().catch(err => console.log('Error al reproducir pista:', err))
    }
  }

  const verificarRespuesta = (respuesta: string) => {
    setRespuestaSeleccionada(respuesta)
    setEsCorrecta(respuesta === nivel.correcta)
    setMostrarResultado(true)
  }

  const siguienteNivel = () => {
    if (nivelActual < niveles.length - 1) {
      setNivelActual(nivelActual + 1)
      resetearNivel()
    } else {
      // Completó todos los niveles
      setJuegoCompletado(true)
      setMostrarResultado(false)
    }
  }

  const resetearNivel = () => {
    setRespuestaSeleccionada(null)
    setMostrarResultado(false)
    setMostrarPista(false)
    setEsCorrecta(false)
  }

  const reiniciarJuego = () => {
    setNivelActual(0)
    setJuegoCompletado(false)
    resetearNivel()
    
    const audioVictoria = audioVictoriaRef.current
    const audioFondo = audioFondoRef.current
    
    if (audioVictoria) {
      audioVictoria.pause()
      audioVictoria.currentTime = 0
    }
    if (audioFondo) {
      audioFondo.currentTime = 0
      audioFondo.play().catch(err => console.log('Error al reproducir audio:', err))
    }
  }

  const volverAlMenu = () => {
    setNivelActual(0)
    resetearNivel()
    navigate('/')
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <audio ref={audioFondoRef} loop>
        <source src="/recursos/fondo.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioVictoriaRef}>
        <source src="/recursos/victoria.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioPistaRef}>
        <source src="/recursos/pista.mp3" type="audio/mpeg" />
      </audio>
      
      <div className="w-full">
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white/90 rounded-xl shadow-2xl p-8">
            {juegoCompletado ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <img src="/recursos/victoria.gif" alt="Victoria" className="max-w-md w-full rounded-xl shadow-2xl" />
                </div>
                <h1 className="text-5xl font-bold text-green-600 mb-4">🏆 ¡Victoria!</h1>
                <p className="text-2xl text-gray-700 mb-8 font-medium">¡Felicidades! Has completado todos los niveles de Triángulos</p>
                
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={reiniciarJuego}
                    className="px-8 py-4 text-xl font-bold text-white bg-linear-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-blue-400 min-w-[200px]"
                  >
                    🔄 Volver a Jugar
                  </button>
                  
                  <button
                    onClick={volverAlMenu}
                    className="px-8 py-4 text-xl font-bold text-white bg-linear-to-r from-gray-600 to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-gray-500 hover:border-gray-400 min-w-[200px]"
                  >
                    🏠 Menú Principal
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold text-blue-700">📐 Jugar Triángulos</h1>
                  <span className="text-lg font-semibold text-gray-600">Nivel {nivelActual + 1}/{niveles.length}</span>
                </div>

                {!mostrarResultado ? (
              <>
                {nivel.imagen && (
                  <div className="flex justify-center mb-6">
                    <img src={nivel.imagen} alt="Nivel" className="max-w-md w-full rounded-lg shadow-md" />
                  </div>
                )}

                {nivel.texto && (
                  <p className="text-xl text-gray-800 mb-6 text-center font-medium">{nivel.texto}</p>
                )}

                <div className="space-y-3 mb-6">
                  {nivel.opciones.map((opcion, index) => (
                    <button
                      key={index}
                      onClick={() => verificarRespuesta(opcion)}
                      className="w-full px-6 py-4 text-lg font-semibold text-gray-800 bg-white border-2 border-blue-400 rounded-xl hover:bg-blue-50 hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
                    >
                      {opcion}
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
                  className="w-full px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200 mb-4"
                >
                  {mostrarPista ? '🔒 Ocultar Pista' : '💡 Ver Pista'}
                </button>

                {mostrarPista && (
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-4">
                    <p className="text-yellow-800 font-medium">💡 Pista: {nivel.pista}</p>
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
                <p className="text-lg text-gray-700 mb-6">Tu respuesta: <strong>{respuestaSeleccionada}</strong></p>
                
                <div className="space-y-3">
                  {esCorrecta ? (
                    <button
                      onClick={siguienteNivel}
                      className="w-full px-6 py-3 text-lg font-bold text-white bg-linear-to-r from-green-500 to-green-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-green-400"
                    >
                      {nivelActual < niveles.length - 1 ? '➡️ Siguiente Nivel' : '🏆 Finalizar'}
                    </button>
                  ) : (
                    <button
                      onClick={resetearNivel}
                      className="w-full px-6 py-3 text-lg font-bold text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-orange-400"
                    >
                      🔄 Intentar de Nuevo
                    </button>
                  )}
                </div>
              </div>
            )}

                <button
                  onClick={volverAlMenu}
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

