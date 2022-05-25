import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

import Appbar from '../Components/Appbar'
import Footer from '../Components/Footer'
import Homesection from '../Components/Homesection'
import Indeximg from '../Components/Indeximg'
import { fetch_new_movies } from '../Services/Movies'

function Home() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch_new_movies().then(res=>{    
      setData(res.data);
    })
  },[])


  return (
    <React.Fragment>
        <Appbar />
        <Indeximg />
        <Homesection title="Hot movies" data={data} />
        <Homesection title="New movies" data={data} />
        <Footer />
    </React.Fragment>
  )
}

export default Home