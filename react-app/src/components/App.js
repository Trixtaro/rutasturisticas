import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './Layout';
import Dashboard from '../pages/Dashboard';

function App(){

    return (
        <BrowserRouter>
            <Layout>
                <Switch>

                    <Route exact path="/" component={Dashboard} />
                    {/* <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} /> */}
                    <Redirect path="*" to="/404" />

                </Switch>
            </Layout>
        </BrowserRouter>
    );

}

export default App;