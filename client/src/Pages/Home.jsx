import React from 'react'
import Appbar from '../Components/Appbar'
import Footer from '../Components/Footer'
import Homesection from '../Components/Homesection'
import Indeximg from '../Components/Indeximg'

function Home() {
  return (
    <React.Fragment>
        <Appbar />
        <Indeximg />
        <Homesection title="Hot movies" />
        <Homesection title="New movies" />
        <Footer />
    </React.Fragment>
  )
}

export default Home