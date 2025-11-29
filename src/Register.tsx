import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './lib/supabase'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 to-blue-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">πensa</h1>
          <p className="text-gray-600">Crea tu cuenta para empezar</p>
        </div>

        {success ? (
          <div className="text-center animate-fade-in">
            <div className="bg-green-100 text-green-700 p-6 rounded-xl mb-6 border-2 border-green-200">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">¡Registro Exitoso!</h3>
              <p className="mb-4">
                Hemos enviado un correo de confirmación a <strong>{email}</strong>.
              </p>
              <p className="text-sm">
                Por favor, revisa tu bandeja de entrada (y spam) y confirma tu cuenta para poder iniciar sesión.
              </p>
            </div>
            
            <Link 
              to="/login"
              className="inline-block w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Ir a Iniciar Sesión
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-hidden transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-hidden transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Cargando...' : 'Registrarse'}
              </button>
            </form>

            <div className="mt-6 text-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-2">¿Ya tienes cuenta?</p>
              <Link 
                to="/login"
                className="inline-block w-full py-3 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all"
              >
                Inicia Sesión
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
