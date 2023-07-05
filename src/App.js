import React, {useEffect, useMemo, useState} from "react";
import './styles/app.css';
import {BrowserRouter, Route} from "react-router-dom";
import Pages from "./pages/Posts";
import Posts from "./pages/Posts";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/posts">
                <Posts/>
            </Route>
        </BrowserRouter>
    );
}

export default App;