import Layout from "../companents/templates/Layout";
import Video from "../companents/Video";
import React, {useEffect, useState} from "react";
import api from "../api";
import {Link} from "react-router-dom";
import MovieItem from "../companents/MovieItem";

const MovieDetail = () => {
    const [lastMovies, setLastMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [dangerMovies, setDangerMovies] = useState([]);

    useEffect(async () => {
        const response = await api('top movies');
        setLastMovies(response.slice(0, 5));

        const responseRecommended = await api('Recommended');
        setRecommendedMovies(responseRecommended.slice(0, 5));

        const responseDanger = await api('horror');
        setDangerMovies(responseDanger.slice(0, 5));
    }, []);

    return (
        <Layout>
            <Video/>

            <div className="main">
                <section className="container sp-60">
                    <div className="row">
                        <div className="caption">
                            <h2 className="section-title">Recommended</h2>
                            <Link to="/categories/top" className="btn btn-more">View More</Link>
                        </div>
                        <div className="row movies-row">
                            {recommendedMovies.map((movie, index) => <MovieItem
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
            </div>
        </Layout>
    );
};

export default MovieDetail;