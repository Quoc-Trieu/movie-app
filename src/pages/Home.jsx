import React from 'react'
import { Link } from 'react-router-dom'

import HeroSlide from '../components/hero-slide/HeroSlide'
import { Oulinebutton } from '../components/button/button'
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi'

function Home() {
  return (
    <div>
      <HeroSlide />
      <div className="container">
      
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending movies</h2>
            <Link to="/movie">
              <Oulinebutton className="small">View more</Oulinebutton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rate movies</h2>
            <Link to="/movie">
              <Oulinebutton className="small">View more</Oulinebutton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <Oulinebutton className="small">View more</Oulinebutton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <Oulinebutton className="small">View more</Oulinebutton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>

      </div>
    </div>
  )
}

export default Home