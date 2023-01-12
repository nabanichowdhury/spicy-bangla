import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import facebookLogo from "../../../images/logo/fnb.png";
import googleLogo from "../../../images/logo/googleLogo.png";
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFb, loadingfb, errorFb] = useSignInWithFacebook(auth);
    const navigate=useNavigate();
    let errorElement;
    if (error || errorFb) {
        
        errorElement=
            <div>
            <p className='text-danger'>Error: {error?.message}{errorFb?.message}</p>
          </div>
        
      };
      if(user || userFb){
        navigate("/")
      }

      if(loading || loadingfb){
        return <Loading></Loading>;
      }
    return (
        <div>
            
            <div className='d-flex align-items-center w-50 mx-auto justify-content-center'>
                <div style={{height:"1px"}} className='bg-secondary w-50 mr-2'></div>
                <p className='mt-2 font-weight-bold'>or</p>
                <div style={{height:"1px"}} className='bg-secondary w-50 ml-2'></div>
                
            </div>
            {errorElement}
         <div className='d-flex  justify-content-center align-items-center flex-column'>
         <button className='btn btn-secondary w-50 mb-3'onClick={() => signInWithGoogle()} >
                <img src={googleLogo} style={{width:"30px"}} className="mr-3"/>
                Sign In with Google</button>
                
         <button className='btn btn-secondary w-50' onClick={() => signInWithFacebook()}>
                <img src={facebookLogo} style={{width:"30px"}} className="mr-3"/>
                Sign In with Facebook</button>
         </div>
        </div>
    );
};

export default SocialLogin;