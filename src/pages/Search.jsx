import React, {useEffect, useRef, useState} from 'react';
import Layout from "../companents/templates/Layout";
import {useNavigate, useParams} from "react-router-dom";
import MovieItem from "../companents/MovieItem";
import api from "../api";

const Search = () => {
    let { query } = useParams();
    const [info, setInfo] = useState(false);
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

    useEffect(async () => {
        if (query && !searchVal) {
            setSearchVal(query);
        }

        const response = await api(query);
        setInfo(response);
    }, []);

    return (
        <Layout>
            <section className="container sp-60">
                <div className="row">
                    <div>
                        <input className="header-input"
                               ref={sarchInput}
                               value={searchVal}
                               onChange={(e) => setSearchVal(e.target.value)}
                               placeholder="Enter search phrase.."
                               type="text"
                        />
                        <svg onClick={searchHandler} className="position-absolute" width="48" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#FED530"/>
                            <path d="M33.707 32.2932L29.168 27.7542C30.5149 26.0467 31.1585 23.889 30.967 21.7226C30.7756 19.5563 29.7636 17.5449 28.1381 16.1001C26.5126 14.6552 24.3965 13.8861 22.2226 13.95C20.0487 14.0139 17.9814 14.906 16.4436 16.4438C14.9058 17.9816 14.0137 20.0489 13.9498 22.2228C13.8859 24.3967 14.6551 26.5128 16.0999 28.1383C17.5448 29.7638 19.5561 30.7757 21.7225 30.9672C23.8888 31.1586 26.0465 30.5151 27.754 29.1682L32.293 33.7072L33.707 32.2932ZM22.5 29.0002C21.2144 29.0002 19.9577 28.619 18.8888 27.9048C17.8199 27.1905 16.9868 26.1754 16.4948 24.9876C16.0028 23.7999 15.8741 22.493 16.1249 21.2321C16.3757 19.9712 16.9948 18.813 17.9038 17.904C18.8129 16.995 19.9711 16.3759 21.2319 16.1251C22.4928 15.8743 23.7997 16.003 24.9875 16.495C26.1752 16.987 27.1903 17.8201 27.9046 18.889C28.6188 19.9579 29 21.2146 29 22.5002C28.9979 24.2235 28.3124 25.8755 27.0939 27.0941C25.8753 28.3126 24.2233 28.9981 22.5 29.0002Z" fill="white"/>
                        </svg>
                        <br/>
                        <br/>
                        <h2 className="section-title">Founded moviees</h2>
                        <br/>
                    </div>
                    {info && <div className="row movies-row">
                        {info.map((movie, index) => <MovieItem
                            col={'4'}
                            key={movie.Title}
                            movie={movie}
                        />)}
                    </div>}
                    {!info && <div className="text-center not-found">Films Not Found</div>}
                </div>
            </section>
        </Layout>
    );
};

export default Search;