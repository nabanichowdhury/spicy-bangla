import React from 'react';
import { Link } from 'react-router-dom';
import "./Registration.css";

const Registration = () => {
    const handleSubmit=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(name,email,password);


    }
    return (
        
        <div className="text-center">
            <h2 className='mt-5 text-secondary'>Register Here</h2>
            <form onSubmit={handleSubmit}>
                
                <input type="text" name="name" placeholder='Your Name' required/>
                <br/>
                
                <input type="email" name="email" placeholder='Your Email'  required/>
                <br/>
                
                <input type="password" name="password" placeholder='Password'required/>
                <br />
                <input type="submit"  value="Register" required/>
            </form>
            <p>Already have an account? <Link className="text-danger pe-auto" to="/login">Login here</Link></p>
        </div>
    );
};

export default Registration;