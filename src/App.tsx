import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './HomePage'
import { JugarTriangulos } from './components/JugarTriangulos'
import { JugarTeoremas } from './components/JugarTeoremas'
import { JuegoDesafio } from './components/JuegoDesafio'
import { ScrollToTop } from './components/ScrollToTop'
import { Login } from './Login'
import { Register } from './Register'
import { AuthProvider, useAuth } from './context/AuthContext'

// Componente para proteger rutas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()
  
  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>
  
  if (!user) return <Navigate to="/login" />
  
  return <>{children}</>
}

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/triangulos" element={
          <ProtectedRoute>
            <JugarTriangulos />
          </ProtectedRoute>
        } />
        <Route path="/teoremas" element={
          <ProtectedRoute>
            <JugarTeoremas />
          </ProtectedRoute>
        } />
        <Route path="/desafio" element={
          <ProtectedRoute>
            <JuegoDesafio />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  )
}

export default App
