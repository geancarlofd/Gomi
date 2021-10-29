import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Login from "./pages/Login"
import Cadastrar from "./pages/Login/Cadastrar"
import Timeline from "./pages/Timeline"
import NotFound from './pages/NotFound'

const Rotas = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/cadastrar" component={Cadastrar}/>
                <Route exact={true} path="/timeline" component={Timeline} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;