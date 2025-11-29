import { useNavigate } from 'react-router-dom'
import { JuegoQuiz } from './JuegoQuiz'
import { datosTriangulos } from '../data/niveles'

export const JugarTriangulos = () => {
  const navigate = useNavigate()

  return (
    <JuegoQuiz
      datos={datosTriangulos}
      onVolver={() => navigate('/')}
    />
  )
}

