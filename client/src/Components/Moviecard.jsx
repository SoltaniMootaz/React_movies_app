import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {BsBookmarkPlusFill} from 'react-icons/bs'
import '../Styles/Cards.css'
function Moviecard(props) {
  //console.log(props.data.poster,":../Images/poster/1.jpg=",props.data.poster==="../Images/poster/1.jpg");
  //var img=require( `${ props.data.poster}`);
  const [isBookmarked,setIsBookmarked]=useState(false);
  const checkIfBookmarked=async()=>{
    return await axios.post("http://localhost:3001/checkIfBookmarked",{
      "idU":localStorage.getItem("id"),
      "idM":props.data._id})
  }
  useEffect(() => {
    
     checkIfBookmarked().then((res)=>{
       setIsBookmarked(res.data);
      
     });
  }, [checkIfBookmarked])
  
  const handleBookmark=()=>{
    console.log("clicked");
    axios.post("http://localhost:3001/SaveNewBookmark",{
                    'idU':localStorage.getItem("id"),
                    'idM':props.data._id
                    }).then((res)=>{
                    console.log(res);
                }).catch(error=>{
                    if (error.response){
        
                        console.log(error.response);
                        
                        }else if(error.request){
                        
                            console.log(error.request);
                        
                        }else if(error.message){
                        
                            console.log(error.message);
                        
                        }
                    }
                ) 
  }
  const handleRBookmark=()=>{

  }
  return (
   /*  <Card className="bg-dark text-white card" >
      <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          
  </Card.ImgOverlay>
  <Card.Title>Jumanji</Card.Title>
</Card> */

<React.Fragment>
<div class="image-container d-flex justify-content-start m-3">
  <img src={ props.data.poster} alt="" width={"100%"} height={"100%"}/>
  
          <div className='overlay d-flex align-items-center justify-content-center' >
            {
              isBookmarked?
           ( 
          <Button onClick={()=>handleBookmark()} style={{backgroundColor:'transparent',backgroundRepeat:'no-repeat',border:'none',cursor:'pointer',overflow:'hidden',outline:'none',borderColor:'#4E9F3D'}}>
          <span className='mr-2'>Add to Bookmarks {" "}</span>       
		       <BsBookmarkPlusFill style={{color:'#4E9F3D'}} />
           </Button>
           )
           :(
            <Button onClick={()=>handleRBookmark()} style={{backgroundColor:'transparent',backgroundRepeat:'no-repeat',border:'none',cursor:'pointer',overflow:'hidden',outline:'none',borderColor:'#4E9F3D'}}>
            <span className='mr-2'>Remove from Bookmarks {" "}</span>       
             <BsBookmarkPlusFill style={{color:'red'}} />
             </Button>
           )
            } 
					</div>
</div>
</React.Fragment>
  )
}

export default Moviecard