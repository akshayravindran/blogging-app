import React, { useState } from 'react'
import './Login.css'
import { ValidateUser } from './../../auth/ValidateUserService';
import { useHistory } from 'react-router';

export default function Login() {
    const [email, setEmail] = useState('')
    const history = useHistory()

    const LoginHandler = (e: React.FormEvent) => {
        e.preventDefault()

        ValidateUser(email).then((authFlag) => {
            if (authFlag === false) {
                alert("Invalid email!")
            }
            else {
                localStorage.setItem('blogAppToken', JSON.stringify(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)))
                let link = document.getElementById('postsLink')
                if (link) link.style.display = "block"
                link = document.getElementById('albumsLink')
                if (link) link.style.display = "block"
                link = document.getElementById('logoutLink')
                if (link) link.style.display = "block"
                history.push("/posts")
            }
        }).catch(() => alert("Sorry! Some internal error occurred!"))

        setEmail('')
    }

    return (
        <div className="d-flex flex-column" id="mainLoginContainer">
            <div id="loginFormContainer" className="card shadow-lg align-self-center">
                <div className="card-body p-4" data-align="center">
                    <form onSubmit={LoginHandler}>
                        <div className="form-group">
                            <label className="formLabel">Email</label>
                            <input type="text" className="my-3 form-control formInput" placeholder="example@mail.com"
                                onChange={e => setEmail(e.target.value.toLowerCase())} value={email} required />
                        </div>
                        <div className="d-flex mt-2">
                            <input id="loginButton" type="submit" value="Login" className="btn btn-dark mx-auto" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}