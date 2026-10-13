import Componente3 from './Componente3'
import type { Datos } from '../types'
import './Componente2.css'

function Componente2({ datos }: { datos: Datos }) {
  return (
    <div className="comp2">
      <span className="comp2__label">Componente2</span>
      <Componente3 datos={datos} />
    </div>
  )
}

export default Componente2
