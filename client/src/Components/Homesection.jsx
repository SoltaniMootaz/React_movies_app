import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Moviecard from './Moviecard'

function Homesection(props) {
  return (
    <React.Fragment>
       
      <Container fluid>
          <Row >
              <Col>
          <h3 style={{color:"white",fontWeight:'bold'}}>{props.title}</h3> 
          </Col>
          </Row>
          <Row>
            <Col><Moviecard /></Col>
            <Col><Moviecard /></Col>
            <Col><Moviecard /></Col>
          </Row>
      </Container>
      <hr style={{border:'0.08rem solid #4E9F3D',backgroundColor:'#4E9F3D'}} />
    </React.Fragment>
  )
}

export default Homesection