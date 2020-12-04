import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <div className="nav-anchors">
                <a href="/">About</a>
                <a href="/">Projects</a>
            </div>
            <div className="nav-title">
                <a href="/">Josh Bagwell</a>
            </div>
            <div className="nav-anchors">
                <a href="/">Resume</a>
                <a href="/">Contact</a>
            </div>
        </div>
    );
}

export default Nav;
