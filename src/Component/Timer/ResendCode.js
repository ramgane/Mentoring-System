import React, { useState, useEffect } from 'react';
import './ResendCode.css';

const TimerComponent = ({ timerOn, onFinish, text }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let interval;

    if (timerOn && seconds >= 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(interval);
            onFinish(); // Call the callback function when timer finishes
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval); // Clear interval if timer is not on
    }

    return () => clearInterval(interval);
  }, [timerOn, seconds, onFinish]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

  return (
    <span className='text-xl text-center font-bold lg-heading resend-timer'>
      {text} {formattedSeconds}
    </span>
  );
};

export default TimerComponent;



