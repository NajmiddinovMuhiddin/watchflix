import React, {useEffect, useState} from 'react';
import Layout from "../companents/templates/Layout";
import {Link, useParams} from "react-router-dom";
import MovieItem from "../companents/MovieItem";
import api from "../api";

const CategoriesDetail = () => {
    const [info, setInfo] = useState(false);

    let { type } = useParams();

    console.log(type);

    let title = '';

    switch (type) {
        case 'top': title = 'Top Movies'; break;
        case 'horror': title = 'Horror films'; break;
        case 'comedy': title = 'Comedy'; break;
        case 'last': title = 'My Last Watch'; break;
        case 'tv': title = 'Tv'; break;
        case 'movies': title = 'Movies'; break;
    }

    useEffect(async () => {
        const response = await api(title);
        console.log(response)
        setInfo(response);
    }, []);
    return (
        <Layout>
            <section className="container sp-60">
                <div className="row">
                    <div className="caption">
                        <h2 className="section-title">{title}</h2>
                    </div>
                    {info && <div className="row movies-row">
                        {info.map((movie, index) => <MovieItem
                            col={'4'}
                            key={movie.Title}
                            movie={movie}
                        />)}
                    </div>}
                </div>
            </section>
        </Layout>
    );
};

export default CategoriesDetail;