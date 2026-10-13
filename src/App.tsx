import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Ejercicio1 from './ejercicio1/Ejercicio1'
import Ejercicio2 from './ejercicio2/Ejercicio2'
import Ejercicio3 from './ejercicio3/Ejercicio3'
import Ejercicio4 from './ejercicio4/Ejercicio4'
import Ejercicio5 from './ejercicio5/Ejercicio5'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ejercicio1" replace />} />
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route path="/ejercicio2" element={<Ejercicio2 />} />
        <Route path="/ejercicio3" element={<Ejercicio3 />} />
        <Route path="/ejercicio4" element={<Ejercicio4 />} />
        <Route path="/ejercicio5" element={<Ejercicio5 />} />
        <Route path="*" element={<Navigate to="/ejercicio1" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
