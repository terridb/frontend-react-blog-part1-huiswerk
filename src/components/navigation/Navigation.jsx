import {NavLink} from "react-router-dom";
import "./Navigation.css"
import mediumLogo from "../../assets/logo-medium.png"

function Navigation() {
    return (
        <>
            <nav>
                <img className="nav-logo" src={mediumLogo} alt="Logo"/>
                <ul>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/overzicht">
                            Alle posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/nieuwe-post">
                            Nieuwe post maken
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;