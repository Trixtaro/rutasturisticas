import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppRoute from '../components/AppRoute';
import Layout from './Layout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import BuscarLugares from '../pages/LugaresPage';
import LugarPage from '../pages/LugarPage';
import Page404 from '../pages/Page404';
import SolicitudGuias from '../pages/SolicitudGuias';
import RegisterTurista from '../pages/RegisterTurista';
import RegisterGuia from '../pages/RegisterGuia'

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <AppRoute exact path="/" component={Dashboard} layout={Layout} />
                <AppRoute exact path="/lugares/:id" component={BuscarLugares} layout={Layout} />
                <AppRoute exact path="/lugar/:id" component={LugarPage} layout={Layout} />
                <AppRoute exact path="/admin/solicitudes" component={SolicitudGuias} layout={Layout} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={RegisterTurista} />
                <Route exact path="/404" component={Page404} />
                <Route exact path="/register/guia" component={RegisterGuia} />
                <Redirect path="*" to="/404" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;