import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';

function Topbar(props) {
    console.log(props)
    return (
        <div className="topbar">
            <Sidebar open={props.open} close={props.close} />
            <div className="banner">
                Welcome to Lee Gaming and Media!
            </div>
            <div className="portal">
                <label className="register" onClick={() => {props.change("register")}}>
                    register
                </label>
                <label className="login" onClick={() => {props.change("login")}}>
                    login
                </label>
            </div>
        </div>
    )
}

export default Topbar;