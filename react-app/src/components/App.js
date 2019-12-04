import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppRoute from '../components/AppRoute';
import Layout from './Layout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';

function App(){

    return (
        <BrowserRouter>
            <Switch>
                <AppRoute exact path="/" component={Dashboard} layout={Layout} />
                <AppRoute exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Redirect path="*" to="/404" />
            </Switch>
        </BrowserRouter>
    );

}

export default App;