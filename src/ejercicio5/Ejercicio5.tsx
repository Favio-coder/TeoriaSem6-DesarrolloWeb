import TablaEstudiantes from './components/TablaEstudiantes'
import Navigation from '../components/Navigation'
import './Ejercicio5.css'

const estudiantes = [
  { id: 1, name: 'Jose Lazo', city: 'Huancayo' },
  { id: 2, name: 'Ana Trelles', city: 'Lima' },
  { id: 3, name: 'Pedro Gonzales', city: 'Cusco' },
  { id: 4, name: 'Rosa Soto', city: 'Arequipa' },
]

function Ejercicio5() {
  return (
    <div className="ej5-page">
      <Navigation />
      <h1 className="ej5-page__title">Ejercicio 5 - Tabla de estudiantes</h1>
      <TablaEstudiantes estudiantes={estudiantes} />
    </div>
  )
}

export default Ejercicio5
