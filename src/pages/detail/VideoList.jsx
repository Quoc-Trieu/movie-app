import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmdbApi';

const VideoList = props => {

    const { category } = useParams();

    const [video, setVideo] = useState([]);

    useEffect(() => {
        const getVideos= async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideo(res.results.slice(0, 5));
        }
        getVideos()
    },[category, props.id])

  return (
    <>
        {
            video.map((item, i) => (
                <Video key={i} item={item} />
            ))
        }
    </>
  )
}

const Video = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 8 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__titile">
                <h2>{item.name}</h2>
            </div>
            <iframe
                className="iframe__video"
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width='100%'
                title='video'
            >
            </iframe>
        </div>
    )
}

export default VideoList