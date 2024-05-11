import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import '../../Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LeftContainerImg from '../../Assets/img/Key-pana.png';
import { useFormik } from 'formik';
import 'react-phone-number-input/style.css'
import PasswordInput from '../../Component/PasswordInput/Passwordinput';
import { InnerLoader } from '../../Component/Loader/InnerLoader';
import { InputErrorMessage } from '../../Component/ErrorMessge/InputErrorMessge';
import { ForgotPasswordValidation_page2, SigninValidation } from '../../Validation/ValidationSchema';
import { InputComponent } from '../../Component/InputElements/InputElements';
import { Link,useNavigate } from 'react-router-dom';
import TimerComponent from '../../Component/Timer/ResendCode';
import OtpInput from 'react-otp-input';
export default function ForgotPasswordOTP(props) {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
  const [Resendloader, setResendloader] = useState(false);
  const [isWrongOtp, setIsWrongOtp] = useState(false);
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      otp: '',
    },
    validationSchema:ForgotPasswordValidation_page2,
    onSubmit: async (values) => {
      props.setpage('Forgotpassword-change')
    },
  });
  const [timerKey, setTimerKey] = useState(0); // Key to reset TimerComponent


  const handleTimerFinish = () => {
    console.log('Timer finished');
    props.setTimerOn(false);
  };

  const handleResendClick = () => {
    setResendloader((prev)=>true);
    setTimerKey((prevKey) => prevKey + 1); // Reset the timer by changing key
    props.setTimerOn(true); // Start the timer
    setResendloader(false);
  };
  function hideEmail(email) {
    const Formtedemail =email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2");
    return Formtedemail;
  }
  return (
    <div className='container  d-flex justify-content-center align-items-center min-vh-100'>
      <div className='row border  bg-white shadow login-container'>
        <div className='col-md-6  p-3 d-flex justify-content-center align-items-center flex-column left-container left-container-forgotpassword-otp'>
          <div className='featured-image mb-3'>
            <img src={LeftContainerImg} alt='no logo' className='rounded-4 img-fluid logo-img' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='row align-items-center'>
            <div className='header-text mb-0'>
              <p className='text-xl text-center font-bold p-2 m-1 lg-heading'>Verification</p>
            </div>
            <div className='header-text mb-2'>
              <p className='text-lg text-center  p-2 m-0 lg-heading'>Plese Enter the 4 digit code sent to <p className='font-bold'>{hideEmail(props.email)}</p> </p>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <p className='text-lg text-center font-bold  lg-heading'>Enter the Verficaiton code</p>
                <InputComponent label=""
                  input={
                    <div>
                       <OtpInput
                      inputStyle={{
                        marginLeft: '0',
                        width: '2.375rem',
                        height: '2.375rem',
                        borderRadius: '0.313rem',
                        textAlign: 'center',
                        border: '1px solid rgba(0,0,0,0.3)',
                      }}
                      className='me-2 text-center fs-3  w-50 otpInputt'
                      errorStyle={{ border: 'solid 1px red' }}
                      hasErrored={isWrongOtp}
                      isInputNum
                      value={formik.values.otp}
                      onChange={(otp) => formik.setFieldValue('otp', otp || '')}
                      numInputs={6}
                      separator={<span> </span>}
                    />
                      <InputErrorMessage error={formik.touched.otp && formik.errors.otp} marginTop={10}/>
                      
                    </div>
                    

                  }
                />
                  <div className="d-flex justify-content-center flex-column align-item-center">
                 
                  {
                    props.timerOn ?  <TimerComponent key={timerKey} timerOn={props.timerOn} onFinish={handleTimerFinish} text='resend code in ' /> :
                    <button className="lg-heading link fle" onClick={handleResendClick} type='button'>
                     {!Resendloader ? (
                    <span className='text-center  text-xl'>Resend Code</span>
                  ) : (
                    <div className='text-xs w-full'>
                      <InnerLoader />
                    </div>
                  )}
                    </button>
                  }
                 
                 </div>
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
