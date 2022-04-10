import React from 'react'
import { Button } from 'react-bootstrap'
import img from '../Images/Index_Img1.jpg'
import '../Styles/Indeximg.css'
function Indeximg() {
  return (
    <React.Fragment>
        <div className='Container1'>
        <img src={img} style={{width:"100%", height:"50em",filter:"brightness(35%)",borderBottom:"0.1rem solid #4E9F3D"}}/>
        <div className='Info'>
        <h3 style={{color:'white'}}>Watch more with premium</h3>
        <p style={{color:'white'}}>Download and watch more movies, series and tv shows.</p>.
        <Button variant="success" style={{backgroundColor:"#4E9F3D"}}>Go premium now</Button>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Indeximg