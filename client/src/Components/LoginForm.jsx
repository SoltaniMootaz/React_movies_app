import React from 'react'
import {Form, Col, Row, Button}from 'react-bootstrap'
import  '../Styles/Authentication.css';
import Footer from './Footer';
function LoginForm() {
  return (
    <React.Fragment>
        <div>&nbsp;</div>
        <div className='Login'>
            <div className='Login-Header'>
                <p>Log-in</p>
            </div>
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
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
        </Form>
        <div className='Login-Footer'>
                <Button variant="success" size="lg">
                    Log-in
                </Button>
        </div>
        </div>
        <Footer />
    </React.Fragment>
  )
}

export default LoginForm