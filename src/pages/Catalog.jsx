import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import PageHeader from '../components/page-header/PageHeader';
import Moviegrid from '../components/movie-grid/Moviegrid';

import {category as cate} from '../api/tmdbApi'

function Catalog() {

  const { category } = useParams()

  useEffect(() => { 
    window.scrollTo(0,0);
  },[category])

  return (
    <>
      <PageHeader>
        { category === cate.movie ? 'Movie' : 'TV series' }
      </PageHeader>

      <div className="container">
        <div className="section mb-3">
          <Moviegrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog