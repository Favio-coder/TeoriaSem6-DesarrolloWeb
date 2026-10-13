import { useState } from 'react'
import Hermano1 from './components/Hermano1'
import Hermano2 from './components/Hermano2'
import Navigation from '../components/Navigation'
import './Ejercicio4.css'

type Persona = {
  nombre: string
  apellido: string
}

function Ejercicio4() {
  const [persona, setPersona] = useState<Persona | null>(null)

  return (
    <div className="ej4-page">
      <Navigation />
      <h1 className="ej4-page__title">Ejercicio 4 - Hermanos</h1>

      <div className="ej4-parent">
        <span className="ej4-parent__label">Componente Padre</span>

        <div className="ej4-parent__children">
          <Hermano1 onEnviar={setPersona} />
          <Hermano2 persona={persona} />
        </div>
      </div>
    </div>
  )
}

export default Ejercicio4
