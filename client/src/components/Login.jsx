import axios from 'axios';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


let clearFields = () => {
    let allFields = document.querySelectorAll('.text-field');
    allFields.forEach((node) => {
        node.value = ""
    })
}
let registerClick = (e) => {
    let username = e.target.previousSibling.previousSibling.previousSibling.lastChild.value
    let passOne = e.target.previousSibling.previousSibling.lastChild.value;
    let passTwo = e.target.previousSibling.lastChild.value;
    let apiObj = {
        username: username,
        password: passOne,
    }
    if (passOne !== passTwo) {
        alert("Passwords do not match!")
        clearFields()
    } else if (passOne.length < 8) {
        alert("Your password must be at least eight characters long.")
        clearFields()
        window.location = '/register'
    }
    else {
        axios.post('/registerUser', apiObj).then((data) => {
            if (data.data === 'exists') {
                alert("Username already exists!")
            } else if (data.data === 'saved') {
                alert(username + " is now registered! Log in to access features.")
            }
            window.location = "/login";
            let allFields = document.querySelectorAll('.text-field');
            allFields.forEach((node) => {
                node.value = ""
            })
        })
    }
}

function Login(props) {
    let loginClick = (e) => {
        let username = e.target.previousSibling.previousSibling.lastChild.value
        let password = e.target.previousSibling.lastChild.value;
        let apiObj = {
            username: username,
            password: password,
        }
        axios.post('/loginUser', apiObj).then((data) => {
            if (data.data === 'badUser') {
                alert("Username does not exist!")
            } else if (data.data === "success") {
                props.setLogged(username)
            } else if (data.data === "incorrect") {
                alert("Incorrect password!")
            }
            clearFields()
        })
    }
    if (props.page === "register") {
        return (
            <center>
                <div id="login-page">
                    <center id="center-flex">
                        <p id="username-text">username</p>
                        <input placeholder="something clever" className="text-field"></input>
                    </center>
                    <center id="center-flex">
                        <p id="username-text">password</p>
                        <input type="password" placeholder="more clever" className="text-field"></input>
                    </center>
                    <center id="center-flex">
                        <p id="username-text">re-enter</p>
                        <input type="password" placeholder="even more clever" className="text-field"></input>
                    </center>
                    <button onClick={registerClick}>Submit</button>
                </div>
            </center>
        )
    } else return (
        <center>
            <div id="login-page">
                <center id="center-flex">
                    <p id="username-text">username</p>
                    <input placeholder="such coolness" className="text-field"></input>
                </center>
                <center id="center-flex">
                    <p id="username-text">password</p>
                    <input type="password" placeholder="many characters" className="text-field"></input>
                </center>
                    <button onClick={loginClick}>Submit</button>
            </div>
        </center>
    )
}

export default Login;