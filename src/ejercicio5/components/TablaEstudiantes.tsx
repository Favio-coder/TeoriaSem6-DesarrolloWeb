import type { Estudiante } from '../types'
import './TablaEstudiantes.css'

function TablaEstudiantes({ estudiantes }: { estudiantes: Estudiante[] }) {
  return (
    <table className="ej5-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Ciudad</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map((est) => (
          <tr key={est.id}>
            <td>{est.id}</td>
            <td>{est.name}</td>
            <td>{est.city}</td>
            <td>
              <button>Ver</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaEstudiantes
