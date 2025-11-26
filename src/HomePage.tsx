import { useState } from "react"
import { Informacion } from "./Informacion"
import { Juego } from "./Juego"
import { Creadores } from "./Creadores"

type TabKey = "informacion" | "juego" | "creadores"

export const HomePage = () => {
  const [active, setActive] = useState<TabKey>("juego")

  return (
    <div className="w-full min-h-screen relative">
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto p-4">
          <div className="text-center mb-8 pt-6">
            <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border-2 border-white/30">
              <h1 className="text-6xl font-bold text-white drop-shadow-lg tracking-tight" style={{ fontFamily: 'serif' }}>π</h1>
              <h1 className="text-5xl font-bold text-white drop-shadow-lg tracking-tight">ensa</h1>
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
              {active === "juego" && <Juego />}
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

