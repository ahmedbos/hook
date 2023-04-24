import { useState } from 'react';
import Add from './Add.js';
import './App.css';
import MovieList from './movielist.js';

function App() {
  const [movies, setMovies] = useState([
    {Title:'Avengers',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
                            ,rate:'5',description:'very good' }
    ,{Title:'Avengers',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    ,rate:'5',description:'very good'}
    ,{Title:'Avengers',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    ,rate:'5',description:'very good'},{Title:'Avengers',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    ,rate:'5',description:'very good'}
  ]);
  
  return (
    
    <div className="App">
      
      <h1 style={{textAlign:'center',fontSize:100 }}>hallo</h1>
      <div> <MovieList movies={movies} setMovies={setMovies}/></div>
      <Add movies={movies} />
    </div>
  );
}

export default App;
