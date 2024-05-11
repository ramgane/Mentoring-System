import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useFormik } from 'formik';
import 'react-phone-number-input/style.css'
import { ForgotPasswordValidation_page1} from '../../Validation/ValidationSchema';
import { InputComponent } from '../../Component/InputElements/InputElements';
import { Link,useNavigate } from 'react-router-dom';
import ForgotPasswordOTP from './ForgotPassword-otp';
import ForgotPasswordChange from './ForgotPassword-change';
import ForgotPassword from './ForgotPassword';
export default function ForgotpasswordMain() {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
  const[page,setpage]=useState('Forgotpassword');
  const [timerOn, setTimerOn] = useState(false);
  const navigate=useNavigate();
  const formik1 = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ForgotPasswordValidation_page1,
    onSubmit: async (values) => {
      setTimerOn(true);
      setpage('Forgotpassword-otp')
    },
  });
 
  return (
    <>
     {page=== 'Forgotpassword' ? (
         <ForgotPassword formik={formik1} />
      ) : page=== 'Forgotpassword-otp' ? (
        <ForgotPasswordOTP  setpage={setpage} page={page} email={formik1.values.email || 'guru4567varan@gmail.com'} timerOn={timerOn} setTimerOn={setTimerOn} />
      ) : page === 'Forgotpassword-change' ? (
         <ForgotPasswordChange  />
      ) : (
        <div></div>
      )}
    </>
      
  );
}
