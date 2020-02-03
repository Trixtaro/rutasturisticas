import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppRoute from '../components/AppRoute';
import Layout from './Layout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/LoginPage';
import BuscarLugares from '../pages/LugaresPage';
import LugarPage from '../pages/LugarPage';
import Page404 from '../pages/Page404';
import SolicitudGuias from '../pages/SolicitudGuias';
import RegisterTurista from '../pages/RegisterTurista';
import RegisterGuia from '../pages/RegisterGuia';
import AdminLugar from '../pages/admin/lugar/LugarPage';
import AdminZona from '../pages/admin/zona/ZonaPage';

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
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/404" component={Page404} />
                <Route exact path="/register/guia" component={RegisterGuia} />

                <Route exact path="/admin/lugar" component={AdminLugar} />
                <Route exact path="/admin/zona" component={AdminZona} />
                <Redirect path="*" to="/404" />
            </Switch>
        </BrowserRouter>
    );
}

const Logout = () => {
    localStorage.removeItem('usertoken');
    return <Redirect to="/"/>;
}

export default App;