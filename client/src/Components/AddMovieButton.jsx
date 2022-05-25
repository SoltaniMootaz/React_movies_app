import React, { useEffect } from 'react'
//import { useSelector, useDispatch } from 'react-redux';
import { Button,Modal, Form,Row,Col, DropdownButton, Dropdown } from 'react-bootstrap'
import axios from 'axios';

function AddMovieButton() {
    const [show, setShow] = React.useState(false);
    const genres = ["Action", "Adventure", "Romance", "Thriller", "Sci-fi"];
    /* const genres=useSelector(state=>state.genres);
    const dispatch=useDispatch(); */
    const [title, setTitle]=React.useState("");
    const [description,setDescription]=React.useState("");
    const [cover, setCover] =React.useState("");
    const [poster, setPoster]=React.useState("");
    const [_genres,setGenres]=React.useState("Genres");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
     // dispatch(loadGenres);
    },[]);
    const DropDown=()=>{
        return(
          <DropdownButton variant="outline-secondary"  title={_genres}  onSelect={(e)=>{setGenres(e)}} >
           {
             genres.map((genre, index)=>(
               <Dropdown.Item eventKey={genre} key={index}>{genre}</Dropdown.Item>
             ))
           }
           <Dropdown.Divider />
            <Dropdown.Item href="#">All</Dropdown.Item>
           </DropdownButton>
        );
    }
   async function handleSubmit(e){
    e.preventDefault()
    //control de saisie
    //post
    console.log("poster: ",poster);
    console.log("cover : ",cover);
   await axios.post("http://localhost:3001/SaveNewMovie",{
      'title':title,
      'description':description,
      'genre':_genres,
      'poster':poster,
      'cover':cover
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
 <React.Fragment>
     <Button variant="success" style={{backgroundColor:"#4E9F3D"}} onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="3">
                            Title:
                 </Form.Label>
                <Col sm="9">
                 <Form.Control  type='text' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
                </Col>
             </Form.Group>
             <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="3">
                            Description:
                 </Form.Label>
                <Col sm="9">
                 <Form.Control  type='text' placeholder='Description' onChange={(e)=>setDescription(e.target.value)} />
                </Col>
             </Form.Group>
             <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="3">
                            Genre:
                 </Form.Label>
                 <Col sm="9">
             <DropDown  />
             </Col>
             </Form.Group>
            
                
              
             <Form.Group controlId="formFileDisabled" className="mb-3">
            <Form.Label>Add the cover of the movie</Form.Label>
            <Form.Control type="file" accept=".jpg, .png, .jpeg" onChange={(e)=>{
              const file=e.target.files[0];
              var reader=new FileReader();
              reader.readAsDataURL(file);
              reader.onload=()=>{setCover(reader.result);}
              //var path="../../public/Images/cover/"+file.name;
              
             
              }} />
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
            <Form.Label>Add the image of the movie</Form.Label>
            <Form.Control type="file" accept=".jpg, .png, .jpeg" onChange={(e)=>{
             const file=e.target.files[0];
             var reader=new FileReader();
             reader.readAsDataURL(file);
             reader.onload=()=>{setPoster(reader.result);}
           
            }} />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={(e)=>{
            handleSubmit(e);
            setShow(false);
            }
            } style={{backgroundColor:"#4E9F3D"}} >
            Save movie
          </Button>
        </Modal.Footer>
      </Modal>
 </React.Fragment>
  )
}

export default AddMovieButton