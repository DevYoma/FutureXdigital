import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Components/Movie';

    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=dc9dcb685d24ede77b6a9a0279eb17be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"


    const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=dc9dcb685d24ede77b6a9a0279eb17be&language=en-US&page=1&include_adult=false&query="


    

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [like, setLike] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results)
        })
}

const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
}



  //getting movies from API
  useEffect(() => {
    fetch(FEATURED_API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results)
    })
  }, [])
  
  return (
    <>
      <header>
            <h1>YomaMovies</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    className="search" 
                    type="search" 
                    placeholder="Search..."
                    onChange={handleOnChange}
                    value={searchTerm}
                />
            </form>
        </header>
      <div className="movie__container">
          {movies.length > 0 && movies.map((movie) => 
              <Movie {...movie} key={movie.id} like={like}/>
          )}
      </div>
    </>
  );
}

export default App;
