import React, { useState } from 'react';
import './Movie.css'
import MoviePic from '../assets/movie.jpg'
import { Link } from 'react-router-dom';


const IMG_API = "https://image.tmdb.org/t/p/w300/";


const Movie = ({title, poster_path, overview, like,  id, handleLike}) => {

    
    return ( 
        <div className="movie">
            <Link to={`/movie/${id}`}>
                <img src={poster_path ? IMG_API + poster_path : MoviePic} alt={title}/>
            </Link>
            <div className="movie__footer">
                <h3>{title}</h3>
                <div>
                    <button onClick={() => handleLike()} >Like</button>
                    {like}
                </div>
            </div>
        </div>
     );
}
 
export default Movie;