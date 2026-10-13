import './SectionInsideArticle.css'

function SectionInsideArticle({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="ej1-section-inner">
      <h3 className="ej1-section-inner__title">{title}</h3>
      {children}
    </section>
  )
}

export default SectionInsideArticle
