import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from "../../../firebase.init";
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Registration.css";

const Registration = () => {
    const [agree,setAgree]=useState(false)
    const navigate=useNavigate()
    const handleSubmit=async(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        await  createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName:name })
        console.log("profile updated")
        
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      
    const [updateProfile, updating, errorupdate] = useUpdateProfile(auth);
      if(user && !error){
         console.log("user",user);
         navigate("/")
      }
      let errorElement;
    if (error || errorupdate ) {
        
        errorElement=
            <div>
            <p className='text-danger'>Error: {error?.message}{errorupdate?.message}</p>
          </div>
        
      };
      if(loading || updating ){
        return <Loading></Loading>
      }
      
    return (
        
        <div className="text-center register">
            <h2 className='mt-5 text-secondary'>Register Here</h2>
            <form onSubmit={handleSubmit}>
                
                <input type="text" name="name" placeholder='Your Name' required/>
                <br/>
                
                <input type="email" name="email" placeholder='Your Email'  required/>
                <br/>
                
                <input type="password" name="password" placeholder='Password'required/>
                <br />
                <input onClick={()=>{
                    setAgree(!agree);
                }} type="checkbox" name="terms" id="terms" />
                <label className={agree?'text-primary':'text-danger'} htmlFor="terms">Accept all the terms and conditions</label>
                <br />
                <input disabled={!agree} className='btn btn-secondary m-2 ' type="submit"  value="Register" required/>
            </form>
            <p>Already have an account? <Link className="text-primary pe-auto" to="/login">Login here</Link></p>
            {errorElement}
            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Registration;