import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import '../../Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Father from '../../Assets/img/Profile-img/Fathericon.png';
import { useFormik } from 'formik';
import 'react-phone-number-input/style.css'
import PasswordInput from '../../Component/PasswordInput/Passwordinput';
import { InnerLoader } from '../../Component/Loader/InnerLoader';
import { InputErrorMessage } from '../../Component/ErrorMessge/InputErrorMessge';
import { SigninValidation } from '../../Validation/ValidationSchema';
import { InputComponent } from '../../Component/InputElements/InputElements';
import { Link,useNavigate } from 'react-router-dom';

export default function StudentProfile() {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigninValidation,
    onSubmit: async (values) => {
      alert(values)
    },
  });
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-97 profile-continer'>
     
    </div>
  );
}
