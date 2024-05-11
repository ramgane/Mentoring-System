import * as yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';

const URL = /^(?:(?:https?|http|www)\:\/\/)?(?:[a-zA-Z0-9\-]+\.)+(?:(?:[a-zA-Z]{2,4})|(?:[a-zA-Z0-9\-]+))(?:\:[0-9]+)?(?:[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~])*$/;

export const SignupValidation = yup.object({
   // name: yup.string().required('Name is required.'),
    email: yup.string().required('Email is required.').email('Invalid email format.'),
    phone: yup.string().test('validator-custom-name', function (value) {
      if (value) {
        if (!isValidPhoneNumber(value)) {
          return this.createError({
            message: 'Invalid Phone Number',
          });
        } else {
          return true;
        }
      } else {
        return this.createError({
          message: 'Phone Number can\'t be isEmpty',
        });
      }
    }),
    password: yup.string()
      .required('password is required.')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
  });
  export const SigninValidation = yup.object({
     email: yup.string().required('Email is required.'),
     password: yup.string()
       .required('password is required.')
   });
   export const ForgotPasswordValidation_page1 = yup.object({
     email: yup.string().required('Email is required.').email('Invalid email format.'),
   });
   export const ForgotPasswordValidation_page2 = yup.object({
    otp: yup.string().required('otp is required.') .min(6, 'Please enter a 6-digit OTP.')
    .max(6, 'Please enter a 6-digit OTP.'),
  });
  export const ForgotPasswordValidation_page3 = yup.object({
    password: yup.string()
      .required('Password is required.')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
      confirmpssword: yup.string()
      .required('Confirm password is required.')
      .oneOf([yup.ref('password'), null], 'Passwords must match') // Added oneOf to check if it matches 'password'
      .min(8, 'Confirm Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,}$/,
        'Confirm Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });
  export const FatherProfileValidation = yup.object({
    name: yup.string().required('Name is required.'),
    phone: yup.string().test('validator-custom-name', function (value) {
      if (value) {
        if (!isValidPhoneNumber(value)) {
          return this.createError({
            message: 'Invalid Phone Number',
          });
        } else {
          return true;
        }
      } else {
        return this.createError({
          message: 'Phone Number can\'t be isEmpty',
        });
      }
    }),
    img:yup.mixed().required('Profile img is required.')
  });
   
  