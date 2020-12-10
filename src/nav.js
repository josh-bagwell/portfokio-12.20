import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <div className="nav-anchors">
                <Link className="links" to="/about">
                    <div>About</div>
                </Link>
                <Link className="links" to="/projects">
                    <div>Projects</div>
                </Link>
            </div>
            <div className="nav-title">
                <Link className="links" to="/">
                    <div>Josh Bagwell</div>
                </Link>
            </div>
            <div className="nav-anchors">
                <Link className="links" to="/resume">
                    <div>Resume</div>
                </Link>
                <Link className="links" to="/contact">
                    <div>Contact</div>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
