import Componente1 from './components/Componente1'
import Navigation from '../components/Navigation'
import './Ejercicio2.css'

function Ejercicio2() {
  return (
    <div className="ej2-page">
      <Navigation />
      <h1 className="ej2-page__title">Ejercicio 2</h1>
      <Componente1 />
    </div>
  )
}

export default Ejercicio2
