import * as React from 'react';
import {Navbar, Container, Nav, NavDropdown, Col} from 'react-bootstrap'
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
        <Nav.Link href="#home" style={{color:"#4E9F3D"}}>Home</Nav.Link>
        <Nav.Link href="#link" style={{color:"#4E9F3D"}}>Movies</Nav.Link>
        <Nav.Link href="#link" style={{color:"#4E9F3D"}}>Bookmarks</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>
    </>
  )
}

export default Appbar