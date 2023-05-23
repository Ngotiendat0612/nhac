import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <section id="main">
                <div className="nav-item">
                    <a className="navbar-brand" href="/">Âm nhạc dành riêng cho mình Em</a>
                </div>
                <div className="main-row">
                    <div className="main-row-img">
                        <img className="head-phone-img" src={HeadPhone} alt="" />
                    </div>
                    <div className="main-row-text">
                        <h1>Music for EM</h1>
                        <p>Âm nhạc đánh thức tâm hồn, và cả trái tim của em</p>
                        <Link to={"/home"} className="btn">
                            Bắt đầu nghe
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;