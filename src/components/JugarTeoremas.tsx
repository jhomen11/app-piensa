import { useNavigate } from 'react-router-dom'
import { JuegoQuiz } from './JuegoQuiz'
import { datosTeoremas } from '../data/niveles'

export const JugarTeoremas = () => {
  const navigate = useNavigate()

  return (
    <JuegoQuiz
      datos={datosTeoremas}
      onVolver={() => navigate('/')}
    />
  )
}

