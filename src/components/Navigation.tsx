import { Link } from 'react-router-dom'
import './Navigation.css'

const navItems = [
  { label: 'Ejercicio 1', path: '/ejercicio1' },
  { label: 'Ejercicio 2', path: '/ejercicio2' },
  { label: 'Ejercicio 3', path: '/ejercicio3' },
  { label: 'Ejercicio 4', path: '/ejercicio4' },
  { label: 'Ejercicio 5', path: '/ejercicio5' },
]

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item) => (
          <li key={item.path} className="nav__item">
            <Link className="nav__link" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation