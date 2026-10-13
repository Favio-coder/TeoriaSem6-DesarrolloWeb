import './Hermano2.css'

type Persona = {
  nombre: string
  apellido: string
}

function Hermano2({ persona }: { persona: Persona | null }) {
  return (
    <div className="ej4-hermano2">
      <span className="ej4-hermano2__label">Hermano 2</span>

      <div className="ej4-hermano2__card">
        <h2 className="ej4-hermano2__card-title">Datos recibidos</h2>
        {persona ? (
          <p className="ej4-hermano2__card-value">
            {persona.nombre} {persona.apellido}
          </p>
        ) : (
          <p className="ej4-hermano2__card-empty">
            Aún no ha recibido datos del hermano 1.
          </p>
        )}
      </div>
    </div>
  )
}

export default Hermano2
