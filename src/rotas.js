import { BrowserRouter, Route, Switch } from "react-router-dom"

import Login from "./pages/Login"
import NotFound from './pages/NotFound'

const Rotas = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;