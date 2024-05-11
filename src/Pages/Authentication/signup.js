import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import '../../Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LeftContainerImg from '../../Assets/img/login_img.png';
import { useFormik } from 'formik';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import PasswordInput from '../../Component/PasswordInput/Passwordinput';
import { InnerLoader } from '../../Component/Loader/InnerLoader';
import { InputErrorMessage } from '../../Component/ErrorMessge/InputErrorMessge';
import { SignupValidation } from '../../Validation/ValidationSchema';
import { InputComponent } from '../../Component/InputElements/InputElements';
import { Link,useNavigate } from 'react-router-dom';
export default function Signup() {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      phonecode: '',
      password: '',
    },
    validationSchema: SignupValidation,
    onSubmit: async (values) => {
      //alert(JSON.stringify(values))
      // navigate("/");
    },
  });
  return (
    <div className='container  d-flex justify-content-center align-items-center min-vh-100'>
      <div className='row border  bg-white shadow login-container'>
        <div className='col-md-6  p-3 d-flex justify-content-center align-items-center flex-column left-container'>
          <div className='featured-image mb-3'>
            <img src={LeftContainerImg} alt='no logo' className='rounded-4 img-fluid logo-img' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='row align-items-center'>
            <div className='header-text mb-2'>
              <p className='text-xl text-center font-bold p-2 m-1 lg-heading'>St.jsoesph college of Arts and science, Cuddalore</p>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <InputComponent label="Name" mandate={false}
                  input={
                    <div>
                      <input type='text' className={Boolean(formik.touched?.name && formik.errors?.name) ? 'form-control border-danger' : 'form-control'} id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />
                      <InputErrorMessage error={formik.touched.name && formik.errors.name} />
                    </div>
                  }
                />
                <InputComponent label="Email address" mandate={true}
                  input={
                    <div>
                      <input type='text' className={Boolean(formik.touched?.email && formik.errors?.email) ? 'form-control border-danger' : 'form-control'} id='email' name='email' value={formik.values.email} onChange={formik.handleChange} />
                      <InputErrorMessage error={formik.touched.email && formik.errors.email} />
                    </div>

                  }
                />
                <InputComponent label="Phone Number" mandate={true}
                  input={

                    <div>
                      {/* <input type='email' className='form-control' /> */}

                      <PhoneInput
                        className={Boolean(formik.touched?.phone && formik.errors?.phone) ? 'form-control border-danger' : 'form-control'}
                        placeholder="Enter phone number"
                        defaultCountry={'AU'}
                        international
                        value={formik.values.phone}
                        rules={{ required: true }}
                        onChange={(e) => {
                          formik.setFieldValue('phone', e || '');
                        }}
                      />
                      <InputErrorMessage error={formik.touched.phone && formik.errors.phone} />
                    </div>
                  }
                />
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
                <button type='submit' className='w-full inline-block mt-3 mb-3 pt-2.5 pb-2.5 shadow rounded-2 bg-[#141414]'>
                  {!loader ? (
                    <span className='text-center  text-xl text-white'>Sign up</span>
                  ) : (
                    <div className='text-xs w-full'>
                      <InnerLoader />
                    </div>
                  )}
                </button>
                <p className='text-lg  lg-heading text-center'>Already have an Account? <Link to={'/signin'} className='lg-heading link'>Login</Link></p>

              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
