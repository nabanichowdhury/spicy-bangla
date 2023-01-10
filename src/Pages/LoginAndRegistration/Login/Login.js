import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate()

    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=emailRef.current.value;
        console.log(email,password);

    }
    const navigateRegister=event=>{
        navigate("/registration")

    }
  return (
    <div className="container mx-auto w-50">
      <h1 className="text-secondary text-center mt-3">Please Login </h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onSubmit={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p>New to Spicy Bangla? <Link className="text-danger pe-auto" to="/registration">Please Register</Link></p>
    </div>
  );
};

export default Login;
