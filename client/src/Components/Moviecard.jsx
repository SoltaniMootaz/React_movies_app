import axios from 'axios';
import React from 'react';
import {BsBookmarkPlusFill} from 'react-icons/bs'
import '../Styles/Cards.css'
function Moviecard(props) {
  //console.log(props.data.poster,":../Images/poster/1.jpg=",props.data.poster==="../Images/poster/1.jpg");
  //var img=require( `${ props.data.poster}`);
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
  
          <div className='overlay d-flex align-items-center justify-content-center' onClick={handleBookmark()}>
          <span className='mr-2'>Add to Bookmarks {" "}</span>
		       <BsBookmarkPlusFill style={{color:'#4E9F3D'}} />
					</div>
</div>
</React.Fragment>
  )
}

export default Moviecard