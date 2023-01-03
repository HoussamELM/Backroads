import logo from '../images/logo.svg'
import { pageLinks, pageIcons } from '../data'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt='logo'/>
          <button type="button" className="nav-toggle" id="nav-toggle" aria-label="logo">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map(link => <li><a href={link.href} className='nav-link'>{link.text}</a></li>)}
        </ul>

        <ul className="nav-icons">
          {pageIcons.map(icon =>
            <li key={icon.id}>
              <a href={icon.href} target="_blank" className="nav-icon" rel="noreferrer"
              ><i className={icon.icon}></i></a>
            </li>)}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar