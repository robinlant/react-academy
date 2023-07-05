import React, {useEffect, useMemo, useState} from "react";
import './styles/app.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Components/UI/navbar/Navbar";
import AppRouter from "./Components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;