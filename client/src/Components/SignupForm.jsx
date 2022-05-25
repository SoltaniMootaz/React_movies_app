import axios from 'axios';
import React,{useState} from 'react'
import {Form, Col, Row, Button}from 'react-bootstrap'
import  '../Styles/Authentication.css';
import Footer from './Footer';
function SignupForm() {
    const [_username,setUsername]=useState("");
    const [_password,setPassword]=useState("");
    const [rePassword,setRePassword]=useState("");
    const [_email,setEmail]=useState("");
    function HandleSignUp(e){
        e.preventDefault();
        console.log("here1");
        console.log(_password);
        console.log(rePassword);
        if(_password===rePassword){
                console.log("here2");
                axios.post("http://localhost:3001/SaveNewUser",{
                    'email':_email,
                    'username':_username,
                    'password':_password
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
    }
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
             <Form.Control  type='text' placeholder='email here' onChange={(e)=>setEmail(e.target.value)} />
            </Col>
         </Form.Group>
         <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
                        Username:
             </Form.Label>
            <Col sm="10">
             <Form.Control  type='text' placeholder='username here' onChange={(e)=>setUsername(e.target.value)}/>
            </Col>
         </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                        Password:
            </Form.Label>
            <Col sm="10">
             <Form.Control type="password" placeholder="Password here" onChange={(e)=>setPassword(e.target.value)} />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                        Re-Password:
            </Form.Label>
            <Col sm="10">
             <Form.Control type="password" placeholder="Repeat Password here" onChange={(e)=>{setRePassword(e.target.value)}}/>
            </Col>
        </Form.Group>
    </Form>
    <div className='Signup-Footer'>
            <Button variant="success" size="lg" onClick={(e)=>HandleSignUp(e)}>
                sign-up
            </Button>
    </div>
    </div>
    <Footer />
</React.Fragment>
  )
}

export default SignupForm