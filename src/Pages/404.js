import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as animationData from '../Assets/lottie-file-json/space-404.json'

const NotFound = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className='container  d-flex justify-content-center align-items-center min-vh-100'>
    <Lottie options={defaultOptions}
              height={400}
              width={400}
        />
    </div>
  );
};

export default NotFound;
