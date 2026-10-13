import { useState } from 'react'
import ComponenteHijo from './components/ComponenteHijo'
import './Ejercicio3.css'

function Ejercicio3() {
  const [mensaje, setMensaje] = useState<string>('')

  return (
    <div className="ej3-page">
      <h1 className="ej3-page__title">Ejercicio 3 - Datos del hijo al padre</h1>

      <div className="ej3-parent">
        <span className="ej3-parent__label">Componente Padre</span>

        <ComponenteHijo onEnviar={setMensaje} />

        <div className="ej3-parent__result">
          <h2 className="ej3-parent__result-title">Dato recibido del hijo:</h2>
          {mensaje ? (
            <p className="ej3-parent__result-value">{mensaje}</p>
          ) : (
            <p className="ej3-parent__result-empty">
              Aún no se ha enviado ningún dato.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Ejercicio3
