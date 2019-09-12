import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Create from '~/pages/Create';
import Edit from '~/pages/Edit';
import NotFound from '~/pages/NotFound';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/trucker/create" exact component={Create} />
                <Route path="/trucker/:id/edit" component={Edit} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;