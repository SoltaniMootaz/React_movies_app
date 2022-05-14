import * as React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
function Appbar() {
 
  return (
    <>
    <Navbar bg="dark" expand="lg" style={{borderBottom:"0.1rem solid #4E9F3D"}}>
  <Container fluid Style={{display:"flex",justifyContent:"space-around"}}>
    <div style={{marginLeft:"3em"}}>
    <Navbar.Brand href="#home" style={{color:"#4E9F3D"}}>NetBlix</Navbar.Brand>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
   
    <div style={{marginRight:"3em"}}>
    <Navbar.Collapse id="basic-navbar-nav ">
      <Nav className="me-auto justify-content-end">
        <Nav.Link href="/Home" style={{color:"#4E9F3D"}} Link={""}>Home</Nav.Link>
        <Nav.Link href="/Movies" style={{color:"#4E9F3D"}} Link={""}>Movies</Nav.Link>
        <Nav.Link href="/Bookmarks" style={{color:"#4E9F3D"}} Link={""}>Bookmarks</Nav.Link>
    
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>
    </>
  )
}

export default Appbar