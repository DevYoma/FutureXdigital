import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = ({overview}) => {
    const { id } = useParams();
    return ( 
        <div>
            <h1>Movie Detail {id}</h1>
            {overview}
        </div>
     );
}
 
export default MovieDetail;