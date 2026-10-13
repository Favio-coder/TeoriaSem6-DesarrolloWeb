import Componente4 from './Componente4'
import type { Datos } from '../types'
import './Componente3.css'

function Componente3({ datos }: { datos: Datos }) {
  return (
    <div className="comp3">
      <span className="comp3__label">Componente3</span>
      <Componente4 datos={datos} />
    </div>
  )
}

export default Componente3
