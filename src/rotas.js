import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login"
import Cadastrar from "./pages/login/Cadastrar"
import Timeline from "./pages/timeline"
import NotFound from './pages/NotFound'
import TelaDescarte from "./pages/telaDescarte"
import Ranking from "./pages/ranking"

const Rotas = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/cadastrar" component={Cadastrar}/>
                <Route exact={true} path="/timeline" component={Timeline} />
                <Route exact={true} path="/Descarte" component={TelaDescarte}/>
                <Route exact={true} path="/Ranking" component={Ranking}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;