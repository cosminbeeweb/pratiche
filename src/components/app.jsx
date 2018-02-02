import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./header";
import Home from "./pages/home";
import Imprese from "./pages/imprese";
import Privati from "./pages/privati";
import Professionisti from "./pages/professionisti";
import ChiSiamo from "./pages/chiSiamo";

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    routes()
    {
        return (
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/imprese"} component={Imprese}/>
                <Route exact path={"/privati"} component={Privati}/>
                <Route exact path={"/professionisti"} component={Professionisti}/>
                <Route exact path={"/chi-siamo"} component={ChiSiamo}/>
            </Switch>
        );
    }

    render()
    {
        return(
            <Router>
                <div>
                    <Header/>
                    { this.routes() }
                </div>
            </Router>
        )
    }
}

export default App;