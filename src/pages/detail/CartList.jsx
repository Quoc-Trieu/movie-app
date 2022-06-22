import React, { useState, useEffect } from 'react'

import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig';

import { useParams } from 'react-router'

const CartList = props => {

    const [casts, setCast] = useState([]);

    const { category } = useParams()

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCast(res.cast.slice(0, 6));
        }
    
        getCredits();
    },[category, props.id])

  return (
    <div className="cast">
        {
            casts.map((cast, i) => (
                <div key={i} className="cast__item">
                    <div 
                        className="cast__item__img"
                        style={{backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`}}
                    >

                    </div>
                    <div className="cast__item__name">{cast.name}</div>
                </div>
            ))
        }
    </div>
  )
}

export default CartList