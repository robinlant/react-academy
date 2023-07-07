import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthConext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthConext)
    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ?   <Switch>
                    {
                    publicRoutes.map((e) => {
                        return <Route
                            key={Date.now()}
                            component={e.component}
                            path={e.path}
                            exact={e.exact}
                        />
                    })
                    }
                <Redirect to="/posts"/>
                </Switch>
            :   <Switch>
                    {
                    privateRoutes.map((e) => {
                        return <Route
                            key={Date.now()}
                            component={e.component}
                            path={e.path}
                            exact={e.exact}
                        />
                    })
                    }
                    <Redirect to="/login"/>
                </Switch>
    );
};

export default AppRouter;