import React, {useCallback, useEffect, useRef, useState} from 'react';
import * as PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {apiDetail} from "../api";

const Video = () => {

    let {id} = useParams();
    const [movieData, setMovieData] = useState([]);

    useEffect(async () => {
        const response = await apiDetail(id);
        setMovieData(response);
    }, []);

    class SeekBar extends React.Component {
        render() {
            return null;
        }
    }

    SeekBar.propTypes = {type: PropTypes.string};

    const [duration, setDuration] = useState("--:--")
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef()
    const handleFullSceen = useCallback((e) => {
        /*if (e.code === 'KeyF') {
            if (!document.fullscreenElement) {
                document.querySelector('#video').requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }*/
    });
    useEffect(() => {
        document.addEventListener('keydown', handleFullSceen)
        return () => {
            document.removeEventListener('keydown', handleFullSceen)
        }
    }, [handleFullSceen])

    const onSeek = (e) => {
        videoRef.current.currentTime = duration / 100 * e.target.value
    }

    return (
        <>
            <div className="main-container">
                <div className="video-block d-flex justify-content-center align-items-center">
                    <video className="video m-0" width="1300" height="560"
                           poster={movieData.Poster}
                           id="video"
                           ref={videoRef}
                           onClick={() => {
                               videoRef.current.pause()
                           }}
                           onPlay={() => {
                               setPlaying(true)
                           }}
                           onPause={() => {
                               setPlaying(false)
                           }}
                           src={process.env.PUBLIC_URL + '/assets/video/lesson.mp4'}
                           onLoadedMetadata={(e) => {
                               setDuration(e.target.duration)
                           }}
                           controls={false}
                    />
                    <input
                        className="video-seekbar"
                        type="range"
                        onChange={onSeek}
                        aria-label="Temperature"
                        defaultValue={30}
                    />
                    {!playing ? <svg className="position-absolute" onClick={() => {
                            videoRef.current.play()
                        }} width="1200" height="120" viewBox="0 0 120 120" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M60 10C50.1109 10 40.444 12.9324 32.2215 18.4265C23.999 23.9206 17.5904 31.7295 13.806 40.8658C10.0216 50.0021 9.03148 60.0555 10.9607 69.7545C12.89 79.4536 17.652 88.3627 24.6447 95.3553C31.6373 102.348 40.5464 107.11 50.2455 109.039C59.9445 110.969 69.9979 109.978 79.1342 106.194C88.2705 102.41 96.0794 96.001 101.573 87.7785C107.068 79.5561 110 69.8891 110 60C109.985 46.7436 104.713 34.0344 95.3393 24.6607C85.9656 15.2871 73.2564 10.0146 60 10ZM60 100C52.0888 100 44.3552 97.654 37.7772 93.2588C31.1992 88.8635 26.0723 82.6164 23.0448 75.3073C20.0173 67.9983 19.2252 59.9556 20.7686 52.1964C22.312 44.4371 26.1216 37.3098 31.7157 31.7157C37.3098 26.1216 44.4372 22.312 52.1964 20.7686C59.9556 19.2252 67.9983 20.0173 75.3073 23.0448C82.6164 26.0723 88.8635 31.1992 93.2588 37.7772C97.654 44.3552 100 52.0887 100 60C99.9881 70.605 95.77 80.7722 88.2711 88.2711C80.7722 95.77 70.605 99.9881 60 100Z"
                                fill="#FED530"/>
                            <path
                                d="M45 32.2305V87.7705L89.435 60.0005L45 32.2305ZM55 50.2705L70.565 60.0005L55 69.7305V50.2705Z"
                                fill="#FED530"/>
                        </svg>
                        : ''}
                    {!playing ? <div className="video-info position-absolute">
                        <h1 className="video-title">{movieData.Title}</h1>
                        <p className="video-text">{movieData.Plot}</p>
                    </div> : ''}
                </div>
            </div>
        </>
    );
};

export default Video;