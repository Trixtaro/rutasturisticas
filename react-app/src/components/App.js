import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SolicitudGuia from '../pages/SolicitudGuia';
import AppRoute from '../components/AppRoute';
import Layout from './Layout';
import AdminLayout from '../components/AdminLayout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/LoginPage';
import BuscarLugares from '../pages/LugaresPage';
import LugarPage from '../pages/LugarPage';
import Page404 from '../pages/Page404';
import GuiasPendientePage from '../pages/admin/solicitudGuia/GuiasPendientePage';
import SolicitudGuias from '../pages/admin/solicitudGuia/SolicitudGuias';
import RegisterTurista from '../pages/RegisterTurista';
import RegisterGuia from '../pages/RegisterGuia';
import AdminLugar from '../pages/admin/lugar/LugarPage';
import AdminAgregarLugar from '../pages/admin/lugar/agregarLugar';
import AdminZona from '../pages/admin/zona/ZonaPage';
import AdminAgregarZona from '../pages/admin/zona/agregarZona';
import AdminHomePage from '../pages/AdminHomePage';

import {isAdmin} from '../functions/Functions'; 

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <AppRoute exact path="/" component={Dashboard} layout={Layout} />
                <AppRoute exact path="/lugares/:id" component={BuscarLugares} layout={Layout} />
                <AppRoute exact path="/lugar/:id" component={LugarPage} layout={Layout} />
                <AppRoute exact path='/solicitudes/guia/:id' component={SolicitudGuia} layout={Layout} />

                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={RegisterTurista} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/404" component={Page404} />
                <Route exact path="/register/guia" component={RegisterGuia} />

                <AppRoute exact path="/admin/solicitudes" component={GuiasPendientePage} layout={AdminLayout} />
                <AppRoute exact path="/admin/solicitudes/ver/:id" component={SolicitudGuias} layout={AdminLayout} />
                <AppRoute exact path="/admin/home" component={AdminHomePage} layout={AdminLayout} />
                <AppRoute exact path="/admin/lugar" component={AdminLugar} layout={AdminLayout} />
                <AppRoute exact path="/admin/lugar/agregar" component={AdminAgregarLugar} layout={AdminLayout} />
                <AppRoute exact path="/admin/zona" component={AdminZona} layout={AdminLayout} />
                <AppRoute exact path="/admin/zona/agregar" component={AdminAgregarZona} layout={AdminLayout} />
                <Redirect exact path="/admin" to="/admin/home" />
                <Redirect path="**" to="/404" />
            </Switch>
        </BrowserRouter>
    );
}

const Logout = () => {
    localStorage.removeItem('usertoken');
    return <Redirect to="/"/>;
}

export default App;