import React from 'react';
import {Card} from 'react-bootstrap';
import img from '../Images/1.jpg'
function Moviecard() {
  return (
    <Card className="bg-dark text-white" style={{width:"15em",height:'auto'}}>
      <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          
  </Card.ImgOverlay>
  <Card.Title>Jumanji</Card.Title>
</Card>
  )
}

export default Moviecard