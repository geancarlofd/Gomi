import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Login from "./pages/login"
import Cadastrar from "./pages/login/Cadastrar"
import NotFound from './pages/NotFound'

const Rotas = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route exact={true} path="/cadastrar" component={Cadastrar}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;