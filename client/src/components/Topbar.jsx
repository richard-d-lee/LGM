import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Topbar(props) {
    console.log(props)
    return (
        <div className="topbar">
            <Sidebar open={props.open} close={props.close} />
            <div className="banner">
                Welcome to Lee Gaming and Media!
            </div>
            <div className="portal">
            <Link to="/register" className="register">
                    register
                </Link>
                <Link to="/login" className="login-text">
                    login
                </Link>
            </div>
        </div>
    )
}

export default Topbar;