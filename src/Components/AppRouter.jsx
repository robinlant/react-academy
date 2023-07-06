import React from 'react';
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {Redirect} from "react-router-dom";
import PostId from "../pages/PostId";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route exact path="/posts">
                <Posts/>
            </Route>
            <Route exact path="/posts/:id">
                <PostId/>
            </Route>

            <Route path="/404">
                <Error/>
            </Route>
            <Redirect to="/404"/>
        </Switch>
    );
};

export default AppRouter;