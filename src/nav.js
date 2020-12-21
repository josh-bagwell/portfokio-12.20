import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
        <div id="navbar" className="nav">
            <div className="nav-anchors">
                <NavLink
                    className="links"
                    activeClassName="active active-line"
                    to="/about"
                >
                    <div>About</div>
                </NavLink>
                <NavLink
                    className="links"
                    activeClassName="active active-line"
                    to="/projects"
                >
                    <div>Projects</div>
                </NavLink>
            </div>
            <div className="nav-title">
                <Link className="links" to="/">
                    <div>Josh Bagwell</div>
                </Link>
            </div>
            <div className="nav-anchors">
                <NavLink
                    className="links"
                    activeClassName="active active-line"
                    to="/resume"
                >
                    <div>Resume</div>
                </NavLink>
                <NavLink
                    className="links"
                    activeClassName="active active-line"
                    to="/contact"
                >
                    <div>Contact</div>
                </NavLink>
            </div>
        </div>
    );
}

export default Nav;
