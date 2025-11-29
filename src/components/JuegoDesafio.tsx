import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { generarProblema, type ProblemaMatematico } from '../utils/mathGenerator'

export const JuegoDesafio = () => {
  const navigate = useNavigate()
  
  // Estado del juego
  const [nivel, setNivel] = useState(1)
  const [puntosTotales, setPuntosTotales] = useState(0)
  const [problema, setProblema] = useState<ProblemaMatematico | null>(null)
  const [tiempoRestante, setTiempoRestante] = useState(60)
  const [juegoTerminado, setJuegoTerminado] = useState(false)
  const [mensajeFinal, setMensajeFinal] = useState('')

  // Referencias de audio
  const audioFondoRef = useRef<HTMLAudioElement>(null)
  const audioFinalRef = useRef<HTMLAudioElement>(null)

  // Inicializar juego
  useEffect(() => {
    nuevoProblema()
    
    // Iniciar audio
    const audioFondo = audioFondoRef.current
    if (audioFondo) {
      audioFondo.volume = 0.3
      audioFondo.play().catch(err => console.log('Error audio fondo:', err))
    }

    return () => {
      if (audioFondo) {
        audioFondo.pause()
        audioFondo.currentTime = 0
      }
    }
  }, [])

  // Temporizador
  useEffect(() => {
    if (juegoTerminado) return

    const timer = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          terminarJuego("¡Se acabó el tiempo!")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [juegoTerminado, nivel]) // Reiniciar timer cuando cambia el nivel

  const nuevoProblema = () => {
    setProblema(generarProblema(nivel))
    setTiempoRestante(60)
  }

  const calcularPuntos = (tiempo: number) => {
    if (tiempo >= 45) return 100
    if (tiempo >= 25) return 50
    return 25
  }

  const verificarRespuesta = (respuesta: number) => {
    if (!problema) return

    if (respuesta === problema.correcta) {
      const puntosGanados = calcularPuntos(tiempoRestante)
      setPuntosTotales(prev => prev + puntosGanados)
      setNivel(prev => prev + 1)
      nuevoProblema()
    } else {
      terminarJuego("¡Respuesta incorrecta!")
    }
  }

  const terminarJuego = (motivo: string) => {
    setJuegoTerminado(true)
    setMensajeFinal(motivo)
    
    // Parar música fondo y poner música final
    if (audioFondoRef.current) audioFondoRef.current.pause()
    if (audioFinalRef.current) {
      audioFinalRef.current.volume = 0.5
      audioFinalRef.current.play().catch(err => console.log('Error audio final:', err))
    }
  }

  const reiniciarJuego = () => {
    setNivel(1)
    setPuntosTotales(0)
    setJuegoTerminado(false)
    nuevoProblema()
    
    if (audioFinalRef.current) {
      audioFinalRef.current.pause()
      audioFinalRef.current.currentTime = 0
    }
    if (audioFondoRef.current) {
      audioFondoRef.current.currentTime = 0
      audioFondoRef.current.play()
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900">
      <audio ref={audioFondoRef} loop>
        <source src="/recursos/DesafioFondo.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioFinalRef}>
        <source src="/recursos/DesafioFinalFondo.mp3" type="audio/mpeg" />
      </audio>

      <div className="w-full max-w-2xl p-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl border-4 border-yellow-500 p-8 relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-yellow-400 via-red-500 to-yellow-400 animate-pulse"></div>

          {juegoTerminado ? (
            <div className="text-center py-8 animate-fade-in">
              <h1 className="text-5xl font-bold text-red-500 mb-4">GAME OVER</h1>
              <p className="text-2xl text-yellow-400 mb-2">{mensajeFinal}</p>
              <div className="text-6xl font-bold text-white mb-8 drop-shadow-lg">
                {puntosTotales} <span className="text-2xl text-gray-400">pts</span>
              </div>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={reiniciarJuego}
                  className="px-8 py-4 text-xl font-bold text-gray-900 bg-yellow-400 rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200 min-w-[200px]"
                >
                  🔄 Reintentar
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="px-8 py-4 text-xl font-bold text-white bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 hover:scale-105 transition-all duration-200 min-w-[200px]"
                >
                  🏠 Salir
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header del juego */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-yellow-400 font-bold text-xl">
                  Nivel {nivel}
                </div>
                <div className="text-white font-bold text-2xl bg-gray-700 px-4 py-2 rounded-lg border border-gray-600">
                  {puntosTotales} pts
                </div>
              </div>

              {/* Barra de tiempo */}
              <div className="mb-8">
                <div className="flex justify-between text-gray-400 mb-1 text-sm font-bold">
                  <span>TIEMPO</span>
                  <span>{tiempoRestante}s</span>
                </div>
                <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden border border-gray-600">
                  <div 
                    className={`h-full transition-all duration-1000 ease-linear ${
                      tiempoRestante > 30 ? 'bg-green-500' : 
                      tiempoRestante > 10 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${(tiempoRestante / 60) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Problema */}
              <div className="text-center mb-10">
                <div className="text-7xl font-bold text-white font-mono tracking-wider drop-shadow-md">
                  {problema?.pregunta} = ?
                </div>
              </div>

              {/* Opciones */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {problema?.opciones.map((opcion, index) => (
                  <button
                    key={index}
                    onClick={() => verificarRespuesta(opcion)}
                    className="py-6 text-3xl font-bold text-white bg-gray-700 rounded-xl border-2 border-gray-600 hover:bg-gray-600 hover:border-yellow-400 hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all duration-150 shadow-lg"
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
