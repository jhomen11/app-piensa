import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Juego = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-40">
      {!mostrarMenu ? (
        <button
          onClick={() => setMostrarMenu(true)}
          className="cursor-pointer px-8 py-4 text-xl font-bold text-white bg-linear-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-green-400 hover:border-green-300"
        >
          🎮 Iniciar
        </button>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-md items-center">
          <button 
            onClick={() => navigate('/triangulos')}
            className="cursor-pointer px-6 py-3 text-lg font-bold text-white bg-linear-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-blue-400 hover:border-blue-300 w-full">
            📐 Jugar Triángulos
          </button>

          <button 
            onClick={() => navigate('/teoremas')}
            className="cursor-pointer px-6 py-3 text-lg font-bold text-white bg-linear-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-purple-400 hover:border-purple-300 w-full">
            📚 Jugar Teoremas
          </button>

          <button
            onClick={() => setMostrarMenu(false)}
            className="cursor-pointer px-6 py-3 text-lg font-bold text-white bg-linear-to-r from-gray-600 to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-gray-500 hover:border-gray-400 w-full"
          >
            🏠 Menú
          </button>
        </div>
      )}
    </div>
  )
}
