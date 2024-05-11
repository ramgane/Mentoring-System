import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import '../../Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LeftContainerImg from '../../Assets/img/Reset password-pana.png';
import { useFormik } from 'formik';
import 'react-phone-number-input/style.css'
import PasswordInput from '../../Component/PasswordInput/Passwordinput';
import { InnerLoader } from '../../Component/Loader/InnerLoader';
import { InputErrorMessage } from '../../Component/ErrorMessge/InputErrorMessge';
import { ForgotPasswordValidation_page3} from '../../Validation/ValidationSchema';
import { InputComponent } from '../../Component/InputElements/InputElements';
import { Link,useNavigate } from 'react-router-dom';
import TimerComponent from '../../Component/Timer/ResendCode';
import OtpInput from 'react-otp-input';
export default function ForgotPasswordChange(props) {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
  const [Resendloader, setResendloader] = useState(false);
  const [isWrongOtp, setIsWrongOtp] = useState(false);
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
      confirmpssword:'',
    },
   validationSchema:ForgotPasswordValidation_page3,
    onSubmit: async (values) => {
        navigate('/signin');
    },
  });
  
  return (
    <div className='container  d-flex justify-content-center align-items-center min-vh-100'>
      <div className='row border  bg-white shadow login-container'>
        <div className='col-md-6  p-3 d-flex justify-content-center align-items-center flex-column left-container left-container-forgotpassword-change'>
          <div className='featured-image mb-3'>
            <img src={LeftContainerImg} alt='no logo' className='rounded-4 img-fluid logo-img' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='row align-items-center'>
            <div className='header-text mb-0'>
              <p className='text-xl text-center font-bold p-2 m-1 lg-heading'> Reset Password</p>
            </div>
            <div className='header-text mb-2'>
                 <p className='text-lg text-center  p-2 m-1 lg-heading'>Set the New Password for your account so you can login and access all the features.</p>
               </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
              <InputComponent label="Password" mandate={true}
                  input={
                    <div>
                      <PasswordInput
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Enter your password"
                        className={Boolean(formik.touched?.password && formik.errors?.password) ? 'form-control border-danger' : 'form-control'}
                        id="password"
                        name="password"
                      />
                      <InputErrorMessage error={formik.touched.password && formik.errors.password} />
                    </div>

                  }
                />
                 <InputComponent label="Confirm Password" mandate={true}
                  input={
                    <div>
                      <PasswordInput
                        value={formik.values.confirmpssword}
                        onChange={formik.handleChange}
                        placeholder="Enter your password"
                        className={Boolean(formik.touched?.confirmpssword && formik.errors?.confirmpssword) ? 'form-control border-danger' : 'form-control'}
                        id="confirmpssword"
                        name="confirmpssword"
                      />
                      <InputErrorMessage error={formik.touched.confirmpssword && formik.errors.confirmpssword} />
                    </div>

                  }
                />
                
                <button type='submit' className='w-full inline-block mt-3 mb-3 pt-2.5 pb-2.5 shadow rounded-2 bg-[#141414] custom-font'>
                  {!loader ? (
                    <span className='text-center  text-xl text-white'>Reset Password</span>
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
