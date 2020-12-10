import About from "./about";
import Home from "./home";
import Nav from "./nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </div>
        </Router>
    );
}
