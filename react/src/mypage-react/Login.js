//Login.js
import React, {useState} from "react";
import "./Login.css";
// import {UserInfo} from "./UserInfo";

const Login = (props) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const login = props.login;

    const user = JSON.parse(localStorage.getItem('login'))

    console.log(id)
    console.log(password)


    const loginF = (e) => {
        e.preventDefault();
        console.log(user)

        console.log(user.id)
        console.log(user.password)

        console.log(id)
        console.log(password)

        if (id === user.id && password === user.password) {
            login();
            console.log("same");
        }
        else {
            alert("틀렸어요");
            setId("");
            setPassword("");
        }
    }


    return (
        <div className="wrapper_box">
            <h2>LOG IN</h2>
            <form className="login_form" onSubmit={loginF}>
                <input type="text" className="login_input" placeholder="ID" onChange={(e) => setId(e.target.value)} value={id}/>
                <input placeholder="Password" type="Password" className="login_input" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <button type="submit" className="login_btn" >
                    Login
                </button>
            </form>
        </div>
    );
};


export default Login;