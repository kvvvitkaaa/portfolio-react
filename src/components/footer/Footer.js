import instagram from "../../images/icons/insta.png";
import github from "../../images/icons/github.png";
import linkedin from "../../images/icons/linkedin.png";

import "./style.css";

const Footer = () => {
    return ( 
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <ul className="contacts">
            <li className="contacts-item" >
              <a href="#!" target='_blank' rel="noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li className="contacts-item" >
              <a href="https://github.com/kvvvitkaaa" target='_blank' rel="noreferrer">
                <img src={github} alt="GitHub" />
              </a>
            </li>
            <li className="contacts-item">
              <a href="https://www.linkedin.com/in/alyona-kvitka/" target='_blank' rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Alona Kvitka</p>
          </div>
        </div>
      </div>
    </footer>
    );
}
 
export default Footer;