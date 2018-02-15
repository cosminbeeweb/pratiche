import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./header";
import Home from "./pages/home";
import Imprese from "./pages/imprese";
import Privati from "./pages/privati";
import Professionisti from "./pages/professionisti";
import ChiSiamo from "./pages/chiSiamo";
import Contatti from "./pages/contatti";
import Faq from "./pages/faq";
import AgenziaDelleEntrate from "./pages/agenziaDelleEntrate";
import agenziaPerLaRiscossione from "./pages/agenziaPerLaRiscossione";
import Tribunale from "./pages/tribunale";
import Comune from "./pages/comune";
import serviziDigitali from "./pages/serviziDigitali";
import serviziProfessionali from "./pages/serviziProfessionali";
import CameraDiCommercio from "./pages/cameraDiCommercio";

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
                <Route exact path={"/contatti"} component={Contatti}/>
                <Route exact path={"/domande-frequenti"} component={Faq}/>
                <Route exact path={"/agenzia-delle-entrate"} component={AgenziaDelleEntrate}/>
                <Route exact path={"/agenzia-per-la-riscossione"} component={agenziaPerLaRiscossione}/>
                <Route exact path={"/tribunale"} component={Tribunale}/>
                <Route exact path={"/comune"} component={Comune}/>
                <Route exact path={"/servizi-digitali"} component={serviziDigitali}/>
                <Route exact path={"/servizi-professionali"} component={serviziProfessionali}/>
                <Route exact path={"/camera-di-commercio"} component={CameraDiCommercio}/>
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