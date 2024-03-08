
import { NavLink } from "react-router-dom";

import "./style.css";
import BtnDarkmode from "../btn-darkmode/BtnDarkmode";

const Navbar = () => {
    const activeLink = "routes-item__link routes-item__link--active";
    const normalLink = "routes-item__link";

    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row">

              <NavLink className="logo" to="/">Kvitka Alyona</NavLink>

              <BtnDarkmode />

              <ul className="routes">
                <li className="routes-item"><NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink></li>
                <li className="routes-item"><NavLink to="/skills" className={({isActive}) => isActive ? activeLink : normalLink}>Skills</NavLink></li>
                <li className="routes-item"><NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>
              </ul>

            </div>
        </div>
      </nav>
      );
}
 
export default Navbar;