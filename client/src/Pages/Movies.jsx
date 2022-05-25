import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddMovieButton from '../Components/AddMovieButton'
import Appbar from '../Components/Appbar'
import GenreDropdown from '../Components/GenreDropdown'
import SearchSection from '../Components/SearchSection'
import { useDispatch, useSelector } from "react-redux"
import DisplayMovies from '../Components/DisplayMovies'
import { fetch_all_movies } from '../Services/Movies'
import axios from 'axios'
import load_movies from '../Actions/movies'
function Movies() {
  const [_movies, setMovies] = useState([]);
  const movies = useSelector((state) => state);
    const _dispatch = useDispatch();
    const loadMovies = useCallback(() => {
        _dispatch(load_movies());
    }, [_dispatch]);

    useEffect(() => {
        loadMovies();
        console.log(movies);
    }, [loadMovies]);

  return (
    <React.Fragment>
      <Appbar />
      <div className='Filter-Section' style={{ marginTop: '1.5em' }}>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col>
              <SearchSection />
            </Col>
            <Col>
              <GenreDropdown />
            </Col>
            <Col><AddMovieButton /></Col>
            <Col></Col>
          </Row>
          <hr style={{ border: '0.08rem solid #4E9F3D', backgroundColor: '#4E9F3D' }} />
        { }
          <Container>
            {movies.loading?(<p style={{color:'white'}}>Loading data please wait...</p>):movies.data.data?(<DisplayMovies data={movies.data.data}/>):""}
          </Container>
        </Container>
        
      </div>
    </React.Fragment>
  )
}

export default Movies