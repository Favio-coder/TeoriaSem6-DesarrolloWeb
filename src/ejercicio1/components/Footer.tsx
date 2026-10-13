import './Footer.css'

function Footer() {
  return (
    <footer className="ej1-footer">
      <p className="ej1-footer__text">&copy; 2026 Mi Sitio Web - Ejercicio 1</p>
      <ul className="ej1-footer__links">
        <li>
          <a className="ej1-footer__link" href="#">
            Contacto 1
          </a>
        </li>
        <li>
          <a className="ej1-footer__link" href="#">
            Contacto 2
          </a>
        </li>
        <li>
          <a className="ej1-footer__link" href="#">
            Contacto 3
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
