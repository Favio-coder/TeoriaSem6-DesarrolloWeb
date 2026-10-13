import { Link } from 'react-router-dom'
import './Placeholder.css'

function Placeholder({ numero }: { numero: number }) {
  return (
    <div className="placeholder">
      <h1 className="placeholder__title">Ejercicio {numero}</h1>
      <p className="placeholder__text">Contenido pendiente de desarrollo.</p>
      <Link className="placeholder__link" to="/ejercicio1">
        Volver al Ejercicio 1
      </Link>
    </div>
  )
}

export default Placeholder
