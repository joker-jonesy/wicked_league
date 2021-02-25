import React from 'react';
import Nav from "./components/navigation/Nav";
import VilHold from "./components/selector/VillainHolder";
import PlayerHold from "./components/selector/PlayerHolder";
import Villain from "./components/villain/Villain";
import Player from "./components/player/Player";
import Home from "./components/home/Home";
import Footer from "./components/navigation/Footer";
import Sources from "./components/home/Sources";
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
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/villains"} component={VilHold}/>
                    <Route path={"/players"} component={PlayerHold}/>
                    <Route path={"/villain/:id"} component={Villain}/>
                    <Route path={"/player/:id"} component={Player}/>
                    <Route path={"/sources"} component={Sources}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
