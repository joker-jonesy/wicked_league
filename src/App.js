import React from 'react';
import Nav from "./components/navigation/Nav";
import VilHold from "./components/selector/VillainHolder";
import Villain from "./components/villain/Villain";
import {
    Switch,
    Route,
    HashRouter as Router
} from "react-router-dom";


function App() {

    return (
        <div className="App">

            <Router>
                <Nav/>
                <Switch>
                    <Route exact path={"/"} component={VilHold}/>
                    <Route path={"/villain/:id"} component={Villain}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
