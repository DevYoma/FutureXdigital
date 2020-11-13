import React from 'react';
import './Movie.css'

const IMG_API = "https://image.tmdb.org/t/p/w300/";


const Movie = ({title, poster_path, overview, like}) => {
    
    return ( 
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title}/>
            <div className="movie__footer">
                <h3>{title}</h3>
                <div>
                    <button >Like</button>
                    {like}
                </div>
            </div>
        </div>
     );
}
 
export default Movie;