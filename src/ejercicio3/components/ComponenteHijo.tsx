import { useState } from 'react'
import './ComponenteHijo.css'

function ComponenteHijo({ onEnviar }: { onEnviar: (dato: string) => void }) {
  const [texto, setTexto] = useState('')

  return (
    <div className="ej3-hijo">
      <span className="ej3-hijo__label">Componente Hijo</span>
      <label className="ej3-hijo__field" htmlFor="ej3-input">
        Escribe un dato:
      </label>
      <input
        id="ej3-input"
        className="ej3-hijo__input"
        type="text"
        value={texto}
        placeholder="Ej: Hola desde el hijo"
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        className="ej3-hijo__button"
        type="button"
        onClick={() => texto.trim() && onEnviar(texto.trim())}
      >
        Enviar al padre
      </button>
    </div>
  )
}

export default ComponenteHijo
