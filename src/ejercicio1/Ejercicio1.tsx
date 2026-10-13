import Header from './components/Header'
import Section from './components/Section'
import Article from './components/Article'
import SectionInsideArticle from './components/SectionInsideArticle'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Navigation from '../components/Navigation'
import './Ejercicio1.css'

function Ejercicio1() {
  return (
    <div className="ej1-page">
      <Navigation />
      <Header />

      <div className="ej1-content">
        <div className="ej1-content__main">
          <Section>
            <Article>
              <SectionInsideArticle title="Article 1" />
              <SectionInsideArticle title="Article 2" />
              <SectionInsideArticle title="Article 3" />
            </Article>
          </Section>
        </div>

        <div className="ej1-content__side">
          <Aside title="Aside" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Ejercicio1
