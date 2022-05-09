import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddMovieButton from '../Components/AddMovieButton'
import Appbar from '../Components/Appbar'
import GenreDropdown from '../Components/GenreDropdown'
import SearchSection from '../Components/SearchSection'

function Movies() {
  return (
    <React.Fragment>
        <Appbar />
        <div className='Filter-Section' style={{marginTop:'1.5em'}}>
          <Container>
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
          </Container>
          <hr style={{border:'0.08rem solid #4E9F3D',backgroundColor:'#4E9F3D'}} />
          {}
        </div>
    </React.Fragment>
  )
}

export default Movies