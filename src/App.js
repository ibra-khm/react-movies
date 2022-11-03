import { Route, Routes, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';
import MovieInfo from './components/MovieInfo';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';



export default function App() {
  const [movies, setMovies] = useState([]);
  const APIURL =
	"https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=2587fe27ddb1758c80e76c271cedfd75&page=2";
  useEffect(() => {
    axios.get(APIURL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Movies movies={movies} />} />
        <Route path="/movies/:id" element={<MovieInfo movies={movies} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
