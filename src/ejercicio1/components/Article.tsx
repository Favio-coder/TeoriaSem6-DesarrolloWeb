import './Article.css'

function Article({ children }: { children: React.ReactNode }) {
  return <article className="ej1-article">{children}</article>
}

export default Article
