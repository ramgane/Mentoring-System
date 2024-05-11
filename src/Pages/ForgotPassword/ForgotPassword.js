import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import '../../Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LeftContainerImg from '../../Assets/img/Mail.png';
import { useFormik } from 'formik';
import 'react-phone-number-input/style.css'
import { InnerLoader } from '../../Component/Loader/InnerLoader';
import { InputErrorMessage } from '../../Component/ErrorMessge/InputErrorMessge';
import { ForgotPasswordValidation_page1} from '../../Validation/ValidationSchema';
import { InputComponent } from '../../Component/InputElements/InputElements';
import { Link,useNavigate } from 'react-router-dom';
import ForgotPasswordOTP from './ForgotPassword-otp';
import ForgotPasswordChange from './ForgotPassword-change';
export default function ForgotPassword({formik}) {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
  const navigate=useNavigate();
  
 
  return (
    
           <div className='container  d-flex justify-content-center align-items-center min-vh-100'>
           <div className='row border  bg-white shadow login-container'>
           <div className='col-md-6  p-3 d-flex justify-content-center align-items-center flex-column left-container left-container-forgotpassword'>
             <div className='featured-image mb-3'>
               <img src={LeftContainerImg} alt='no logo' className='rounded-4 img-fluid logo-img' />
             </div>
           </div>
           <div className='col-md-6'>
             <div className='row align-items-center'>
               <div className='header-text mb-0'>
                 <p className='text-xl text-center font-bold p-2 m-1 lg-heading'>Forgot Password</p>
               </div>
               <div className='header-text mb-2'>
                 <p className='text-lg text-center  p-2 m-1 lg-heading'>Plese Enter the Email to Receive a Verification Code</p>
               </div>
               <div>
                 <form onSubmit={formik.handleSubmit}>
                   <InputComponent label="Email address" mandate={true}
                     input={
                       <div>
                         <input type='text' className={Boolean(formik.touched?.email && formik.errors?.email) ? 'form-control border-danger' : 'form-control'} id='email' name='email' placeholder='Enter your Email ID' value={formik.values.email} onChange={formik.handleChange} />
                         <InputErrorMessage error={formik.touched.email && formik.errors.email} />
                       </div>
   
                     }
                   />
                   <button type='submit' className='w-full inline-block mt-3 mb-3 pt-2.5 pb-2.5 shadow rounded-2 bg-[#141414] custom-font'>
                     {!loader ? (
                       <span className='text-center  text-xl text-white'>Send</span>
                     ) : (
                       <div className='text-xs w-full'>
                         <InnerLoader />
                       </div>
                     )}
                   </button>
                 </form>
               </div>
   
             </div>
           </div>
   
         </div>
         </div>
    
      
  );
}
