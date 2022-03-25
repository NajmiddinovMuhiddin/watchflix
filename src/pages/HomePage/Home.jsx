import React, {useEffect, useState} from 'react';
import './home.css';
import Slider from "../../companents/Slider";
import Layout from "../../companents/templates/Layout";
import MovieItem from "../../companents/MovieItem";
import api from '../../api';
import {Link} from "react-router-dom";
import Video from "../../companents/Video";

const Home = () => {
    const [lastMovies, setLastMovies] = useState([]);
    const [newForBlock, setNewForBlock] = useState([]);
    const [TVBlock, setTVBlock] = useState([]);

    useEffect(async () => {
        const response = await api('iron man');
        setLastMovies(response.slice(0, 5));

        const responseBatman = await api('batman');
        setNewForBlock(responseBatman.slice(0, 5));

        const responseTV = await api('TV-show');
        setTVBlock(responseTV.slice(0, 5));

    }, []);

    return (
        <Layout>
            <Slider/>
            <div className="main">
                <section className="container sp-60">
                    <div className="row">
                        <div className="caption">
                            <h2 className="section-title">My Last Watch</h2>
                            <Link to="/categories/last" className="btn btn-more">View More</Link>
                        </div>
                        <div className="row movies-row">
                            {lastMovies.map((movie, index) => <MovieItem
                                col={index === 0 ? '8' : '4'}
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
                            {newForBlock.map((movie, index) => <MovieItem
                                col={index === 0 ? '8' : '4'}
                                key={movie.Title}
                                movie={movie}
                            />)}
                        </div>
                    </div>
                </section>

                <section className="container sp-60">
                    <div className="row">
                        <div className="caption">
                            <h2 className="section-title">Top TV Show</h2>
                            <Link to="/categories/tv" className="btn btn-more">View More</Link>
                        </div>
                        <div className="row movies-row">
                            {TVBlock.map((movie, index) => <MovieItem
                                col={index === 0 ? '8' : '4'}
                                key={movie.Title}
                                movie={movie}
                            />)}
                        </div>
                    </div>
                </section>
            </div>


            <div className="movies-section">
                <Video/>
                <div className="movies-card">
                    <div className="container d-flex">
                        <div className="d-flex me-5">
                            <div className=" d-flex justify-content-center align-items-center">
                                <svg className="position-relative" width="176" height="176" viewBox="0 0 176 176"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="176" height="176" fill="#525252"/>
                                </svg>
                                <svg className="position-absolute" width="40" height="40" viewBox="0 0 40 40"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 3.33301C16.7036 3.33301 13.4813 4.31049 10.7405 6.14185C7.99966 7.9732 5.86346 10.5762 4.60199 13.6216C3.34053 16.6671 3.01048 20.0182 3.65357 23.2512C4.29665 26.4842 5.884 29.4539 8.21487 31.7848C10.5457 34.1157 13.5155 35.703 16.7485 36.3461C19.9815 36.9892 23.3326 36.6591 26.378 35.3977C29.4235 34.1362 32.0265 32 33.8578 29.2592C35.6892 26.5184 36.6667 23.296 36.6667 19.9997C36.6618 15.5809 34.9043 11.3445 31.7797 8.21992C28.6552 5.09537 24.4188 3.33786 20 3.33301ZM20 33.333C17.3629 33.333 14.785 32.551 12.5924 31.0859C10.3997 29.6209 8.69076 27.5385 7.68159 25.1021C6.67243 22.6658 6.40838 19.9849 6.92285 17.3985C7.43732 14.8121 8.7072 12.4363 10.5719 10.5716C12.4366 8.70688 14.8124 7.43701 17.3988 6.92254C19.9852 6.40807 22.6661 6.67211 25.1024 7.68128C27.5388 8.69045 29.6212 10.3994 31.0862 12.5921C32.5513 14.7847 33.3333 17.3626 33.3333 19.9997C33.3293 23.5347 31.9233 26.9238 29.4237 29.4234C26.9241 31.923 23.535 33.329 20 33.333Z"
                                        fill="#FED530"/>
                                    <path
                                        d="M15 10.7432V29.2565L29.8117 19.9998L15 10.7432ZM18.3333 16.7565L23.5217 19.9998L18.3333 23.2432V16.7565Z"
                                        fill="#FED530"/>
                                </svg>
                            </div>
                            <div className="video-item-info">
                                <span>Episode 1</span>
                                <h2>First Meet</h2>
                                <p className="video-item-text">Lorem ipsum dolor sit amet,
                                    consec tetur adipis cing elit</p>
                                <div className="d-flex">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 1.33301C6.68146 1.33301 5.39252 1.724 4.2962 2.45654C3.19987 3.18909 2.34539 4.23028 1.8408 5.44845C1.33622 6.66663 1.20419 8.00707 1.46143 9.30028C1.71866 10.5935 2.3536 11.7814 3.28595 12.7137C4.2183 13.6461 5.40619 14.281 6.6994 14.5382C7.9926 14.7955 9.33305 14.6635 10.5512 14.1589C11.7694 13.6543 12.8106 12.7998 13.5431 11.7035C14.2757 10.6071 14.6667 9.31822 14.6667 7.99967C14.6647 6.23216 13.9617 4.5376 12.7119 3.28777C11.4621 2.03795 9.76751 1.33495 8 1.33301ZM8 13.333C6.94516 13.333 5.91402 13.0202 5.03696 12.4342C4.15989 11.8481 3.47631 11.0152 3.07264 10.0407C2.66897 9.06611 2.56336 7.99376 2.76914 6.95919C2.97493 5.92463 3.48288 4.97432 4.22876 4.22844C4.97464 3.48256 5.92495 2.97461 6.95952 2.76882C7.99408 2.56303 9.06644 2.66865 10.041 3.07232C11.0155 3.47598 11.8485 4.15957 12.4345 5.03663C13.0205 5.9137 13.3333 6.94484 13.3333 7.99967C13.3317 9.41368 12.7693 10.7693 11.7695 11.7692C10.7696 12.769 9.414 13.3314 8 13.333Z"
                                            fill="#9A9AB0"/>
                                        <path
                                            d="M8.66666 4H7.33333V8.276L10.1953 11.138L11.138 10.1953L8.66666 7.724V4Z"
                                            fill="#9A9AB0"/>
                                    </svg>
                                    <span>1hr 24mins</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.3333 2.66634V1.33301H10V2.66634H6V1.33301H4.66667V2.66634H2V13.9997H14V2.66634H11.3333ZM4.66667 3.99967V5.33301H6V3.99967H10V5.33301H11.3333V3.99967H12.6667V6.66634H3.33333V3.99967H4.66667ZM3.33333 12.6663V7.99967H12.6667V12.6663H3.33333Z"
                                            fill="#9A9AB0"/>
                                    </svg>
                                    <span>June 2, 2021 </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex me-5">
                            <div className=" d-flex justify-content-center align-items-center">
                                <svg className="position-relative" width="176" height="176" viewBox="0 0 176 176"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="176" height="176" fill="#525252"/>
                                </svg>
                                <svg className="position-absolute" width="40" height="40" viewBox="0 0 40 40"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 3.33301C16.7036 3.33301 13.4813 4.31049 10.7405 6.14185C7.99966 7.9732 5.86346 10.5762 4.60199 13.6216C3.34053 16.6671 3.01048 20.0182 3.65357 23.2512C4.29665 26.4842 5.884 29.4539 8.21487 31.7848C10.5457 34.1157 13.5155 35.703 16.7485 36.3461C19.9815 36.9892 23.3326 36.6591 26.378 35.3977C29.4235 34.1362 32.0265 32 33.8578 29.2592C35.6892 26.5184 36.6667 23.296 36.6667 19.9997C36.6618 15.5809 34.9043 11.3445 31.7797 8.21992C28.6552 5.09537 24.4188 3.33786 20 3.33301ZM20 33.333C17.3629 33.333 14.785 32.551 12.5924 31.0859C10.3997 29.6209 8.69076 27.5385 7.68159 25.1021C6.67243 22.6658 6.40838 19.9849 6.92285 17.3985C7.43732 14.8121 8.7072 12.4363 10.5719 10.5716C12.4366 8.70688 14.8124 7.43701 17.3988 6.92254C19.9852 6.40807 22.6661 6.67211 25.1024 7.68128C27.5388 8.69045 29.6212 10.3994 31.0862 12.5921C32.5513 14.7847 33.3333 17.3626 33.3333 19.9997C33.3293 23.5347 31.9233 26.9238 29.4237 29.4234C26.9241 31.923 23.535 33.329 20 33.333Z"
                                        fill="#FED530"/>
                                    <path
                                        d="M15 10.7432V29.2565L29.8117 19.9998L15 10.7432ZM18.3333 16.7565L23.5217 19.9998L18.3333 23.2432V16.7565Z"
                                        fill="#FED530"/>
                                </svg>
                            </div>
                            <div className="video-item-info">
                                <span>Episode 1</span>
                                <h2>First Meet</h2>
                                <p className="video-item-text">Lorem ipsum dolor sit amet,
                                    consec tetur adipis cing elit</p>
                                <div className="d-flex">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 1.33301C6.68146 1.33301 5.39252 1.724 4.2962 2.45654C3.19987 3.18909 2.34539 4.23028 1.8408 5.44845C1.33622 6.66663 1.20419 8.00707 1.46143 9.30028C1.71866 10.5935 2.3536 11.7814 3.28595 12.7137C4.2183 13.6461 5.40619 14.281 6.6994 14.5382C7.9926 14.7955 9.33305 14.6635 10.5512 14.1589C11.7694 13.6543 12.8106 12.7998 13.5431 11.7035C14.2757 10.6071 14.6667 9.31822 14.6667 7.99967C14.6647 6.23216 13.9617 4.5376 12.7119 3.28777C11.4621 2.03795 9.76751 1.33495 8 1.33301ZM8 13.333C6.94516 13.333 5.91402 13.0202 5.03696 12.4342C4.15989 11.8481 3.47631 11.0152 3.07264 10.0407C2.66897 9.06611 2.56336 7.99376 2.76914 6.95919C2.97493 5.92463 3.48288 4.97432 4.22876 4.22844C4.97464 3.48256 5.92495 2.97461 6.95952 2.76882C7.99408 2.56303 9.06644 2.66865 10.041 3.07232C11.0155 3.47598 11.8485 4.15957 12.4345 5.03663C13.0205 5.9137 13.3333 6.94484 13.3333 7.99967C13.3317 9.41368 12.7693 10.7693 11.7695 11.7692C10.7696 12.769 9.414 13.3314 8 13.333Z"
                                            fill="#9A9AB0"/>
                                        <path
                                            d="M8.66666 4H7.33333V8.276L10.1953 11.138L11.138 10.1953L8.66666 7.724V4Z"
                                            fill="#9A9AB0"/>
                                    </svg>
                                    <span>1hr 24mins</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.3333 2.66634V1.33301H10V2.66634H6V1.33301H4.66667V2.66634H2V13.9997H14V2.66634H11.3333ZM4.66667 3.99967V5.33301H6V3.99967H10V5.33301H11.3333V3.99967H12.6667V6.66634H3.33333V3.99967H4.66667ZM3.33333 12.6663V7.99967H12.6667V12.6663H3.33333Z"
                                            fill="#9A9AB0"/>
                                    </svg>
                                    <span>June 2, 2021 </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className=" d-flex justify-content-center align-items-center">
                                <svg className="position-relative" width="176" height="176" viewBox="0 0 176 176"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="176" height="176" fill="#525252"/>
                                </svg>
                                <svg className="position-absolute" width="40" height="40" viewBox="0 0 40 40"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 3.33301C16.7036 3.33301 13.4813 4.31049 10.7405 6.14185C7.99966 7.9732 5.86346 10.5762 4.60199 13.6216C3.34053 16.6671 3.01048 20.0182 3.65357 23.2512C4.29665 26.4842 5.884 29.4539 8.21487 31.7848C10.5457 34.1157 13.5155 35.703 16.7485 36.3461C19.9815 36.9892 23.3326 36.6591 26.378 35.3977C29.4235 34.1362 32.0265 32 33.8578 29.2592C35.6892 26.5184 36.6667 23.296 36.6667 19.9997C36.6618 15.5809 34.9043 11.3445 31.7797 8.21992C28.6552 5.09537 24.4188 3.33786 20 3.33301ZM20 33.333C17.3629 33.333 14.785 32.551 12.5924 31.0859C10.3997 29.6209 8.69076 27.5385 7.68159 25.1021C6.67243 22.6658 6.40838 19.9849 6.92285 17.3985C7.43732 14.8121 8.7072 12.4363 10.5719 10.5716C12.4366 8.70688 14.8124 7.43701 17.3988 6.92254C19.9852 6.40807 22.6661 6.67211 25.1024 7.68128C27.5388 8.69045 29.6212 10.3994 31.0862 12.5921C32.5513 14.7847 33.3333 17.3626 33.3333 19.9997C33.3293 23.5347 31.9233 26.9238 29.4237 29.4234C26.9241 31.923 23.535 33.329 20 33.333Z"
                                        fill="#FED530"/>
                                    <path
                                        d="M15 10.7432V29.2565L29.8117 19.9998L15 10.7432ZM18.3333 16.7565L23.5217 19.9998L18.3333 23.2432V16.7565Z"
                                        fill="#FED530"/>
                                </svg>
                            </div>
                            <div className="video-item-info">
                                <span>Episode 1</span>
                                <h2>First Meet</h2>
                                <p className="video-item-text">Lorem ipsum dolor sit amet,
                                    consec tetur adipis cing elit</p>
                                <div className="d-flex">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 1.33301C6.68146 1.33301 5.39252 1.724 4.2962 2.45654C3.19987 3.18909 2.34539 4.23028 1.8408 5.44845C1.33622 6.66663 1.20419 8.00707 1.46143 9.30028C1.71866 10.5935 2.3536 11.7814 3.28595 12.7137C4.2183 13.6461 5.40619 14.281 6.6994 14.5382C7.9926 14.7955 9.33305 14.6635 10.5512 14.1589C11.7694 13.6543 12.8106 12.7998 13.5431 11.7035C14.2757 10.6071 14.6667 9.31822 14.6667 7.99967C14.6647 6.23216 13.9617 4.5376 12.7119 3.28777C11.4621 2.03795 9.76751 1.33495 8 1.33301ZM8 13.333C6.94516 13.333 5.91402 13.0202 5.03696 12.4342C4.15989 11.8481 3.47631 11.0152 3.07264 10.0407C2.66897 9.06611 2.56336 7.99376 2.76914 6.95919C2.97493 5.92463 3.48288 4.97432 4.22876 4.22844C4.97464 3.48256 5.92495 2.97461 6.95952 2.76882C7.99408 2.56303 9.06644 2.66865 10.041 3.07232C11.0155 3.47598 11.8485 4.15957 12.4345 5.03663C13.0205 5.9137 13.3333 6.94484 13.3333 7.99967C13.3317 9.41368 12.7693 10.7693 11.7695 11.7692C10.7696 12.769 9.414 13.3314 8 13.333Z"
                                            fill="#9A9AB0"/>
                                        <path
                                            d="M8.66666 4H7.33333V8.276L10.1953 11.138L11.138 10.1953L8.66666 7.724V4Z"
                                            fill="#9A9AB0"/>
                                    </svg>
                                    <span>1hr 24mins</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.3333 2.66634V1.33301H10V2.66634H6V1.33301H4.66667V2.66634H2V13.9997H14V2.66634H11.3333ZM4.66667 3.99967V5.33301H6V3.99967H10V5.33301H11.3333V3.99967H12.6667V6.66634H3.33333V3.99967H4.66667ZM3.33333 12.6663V7.99967H12.6667V12.6663H3.33333Z"
                                            fill="#9A9AB0"/>
                                    </svg>
                                    <span>June 2, 2021 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;