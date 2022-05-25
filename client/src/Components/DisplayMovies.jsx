import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Moviecard from "./Moviecard"
function DisplayMovies(props) {
  return (
    <React.Fragment>
        <Container>
            <Row>
                {props.data.map((movie)=>(
                    <Col sm="4">
                        <Moviecard data={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default DisplayMovies