import React from 'react'
import { Button,Modal, Form,Row,Col } from 'react-bootstrap'

function AddMovieButton() {
    const [show, setShow] = React.useState(false);
    const [file, setFile] =React.useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fileReader=new FileReader();
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
                 <Form.Control  type='text' placeholder='Title' />
                </Col>
             </Form.Group>
             <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="3">
                            Description:
                 </Form.Label>
                <Col sm="9">
                 <Form.Control  type='text' placeholder='Description' />
                </Col>
             </Form.Group>
             <Form.Group controlId="formFileDisabled" className="mb-3">
            <Form.Label>Add the cover of the movie</Form.Label>
            <Form.Control type="file" accept=".jpg, .png, .jpeg" onChange={(e)=>{
              fileReader.readAsText(e.target.files[0], "UTF-8");
              fileReader.onload = e => {
                console.log("here");
                console.log(e.target.result)
                setFile(e.target.result);
              };
              console.log(file)}} />
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
            <Form.Label>Add the image of the movie</Form.Label>
            <Form.Control type="file" accept=".jpg, .png, .jpeg" onChange={(e)=>{
              fileReader.readAsText(e.target.files[0], "UTF-8");
              fileReader.onload = e => {
                console.log("here");
                console.log(e.target.result)
                setFile(e.target.result);
              };
              console.log(file)}} />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose} style={{backgroundColor:"#4E9F3D"}}>
            Save movie
          </Button>
        </Modal.Footer>
      </Modal>
 </React.Fragment>
  )
}

export default AddMovieButton