import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";



const Login = () => {
  
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const location=useLocation();
    const navigate=useNavigate()
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const from=location.state?.from?.pathname || "/";
    if(user){
      console.log("user found")
      navigate(from,{replace:true});
    }
    let errorElement;
    if (error ) {
        
        errorElement=
            <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
        
      };
    

    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password);
        signInWithEmailAndPassword(email,password);

    }
    const [sendPasswordResetEmail, sending, errorreset] = useSendPasswordResetEmail(auth);
    const HandleResetPassword=async()=>{
      
        await sendPasswordResetEmail(emailRef.current.value);
        if (emailRef.current.value) {
          toast('Sent email');
        }else{
          toast('Please enter your email address')
        }
      }
      if(loading || sending){
        return <Loading></Loading>
      }

    


    
      
  return (
    <div className="container mx-auto w-50">
      <h1 className="text-secondary text-center mt-3">Please Login </h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
      </Form.Group>
      
      <Button onClick={handleSubmit} variant="secondary" type="submit" className="mx-auto d-block w-50">
       Login
      </Button>
    </Form>
    <div className="d-flex mt-3">
    <p>New to Spicy Bangla? <Link className="text-secondary pe-auto" to="/registration">Please Register</Link></p>
    <p className="ml-4">Forgot Password? <Link className="text-secondary pe-auto" onClick={HandleResetPassword}>Reset Password</Link></p>
    </div>
    {errorElement}
    <SocialLogin></SocialLogin>
    <ToastContainer />
    
    </div>
  );
};

export default Login;
