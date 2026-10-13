import { useState } from 'react'
import './Hermano1.css'

type Persona = {
  nombre: string
  apellido: string
}

function Hermano1({ onEnviar }: { onEnviar: (persona: Persona) => void }) {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  return (
    <div className="ej4-hermano1">
      <span className="ej4-hermano1__label">Hermano 1</span>

      <label className="ej4-hermano1__field" htmlFor="ej4-nombre">
        Nombre:
      </label>
      <input
        id="ej4-nombre"
        className="ej4-hermano1__input"
        type="text"
        value={nombre}
        placeholder="Ej: Jaime"
        onChange={(e) => setNombre(e.target.value)}
      />

      <label className="ej4-hermano1__field" htmlFor="ej4-apellido">
        Apellido:
      </label>
      <input
        id="ej4-apellido"
        className="ej4-hermano1__input"
        type="text"
        value={apellido}
        placeholder="Ej: Salas"
        onChange={(e) => setApellido(e.target.value)}
      />

      <button
        className="ej4-hermano1__button"
        type="button"
        onClick={() => {
          if (nombre.trim() && apellido.trim()) {
            onEnviar({ nombre: nombre.trim(), apellido: apellido.trim() })
          }
        }}
      >
        Enviar al hermano 2
      </button>
    </div>
  )
}

export default Hermano1
