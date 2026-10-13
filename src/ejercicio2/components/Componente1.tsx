import Componente2 from './Componente2'
import type { Datos } from '../types'
import './Componente1.css'

function Componente1() {
  
  // Propiedad que se va a pasar
  const datos: Datos = {
    nombre: 'Jaime',
    dirección: 'Jr. Junin 450',
    ciudad: 'Huancayo',
  }

  return (
    <div className="comp1">
      <span className="comp1__label">Componente1</span>
      <Componente2 datos={datos} />
    </div>
  )
}

export default Componente1
