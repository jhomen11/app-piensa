
export const Informacion = () => {
  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-700 mb-3">¡Bienvenido a πensa! 🎓</h2>
        <p className="text-xl text-gray-700 font-medium">Donde aprender geometría es divertido</p>
      </div>

      <div className="space-y-6 text-gray-800">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
          <h3 className="text-2xl font-bold text-blue-700 mb-3">📐 ¿Qué es πensa?</h3>
          <p className="text-lg leading-relaxed">
            πensa es un juego educativo diseñado para que aprendas geometría de forma interactiva y entretenida. 
            A través de desafíos progresivos, podrás dominar conceptos sobre triángulos, teoremas y razones trigonométricas.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
          <h3 className="text-2xl font-bold text-green-700 mb-3">🎮 Cómo Jugar</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <span><strong>Elige tu juego:</strong> Triángulos o Teoremas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <span><strong>Responde las preguntas:</strong> Lee cuidadosamente cada pregunta y selecciona la respuesta correcta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <span><strong>Usa las pistas:</strong> Si te atascas, presiona el botón "💡 Ver Pista" para obtener ayuda</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <span><strong>Avanza de nivel:</strong> Completa todos los niveles para alcanzar la victoria</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
          <h3 className="text-2xl font-bold text-purple-700 mb-3">💡 Consejos</h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>Lee cada pregunta con atención antes de responder</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>Las pistas están ahí para ayudarte, ¡no dudes en usarlas!</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>Si fallas, puedes intentar de nuevo sin penalización</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>Disfruta de la música y los efectos de sonido mientras juegas</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
          <h3 className="text-2xl font-bold text-yellow-700 mb-3">🎯 Objetivo</h3>
          <p className="text-lg leading-relaxed">
            Tu misión es completar todos los niveles de cada juego demostrando tu conocimiento en geometría. 
            ¡Cada nivel superado te acerca más a convertirte en un experto en triángulos y teoremas!
          </p>
        </div>
      </div>
    </div>
  )
}
