import React, {useState} from 'react';
import '../LoginPage/Login.css'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleClick = async () => {
        if (email && password) {
            try {
                const response = await fetch("https://reqres.in/api/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email, password})
                });
                const responseData = await response.json();
                if (responseData.error) {
                    throw responseData.error
                }
                if (responseData.token) {
                    localStorage.setItem('token', responseData.token);
                    localStorage.setItem('email', email);
                    navigate('/');
                }
            } catch (e) {
                alert(e)
            }
        }
    }


    return (
        <div className="login d-flex justify-content-center">
            <div className="login-block">
                <span className="login-text">Free UI Kit</span>
                <h1 className="login-title">Film & TV</h1>
                <div className="block d-grid">
                <input type="text" value={email}
                       onChange={e => setEmail(e.target.value)}
                       placeholder="Login"/>
                <input type="text" value={password}
                       onChange={e => setPassword(e.target.value)}
                       placeholder="Password"/>
                </div>
                <button onClick={handleClick} className="login-btn">Login</button>
            </div>
            <div className="img-block d-flex">
                <img className="home-img" src={process.env.PUBLIC_URL + "/assets/img/Homehome-img.png"} alt=""/>
                <img className="site-img" src={process.env.PUBLIC_URL + "/assets/img/image-2.png"} alt=""/>
            </div>

        </div>
    );
};

export default Login;