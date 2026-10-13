import './Aside.css'

function Aside({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <aside className="ej1-aside">
      <h2 className="ej1-aside__title">{title}</h2>
      {children}
    </aside>
  )
}

export default Aside
