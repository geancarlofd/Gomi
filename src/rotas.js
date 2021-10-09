import { BrowserRouter, Route, Switch } from "react-router-dom"
import React from "react";

import Login from "./pages/login"
import NotFound from './pages/NotFound'
import TelaDescarte from "./pages/telaDescarte"
import Ranking from "./pages/ranking"

const Rotas = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route exact={true} path="/Descarte" component={TelaDescarte}/>
                <Route exact={true} path="/Ranking" component={Ranking}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;