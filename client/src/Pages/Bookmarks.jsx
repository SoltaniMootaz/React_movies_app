import React from 'react'
import Appbar from '../Components/Appbar'

function Bookmarks() {
  return (
 <React.Fragment>
     <Appbar />
     <div className='Bookmark-Title-Section' style={{marginTop:'1.5em'}}>
       <p style={{textAlign:'initial',marginLeft:'2em',color:'white',fontSize:'24px',fontWeight:'bolder'}}>Your bookmarks</p>
     <hr style={{border:'0.08rem solid #4E9F3D',backgroundColor:'#4E9F3D'}} />
      
        </div>
 </React.Fragment>
  )
}

export default Bookmarks