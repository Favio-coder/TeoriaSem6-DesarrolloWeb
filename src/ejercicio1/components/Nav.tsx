import './Nav.css'

const links = [
  { label: 'ejemplo1', href: '#' },
  { label: 'ejemplo2', href: '#' },
  { label: 'ejemplo3', href: '#' },
  { label: 'ejemplo4', href: '#' },
  { label: 'ejemplo5', href: '#' },
]

function Nav() {
  return (
    <nav className="ej1-nav">
      <ul className="ej1-nav__list">
        {links.map((link) => (
          <li key={link.label} className="ej1-nav__item">
            <a className="ej1-nav__link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
