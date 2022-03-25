import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h1 className="footer-title">Watchflix</h1>
                        <p className="footer-text">Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
                            eiusmod tempor
                            incididunt ut labore et.</p>
                        <span className="footer-span">Join Newsletters</span>
                        <div className="d-flex justify-content-end">
                            <input className="footer-input" placeholder="Insert your mail here" type="text"/>
                            <svg className="footer-input-button position-absolute mt-2" width="48" height="48"
                                 viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="8" fill="#FED530"/>
                                <path
                                    d="M23.293 16.707L29.586 23H16V25H29.586L23.293 31.293L24.707 32.707L33.414 24L24.707 15.293L23.293 16.707Z"
                                    fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="footer-menu d-flex justify-content-around">
                            <ul>
                                <li>Product</li>
                                <li><Link to="/movies" type={'a'}>Movies</Link></li>
                                <li><a href="">TV Show</a></li>
                                <li><a href="">Videos</a></li>
                            </ul>
                            <ul>
                                <li>Media Group</li>
                                <li><a href="">Nice Studio</a></li>
                                <li><a href="">Nice News</a></li>
                                <li><a href="">Nice TV</a></li>
                            </ul>
                            <ul>
                                <li>Sitemap</li>
                                <li><a href="">About</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Press</a></li>
                            </ul>
                        </div>
                        <div className="con-info d-flex justify-content-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2C10.1441 2.00212 8.36489 2.7403 7.05259 4.05259C5.7403 5.36489 5.00212 7.14413 5 9C5 14.353 11.036 20.45 11.293 20.707L12 21.414L12.707 20.707C12.964 20.45 19 14.353 19 9C18.9979 7.14413 18.2597 5.36489 16.9474 4.05259C15.6351 2.7403 13.8559 2.00212 12 2ZM12 18.533C10.471 16.825 7 12.553 7 9C7 7.67392 7.52678 6.40215 8.46447 5.46447C9.40215 4.52678 10.6739 4 12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9C17 12.546 13.527 16.823 12 18.533Z"
                                    fill="white"/>
                                <path
                                    d="M12 6C11.4067 6 10.8266 6.17595 10.3333 6.50559C9.83994 6.83524 9.45543 7.30377 9.22836 7.85195C9.0013 8.40013 8.94189 9.00333 9.05765 9.58527C9.1734 10.1672 9.45912 10.7018 9.87868 11.1213C10.2982 11.5409 10.8328 11.8266 11.4147 11.9424C11.9967 12.0581 12.5999 11.9987 13.1481 11.7716C13.6962 11.5446 14.1648 11.1601 14.4944 10.6667C14.8241 10.1734 15 9.59334 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7957 6 12 6ZM12 10C11.8022 10 11.6089 9.94135 11.4444 9.83147C11.28 9.72159 11.1518 9.56541 11.0761 9.38268C11.0004 9.19996 10.9806 8.99889 11.0192 8.80491C11.0578 8.61093 11.153 8.43275 11.2929 8.29289C11.4327 8.15304 11.6109 8.0578 11.8049 8.01921C11.9989 7.98063 12.2 8.00043 12.3827 8.07612C12.5654 8.15181 12.7216 8.27998 12.8315 8.44443C12.9414 8.60888 13 8.80222 13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10Z"
                                    fill="white"/>
                            </svg>
                            <span>8819 Ohio St. South Gate, California 90280</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 4V20H22V4H2ZM9.981 13.7L12 15.267L14.019 13.7L19.4 18H4.6L9.981 13.7ZM4 15.919V9.044L8.357 12.433L4 15.919ZM15.643 12.433L20 9.045V15.919L15.643 12.433ZM20 6V6.511L12 12.733L4 6.511V6H20Z"
                                    fill="white"/>
                            </svg>
                            <span>ourstudio@hello.com</span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.191 14.489L21.153 13.662L14.67 12.736L13.355 15.31C11.9666 14.5283 10.6974 13.5517 9.58597 12.41C8.43156 11.3004 7.44789 10.0259 6.66697 8.62801L9.46697 7.22801L6.66697 0.708008L5.90697 0.818008C4.61983 0.995313 3.42735 1.59296 2.51497 2.51801C-0.65803 5.68701 0.58497 11.9 5.34297 16.657C8.32497 19.638 11.876 21.239 14.894 21.238C15.7375 21.2674 16.5784 21.1274 17.367 20.8263C18.1555 20.5252 18.8757 20.0691 19.485 19.485C20.1073 18.8208 20.5813 18.0319 20.8754 17.1705C21.1696 16.3092 21.2771 15.3951 21.191 14.489ZM18.071 18.071C15.771 20.371 10.59 19.071 6.75697 15.243C2.92397 11.415 1.62897 6.22901 3.92897 3.92901C4.35771 3.49451 4.88245 3.16672 5.46097 2.97201L6.88097 6.28501L5.77397 6.83801C5.53417 6.95811 5.32083 7.12498 5.14652 7.3288C4.97221 7.53262 4.84045 7.76926 4.759 8.02478C4.67756 8.28031 4.64807 8.54955 4.67228 8.81664C4.69649 9.08374 4.77391 9.34329 4.89997 9.58001C5.77532 11.1482 6.87604 12.5794 8.16697 13.828C9.41589 15.1045 10.8414 16.1952 12.4 17.067C12.6402 17.1974 12.9041 17.2785 13.1761 17.3054C13.4481 17.3324 13.7228 17.3047 13.984 17.224C14.2394 17.1445 14.476 17.014 14.6795 16.8404C14.883 16.6668 15.0492 16.4537 15.168 16.214L15.815 14.92L19.182 15.401C19.1436 16.3954 18.7493 17.3429 18.071 18.071Z"
                                    fill="white"/>
                            </svg>
                            <span>+271 386-647-3637</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;