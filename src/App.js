import About from "./about";
import Home from "./home";
import Nav from "./nav";
import Burger from "./burger";
import Mobile from "./mobile-menu";
import Resume from "./resume";
import React, { useState, useRef } from "react";
import { ClickOutside } from "./hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    ClickOutside(node, () => setOpen(false));
    return (
        <Router>
            <div>
                <Nav />
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Mobile open={open} setOpen={setOpen} />
                </div>
                <div className="container">
                    <div className="content">
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/about" component={About}></Route>
                            <Route path="/resume" component={Resume}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}
