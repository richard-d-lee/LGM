import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Topbar(props) {
    let renderLogin = (state) => {
        if (state === true) {
            return (
                <Link to="/home" className="login-text">
                    {props.username}
                </Link>
            )
        } else {
            return (
                <div>
                    <Link to="/register" className="register">
                        register
                    </Link>
                    <Link to="/login" onClick={() => {props.change('login')}} className="login-text">
                        login
                    </Link>
                </div>
            )
        }
    }
    return (
        <div className="topbar">
            <Sidebar open={props.open} close={props.close} />
            <Link to="/home" onClick={() => {props.change('home')}} className="banner">
                Welcome to Lee Gaming and Media!
            </Link>
            <div className="portal">
                {renderLogin(props.logged)}
            </div>
        </div>
    )
}

export default Topbar;