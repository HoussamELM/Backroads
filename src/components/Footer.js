import { pageLinks, pageIcons } from "../data"

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">

{pageLinks.map(link => (
  <li>
          <a href={link.href} className="footer-link">{link.text}</a>
  </li>
))}
      </ul>
      <ul className="footer-icons">

      {pageIcons.map(icon => (
        <li>
          <a 
          href={icon.href}
          target='_blank'
          className='footer-icon'
          rel="noreferrer"
            ><i className={icon.icon}></i
          ></a>
        </li>
))}

      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer