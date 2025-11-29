import { useState } from 'react'

type AcordeonKey = 'grupo' | 'integrante1' | 'integrante2' | 'integrante3' | 'integrante4'

export const Creadores = () => {
  const [abierto, setAbierto] = useState<AcordeonKey | null>(null)

  const toggleAcordeon = (key: AcordeonKey) => {
    setAbierto(abierto === key ? null : key)
  }

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-purple-700 mb-3">👥 Nuestro Equipo</h2>
        <p className="text-lg text-gray-600">Conoce a los creadores de πensa</p>
      </div>

      <div className="space-y-3">
        {/* Nombre del Grupo */}
        <div className="border-2 border-purple-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
          <button
            onClick={() => toggleAcordeon('grupo')}
            className="w-full px-6 py-4 bg-linear-to-r from-purple-500 to-purple-600 text-white font-bold text-lg flex items-center justify-between hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <span>Nombre del Grupo</span>
            </span>
            <span className={`text-2xl transition-transform duration-300 ${abierto === 'grupo' ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {abierto === 'grupo' && (
            <div className="px-6 py-5 bg-purple-50 animate-fade-in">
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://dyirjsrazplsyupwtupn.supabase.co/storage/v1/object/public/app-pi-ensa-recursos/LogoGrupo.png" 
                  alt="Grupo REVELUV" 
                  className="max-w-full h-auto rounded-xl object-contain shadow-xl border-4 border-purple-300 bg-white"
                />
                <p className="text-2xl font-bold text-purple-700 text-center">
                  REVELUV
                </p>
                <p className="text-gray-600 text-center text-lg">
                  Equipo de desarrollo de πensa
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Integrante 1 */}
        <div className="border-2 border-blue-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
          <button
            onClick={() => toggleAcordeon('integrante1')}
            className="w-full px-6 py-4 bg-white text-gray-800 font-bold text-lg flex items-center justify-between hover:bg-blue-50 transition-all duration-200 border-b-2 border-blue-200"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <span>David Mendoza</span>
            </span>
            <span className={`text-2xl transition-transform duration-300 ${abierto === 'integrante1' ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {abierto === 'integrante1' && (
            <div className="px-6 py-5 bg-blue-50 animate-fade-in">
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://dyirjsrazplsyupwtupn.supabase.co/storage/v1/object/public/app-pi-ensa-recursos/David.png" 
                  alt="Integrante 1" 
                  className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-blue-300"
                />
                <p className="text-xl font-bold text-blue-700">[David Mendoza]</p>
              </div>
            </div>
          )}
        </div>

        {/* Integrante 2 */}
        <div className="border-2 border-green-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
          <button
            onClick={() => toggleAcordeon('integrante2')}
            className="w-full px-6 py-4 bg-white text-gray-800 font-bold text-lg flex items-center justify-between hover:bg-green-50 transition-all duration-200 border-b-2 border-green-200"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <span>Vicente Campos</span>
            </span>
            <span className={`text-2xl transition-transform duration-300 ${abierto === 'integrante2' ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {abierto === 'integrante2' && (
            <div className="px-6 py-5 bg-green-50 animate-fade-in">
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://dyirjsrazplsyupwtupn.supabase.co/storage/v1/object/public/app-pi-ensa-recursos/Vicente.png" 
                  alt="Integrante 2" 
                  className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-green-300"
                />
                <p className="text-xl font-bold text-green-700">[Vicente Campos]</p>
              </div>
            </div>
          )}
        </div>

        {/* Integrante 3 */}
        <div className="border-2 border-orange-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
          <button
            onClick={() => toggleAcordeon('integrante3')}
            className="w-full px-6 py-4 bg-white text-gray-800 font-bold text-lg flex items-center justify-between hover:bg-orange-50 transition-all duration-200 border-b-2 border-orange-200"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <span>Edgar Villasmil</span>
            </span>
            <span className={`text-2xl transition-transform duration-300 ${abierto === 'integrante3' ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {abierto === 'integrante3' && (
            <div className="px-6 py-5 bg-orange-50 animate-fade-in">
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://dyirjsrazplsyupwtupn.supabase.co/storage/v1/object/public/app-pi-ensa-recursos/Edgar.png" 
                  alt="Integrante 3" 
                  className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-orange-300"
                />
                <p className="text-xl font-bold text-orange-700">[Edgar Villasmil]</p>
              </div>
            </div>
          )}
        </div>

        {/* Integrante 4 */}
        <div className="border-2 border-pink-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
          <button
            onClick={() => toggleAcordeon('integrante4')}
            className="w-full px-6 py-4 bg-white text-gray-800 font-bold text-lg flex items-center justify-between hover:bg-pink-50 transition-all duration-200 border-b-2 border-pink-200"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <span>Sebastián Guzmán</span>
            </span>
            <span className={`text-2xl transition-transform duration-300 ${abierto === 'integrante4' ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {abierto === 'integrante4' && (
            <div className="px-6 py-5 bg-pink-50 animate-fade-in">
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="https://dyirjsrazplsyupwtupn.supabase.co/storage/v1/object/public/app-pi-ensa-recursos/Sebas.png" 
                  alt="Integrante 4" 
                  className="w-48 h-48 rounded-full object-contain shadow-xl border-4 border-pink-300 bg-white"
                />
                <p className="text-xl font-bold text-pink-700">[Sebastián Guzmán]</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
