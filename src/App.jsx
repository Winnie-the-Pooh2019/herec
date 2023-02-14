import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Link, Route, Router, Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import Preferences from './Components/Preferences/Preferences';
import useToken from "./Components/useToken";

function SmallApp() {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            {/*<h1>Application</h1>*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/herec" element={<Preferences />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function App() {

    return (
        <div>
            <SmallApp/>
        </div>
    )
}

export default App;