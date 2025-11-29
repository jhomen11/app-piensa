import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Informacion } from "./Informacion"
import { Juego } from "./Juego"
import { Creadores } from "./Creadores"
import { useAuth } from "./context/AuthContext"

type TabKey = "informacion" | "juego" | "creadores"

export const HomePage = () => {
  const [active, setActive] = useState<TabKey>("juego")
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen relative">
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">Hola, {user?.email}</span>
              <button 
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500/80 hover:bg-red-600 text-white rounded-lg text-sm font-bold transition-all"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>

          <div className="text-center mb-8 pt-2">
            <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border-2 border-white/30">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg tracking-tight" style={{ fontFamily: 'serif' }}>π</h1>
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight">ensa</h1>
            </div>
            <p className="text-white/90 text-lg mt-3 font-medium drop-shadow-md">Aprende geometría jugando</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl w-full border-2 border-white/50">
            <div className="p-6 border-b-2 border-gray-200">
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={() => setActive("juego")}
                  className={`cursor-pointer px-8 py-3 rounded-xl text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-w-[140px] ${
                    active === "juego" 
                      ? "bg-linear-to-r from-green-500 to-emerald-600 text-white border-2 border-green-400" 
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                  }`}
                >
                  🎮 Juego
                </button>

                <button
                  onClick={() => setActive("informacion")}
                  className={`cursor-pointer px-8 py-3 rounded-xl text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-w-[140px] ${
                    active === "informacion" 
                      ? "bg-linear-to-r from-blue-500 to-blue-600 text-white border-2 border-blue-400" 
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                  }`}
                >
                  ℹ️ Información
                </button>

                <button
                  onClick={() => setActive("creadores")}
                  className={`cursor-pointer px-8 py-3 rounded-xl text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 min-w-[140px] ${
                    active === "creadores" 
                      ? "bg-linear-to-r from-purple-500 to-purple-600 text-white border-2 border-purple-400" 
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                  }`}
                >
                  👥 Creadores
                </button>
              </div>
            </div>

            <div className="p-4">
              {active === "juego" && (
                <div className="flex flex-col gap-6">
                  <Juego />
                  
                  <div className="border-t-2 border-gray-200 pt-6 mt-2">
                    <h3 className="text-center text-xl font-bold text-gray-700 mb-4">🔥 ¿Buscas un reto mayor?</h3>
                    <button
                      onClick={() => navigate('/desafio')}
                      className="w-full max-w-md mx-auto block px-6 py-4 text-xl font-bold text-white bg-linear-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-yellow-400 hover:border-yellow-300"
                    >
                      ⚡ Modo Desafío (Contrarreloj)
                    </button>
                  </div>
                </div>
              )}
              {active === "informacion" && <Informacion />}
              {active === "creadores" && <Creadores />}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePage

