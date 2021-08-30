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
    var checkedValue = document.querySelector('#register-check').value;
    let usernameField = document.querySelector('#username-input').value
    let pass1Field = document.querySelector('#pass1-input').value
    let pass2Field = document.querySelector('#pass2-input').value
    let apiObj = {
        username: usernameField,
        password: pass1Field,
    }
    if (pass1Field !== pass2Field) {
        alert("Passwords do not match!")
        clearFields()
    } else if (pass1Field.length < 8) {
        alert("Your password must be at least eight characters long.")
        clearFields()
    }
    else {
        axios.post('/registerUser', apiObj).then((data) => {
            if (data.data === 'exists') {
                alert("Username already exists!")
            } else if (data.data === 'saved') {
                alert(usernameField + " is now registered! Log in to access features.")
                window.location.href = "/login";
            }
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
                        <input id="username-input" placeholder="something clever" className="text-field"></input>
                    </center>
                    <center id="center-flex">
                        <p id="username-text">password</p>
                        <input id="pass1-input" type="password" placeholder="more clever" className="text-field"></input>
                    </center>
                    <center id="center-flex">
                        <p id="username-text">re-enter</p>
                        <input id="pass2-input" type="password" placeholder="even more clever" className="text-field"></input>
                    </center>
                    <div id="register-column">
                        <div id="register-row">
                            <input type="checkbox" id="register-check" name="register"></input>
                            <label for="register">By registering, I agree to the&nbsp;
                                <Link to="/termsofservice">
                                    Terms of Service
                                </Link>
                            </label>
                        </div>
                        <button id="register-button" onClick={registerClick}>Submit</button>
                    </div>
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