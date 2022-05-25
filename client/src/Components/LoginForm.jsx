import React,{useEffect, useState} from 'react'
import {Form, Col, Row, Button}from 'react-bootstrap'
import  '../Styles/Authentication.css';
import Footer from './Footer';
import axios from 'axios'
function LoginForm() {
    const [_username,setUsername]=useState("");
    const [_password,setPassword]=useState("");
    useEffect(()=>{
        if(localStorage.getItem('id'))
            window.location.href = '/Home'
    },[])
     function Login(e){
        e.preventDefault();
        console.log(_username);
        console.log(_password);
   
        axios.post("http://localhost:3001/CheckUser",{
           
            'username':_username,
            'password':_password
            }).then((res)=>{
            localStorage.setItem("id",res._id);
            window.location.href = "Home";
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
        <div>&nbsp;</div>
        <div className='Login'>
            <div className='Login-Header'>
                <p>Log-in</p>
            </div>
        <Form>
            <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Username:
                 </Form.Label>
                <Col sm="10">
                 <Form.Control  type='text' placeholder='username here' onChange={e=>setUsername(e.target.value)} />
                </Col>
             </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                            Password:
                </Form.Label>
                <Col sm="10">
                 <Form.Control type="password" placeholder="Password here" onChange={e=>setPassword(e.target.value)}  />
                </Col>
            </Form.Group>
        </Form>
        <div className='Login-Footer'>
                <Button variant="success" size="lg"onClick={(e)=>Login(e)}>
                    Log-in
                </Button>
        </div>
        </div>
        <Footer />
    </React.Fragment>
  )
}

export default LoginForm