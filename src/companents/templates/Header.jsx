import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const [showLogoutModal, setLogoutModal] = useState(false);
    const [showInputModal, setInputModal] = useState(false);
    const sarchInput = useRef(null);
    const [searchVal, setSearchVal] = useState('');
    let navigate = useNavigate();

    const searchHandler = () => {
        if (searchVal) {
            return navigate("/search/" + searchVal);
        }
        else {
            sarchInput.current.focus();
        }
    }

    return (
        <header className="container justify-content-between" >
            <div className="navbar pt-5 d-flex" >
                <ul className="d-flex list-unstyled align-items-center">
                    <Link to="/" className="navbar-title">Watchflix</Link>
                    <li>
                        <Link to="/" className="active">Home</Link>
                    </li>
                    <li>
                        <Link to="/categories">Movies</Link>
                    </li>
                    <li>
                        <Link to="/categories/tv">TV Show</Link>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <div className="search-icon me-5">
                        <div className="d-flex justify-content-end">
                                {showInputModal &&
                                    <>
                                        <input className="header-input"
                                               ref={sarchInput}
                                               onChange={(e) => setSearchVal(e.target.value)}
                                               placeholder="Enter search phrase.."
                                               type="text"
                                        />
                                        <svg onClick={searchHandler} className="position-absolute" width="48" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" rx="8" fill="#FED530"/>
                                            <path d="M33.707 32.2932L29.168 27.7542C30.5149 26.0467 31.1585 23.889 30.967 21.7226C30.7756 19.5563 29.7636 17.5449 28.1381 16.1001C26.5126 14.6552 24.3965 13.8861 22.2226 13.95C20.0487 14.0139 17.9814 14.906 16.4436 16.4438C14.9058 17.9816 14.0137 20.0489 13.9498 22.2228C13.8859 24.3967 14.6551 26.5128 16.0999 28.1383C17.5448 29.7638 19.5561 30.7757 21.7225 30.9672C23.8888 31.1586 26.0465 30.5151 27.754 29.1682L32.293 33.7072L33.707 32.2932ZM22.5 29.0002C21.2144 29.0002 19.9577 28.619 18.8888 27.9048C17.8199 27.1905 16.9868 26.1754 16.4948 24.9876C16.0028 23.7999 15.8741 22.493 16.1249 21.2321C16.3757 19.9712 16.9948 18.813 17.9038 17.904C18.8129 16.995 19.9711 16.3759 21.2319 16.1251C22.4928 15.8743 23.7997 16.003 24.9875 16.495C26.1752 16.987 27.1903 17.8201 27.9046 18.889C28.6188 19.9579 29 21.2146 29 22.5002C28.9979 24.2235 28.3124 25.8755 27.0939 27.0941C25.8753 28.3126 24.2233 28.9981 22.5 29.0002Z" fill="white"/>
                                        </svg>
                                    </>
                                }
                            <a href="#" onClick={() => setInputModal(!showInputModal)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.707 20.2932L17.168 15.7542C18.5149 14.0467 19.1585 11.889 18.967 9.72265C18.7756 7.55628 17.7636 5.54494 16.1381 4.10009C14.5126 2.65524 12.3965 1.88608 10.2226 1.94997C8.04874 2.01386 5.98143 2.90597 4.44361 4.44379C2.90579 5.98162 2.01368 8.04892 1.94979 10.2228C1.8859 12.3967 2.65505 14.5128 4.09991 16.1383C5.54476 17.7638 7.5561 18.7757 9.72247 18.9672C11.8888 19.1586 14.0465 18.5151 15.754 17.1682L20.293 21.7072L21.707 20.2932ZM10.5 17.0002C9.21444 17.0002 7.95773 16.619 6.88881 15.9048C5.81989 15.1905 4.98677 14.1754 4.4948 12.9876C4.00283 11.7999 3.87411 10.493 4.12491 9.23211C4.37571 7.97123 4.99478 6.81305 5.90382 5.904C6.81286 4.99496 7.97105 4.3759 9.23193 4.12509C10.4928 3.87429 11.7997 4.00301 12.9875 4.49498C14.1752 4.98695 15.1903 5.82007 15.9046 6.88899C16.6188 7.95791 17 9.21462 17 10.5002C16.9979 12.2235 16.3124 13.8755 15.0939 15.0941C13.8753 16.3126 12.2233 16.9981 10.5 17.0002Z"
                                        fill="white"/>
                                </svg>
                            </a>
                        </div>

                    </div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1E1E1E"/>
                    </svg>
                    <div className="userData">
                        <a href='#' className="user-name" onClick={() => setLogoutModal(!showLogoutModal)}>John Glich</a>
                        {showLogoutModal && <button className="logout" onClick={() => {
                            localStorage.removeItem('token');
                            navigate('/login');
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.002 3H5.00201C3.89901 3 3.00201 3.897 3.00201 5V9H5.00201V5H19.002V19H5.00201V15H3.00201V19C3.00201 20.103 3.89901 21 5.00201 21H19.002C20.105 21 21.002 20.103 21.002 19V5C21.002 3.897 20.104 3 19.002 3Z"
                                    fill="black"/>
                                <path d="M11 16L16 12L11 8V11.001H3V13.001H11V16Z" fill="black"/>
                            </svg>
                            Logout
                        </button> }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;