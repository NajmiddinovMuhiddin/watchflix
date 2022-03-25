import React, {useEffect, useState} from 'react';
import Layout from "../companents/templates/Layout";
import {Link, useParams} from "react-router-dom";
import MovieItem from "../companents/MovieItem";
import api from "../api";

const Categories = () => {
    const [lastMovies, setLastMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [dangerMovies, setDangerMovies] = useState([]);

    useEffect(async () => {
        const response = await api('top movies');
        setLastMovies(response.slice(0, 5));

        const responseComedy = await api('comedy');
        setComedyMovies(responseComedy.slice(0, 5));

        const responseDanger = await api('horror');
        setDangerMovies(responseDanger.slice(0, 5));
    }, []);

    return (
        <Layout>
            <div className="main">
                <section className="container sp-60">
                    <div className="row">
                        <div className="caption">
                            <h2 className="section-title">Top Movies</h2>
                            <Link to="/categories/top" className="btn btn-more">View More</Link>
                        </div>
                        <div className="row movies-row">
                            {lastMovies.map((movie, index) => <MovieItem
                                col={index===0 ? '8': '4'}
                                key={movie.Title}
                                movie={movie}
                            />)}
                        </div>
                    </div>
                </section>
                <section className="container sp-60">
                    <div className="row">
                        <div className="caption">
                            <h2 className="section-title">Horror films</h2>
                            <Link to="/categories/horror" className="btn btn-more">View More</Link>
                        </div>
                        <div className="row movies-row">
                            {dangerMovies.map((movie, index) => <MovieItem
                                col={index===0 ? '8': '4'}
                                key={movie.Title}
                                movie={movie}
                            />)}
                        </div>
                    </div>
                </section>
                <section className="container sp-60">
                    <div className="row">
                        <div className="caption">
                            <h2 className="section-title">Comedy</h2>
                            <Link to="/categories/comedy" className="btn btn-more">View More</Link>
                        </div>
                        <div className="row movies-row">
                            {comedyMovies.map((movie, index) => <MovieItem
                                col={index===0 ? '8': '4'}
                                key={movie.Title}
                                movie={movie}
                            />)}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Categories;