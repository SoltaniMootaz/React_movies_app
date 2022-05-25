import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Moviecard from './Moviecard'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore,{Autoplay} from "swiper"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

function Homesection(props) {
  SwiperCore.use([Autoplay])
  return (
    <React.Fragment>
       
      <Container fluid>
          <Row >
              <Col>
          <h3 style={{color:"white",fontWeight:'bold'}}>{props.title}</h3> 
          </Col>
          </Row>
          <Row style={{height:"auto"}}>
          <Swiper
      spaceBetween={50}
      slidesPerView={4}
      Autoplay={{delay: 1000}}
      centeredSlides={true}
      centeredSlidesBounds={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        props.data.map(movie=>
          (<SwiperSlide><Moviecard data={movie} /></SwiperSlide>)
      )
      }
      </Swiper>
          </Row>
      </Container>
      <hr style={{border:'0.08rem solid #4E9F3D',backgroundColor:'#4E9F3D'}} />
    </React.Fragment>
  )
}

export default Homesection