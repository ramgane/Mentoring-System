import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/404';
import Signup from '../Pages/Authentication/signup';
import Signin from '../Pages/Authentication/sign-in';
import ForgotpasswordMain from '../Pages/ForgotPassword';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile'
export default function MainRouter() {
  return (
    <>
      <Routes>
        <Route />
        {/* Mashers routessssssssssssssssssssssss  */}
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/Forgot-password' element={<ForgotpasswordMain/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Edit-profile' element={<Profile/>}/>
      
        <Route
          path='*'
          element={
          
              <NotFound />
 
          }
        />

      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
}
