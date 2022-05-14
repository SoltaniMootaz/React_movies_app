import React from 'react';
import {Card} from 'react-bootstrap';
import img from '../Images/1.jpg'
import '../Styles/Cards.css'
function Moviecard() {
  return (
   /*  <Card className="bg-dark text-white card" >
      <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          
  </Card.ImgOverlay>
  <Card.Title>Jumanji</Card.Title>
</Card> */
<React.Fragment>
<div class="card">
  <img src={img} alt="" style={{width:"100%",height:"100%",filter:"brightness(35%)",borderBottom:"0.1rem solid #4E9F3D"}} />
  <div class="container1">
    <h4><b></b></h4>
    <p> Jumanji</p>
  </div>
</div>
</React.Fragment>
  )
}

export default Moviecard