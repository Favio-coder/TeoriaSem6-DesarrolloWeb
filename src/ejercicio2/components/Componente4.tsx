import type { Datos } from '../types'
import './Componente4.css'

function Componente4({ datos }: { datos: Datos }) {
  return (
    <div className="comp4">
      <span className="comp4__label">Componente4</span>
      <div className="comp4__card">
        <h2 className="comp4__card-title">Datos del contacto</h2>
        <dl className="comp4__list">
          <div className="comp4__row">
            <dt className="comp4__key">Nombre:</dt>
            <dd className="comp4__value">{datos.nombre}</dd>
          </div>
          <div className="comp4__row">
            <dt className="comp4__key">Dirección:</dt>
            <dd className="comp4__value">{datos.dirección}</dd>
          </div>
          <div className="comp4__row">
            <dt className="comp4__key">Ciudad:</dt>
            <dd className="comp4__value">{datos.ciudad}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Componente4
