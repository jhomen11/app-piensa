
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { JugarTriangulos } from './components/JugarTriangulos'
import { JugarTeoremas } from './components/JugarTeoremas'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/triangulos" element={<JugarTriangulos />} />
        <Route path="/teoremas" element={<JugarTeoremas />} />
      </Routes>
    </>
  )
}

export default App
