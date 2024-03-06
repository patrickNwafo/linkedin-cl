import React, { useState } from "react"

import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
    }

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                    })
                    );
                });
        }).catch((error) => alert(error));
    };


    return (
        <div className="login">
            <img src="https://images.unsplash.com/photo-1585288766827-c62e98d70191?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D" alt="linkdin" />
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" placeholder="Full name (required if registering)" />

                <input
                    type="text"
                    placeholder="Profile pic URL(optional)"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email"
                    placeholder="Email"

                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "} <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login