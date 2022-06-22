import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';

import './detail.scss';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import CartList from './CartList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';

function Detail() {

  const { category, id } = useParams();

  const [item, setItem] = useState();

  useLayoutEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, {params: {}});
      window.scrollTo(0,0);
      setItem(response);
    }
    getDetail();
  },[id, category]);

  return (
    <>
      <div className="banner" 
        style={{backgroundImage: `url(${apiConfig.originalImage(item ? item.backdrop_path : '')})`}}
      >
      </div>
      <div className="movie-content container mb-3">
        <div className="movie-content__poster">
          <div className="movie-content__poster__img"
            style={{backgroundImage: `url(${apiConfig.originalImage(item ? item.poster_path : '')})`}}
          >
          </div>
        </div>
        <div className="movie-content__info">
          <h1 className="title">
            {item ? item.title : ''}
          </h1>
          <div className="genres">
            {
              item ? item.genres.slice(0,5).map((genre, i) => (
                <span key={i} className="genres__item">{genre.name}</span>
              )) : ''
            }
          </div>
          <p className="overview">{item ? item.overview : ''}</p>
          <div className="casts">
            <div className="section__header">
              <h2>Cast</h2>
            </div>
             <CartList id={item ? item.id : ''} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section mb-3 videolist">
          <VideoList id={item ? item.id : ''} />
        </div>
      </div>

      <div className="similar section">
        <div className="similar__titile mb-2">
          <h2>Similar</h2>
        </div>
        <MovieList type="similar" id={id} category={category}/>
      </div>

    </>
  )
}

export default Detail