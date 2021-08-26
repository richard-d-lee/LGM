import axios from 'axios';
import React, { useState } from 'react';
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
    } else {
        axios.post('/registerUser', apiObj).then((data) => {
            if (data.data === 'exists') {
                alert("Username already exists!")
            } else if (data.data === 'saved') {
                alert(username + " is now registered! Log in to access features.")
            }
            let allFields = document.querySelectorAll('.text-field');
            allFields.forEach((node) => {
                console.log(node)
                node.value = ""
            })
        })
    }
}

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
            alert("You are now logged in!")
        } else if (data.data === "incorrect") {
            alert("Incorrect password!")
        }
        let allFields = document.querySelectorAll('.text-field');
        allFields.forEach((node) => {
            console.log(node)
            node.value = ""
        })
    })
}

function Login(props) {
    if (props.page === "register") {
        return (
            <center>
                <div id="login-page">
                    <center id="center-flex">
                        <p id="username-text">username</p>
                        <textarea placeholder="something clever" className="text-field"></textarea>
                    </center>
                    <center id="center-flex">
                        <p id="username-text">password</p>
                        <textarea placeholder="more clever" className="text-field"></textarea>
                    </center>
                    <center id="center-flex">
                        <p id="username-text">re-enter</p>
                        <textarea placeholder="more clever" className="text-field"></textarea>
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
                    <textarea placeholder="something clever" className="text-field"></textarea>
                </center>
                <center id="center-flex">
                    <p id="username-text">password</p>
                    <textarea placeholder="more clever" className="text-field"></textarea>
                </center>
                <button onClick={loginClick}>Submit</button>
            </div>
        </center>
    )
}

export default Login;