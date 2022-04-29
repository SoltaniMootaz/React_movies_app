import React from 'react'
import {Form, Col, Row, Button}from 'react-bootstrap'
import  '../Styles/Authentication.css';
import Footer from './Footer';
function SignupForm() {
  return (
    <React.Fragment>
    <div>&nbsp;</div>
    <div className='Signup'>
        <div className='Signup-Header'>
            <p>Sign-up</p>
        </div>
    <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
                        E-mail:
             </Form.Label>
            <Col sm="10">
             <Form.Control  type='text' placeholder='email here' />
            </Col>
         </Form.Group>
         <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
                        Username:
             </Form.Label>
            <Col sm="10">
             <Form.Control  type='text' placeholder='username here' />
            </Col>
         </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                        Password:
            </Form.Label>
            <Col sm="10">
             <Form.Control type="password" placeholder="Password here" />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                        Re-Password:
            </Form.Label>
            <Col sm="10">
             <Form.Control type="password" placeholder="Repeat Password here" />
            </Col>
        </Form.Group>
    </Form>
    <div className='Signup-Footer'>
            <Button variant="success" size="lg">
                sign-up
            </Button>
    </div>
    </div>
    <Footer />
</React.Fragment>
  )
}

export default SignupForm