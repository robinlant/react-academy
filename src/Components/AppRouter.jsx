import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {routes} from "../router/routes";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map((e)=>{
                return <Route
                    component={e.component}
                    path={e.path}
                    exact={e.exact}
                />
            })}
            <Redirect to="/posts"/>
        </Switch>
    );
};

export default AppRouter;