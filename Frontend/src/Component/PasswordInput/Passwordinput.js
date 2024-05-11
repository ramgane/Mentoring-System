import React, { useState } from 'react';
import { EyeFill,EyeSlashFill } from 'react-bootstrap-icons';
import './PasswordInput.css'
const PasswordInput = ({ name, className, id, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e); // Pass the event back to the parent component
    }
    // You might want to update the state here if needed
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div class="input-group mb-2 mr-sm-2">
   
    <input
      type={showPassword ? 'text' : 'password'}
      className={className}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={handleInputChange} // Changed to handleInputChange
    />
     <div class="input-group-prepend eye-container text-center" onClick={()=>{togglePasswordVisibility()}}>
       {showPassword ? <EyeSlashFill size={19} />:<EyeFill  size={19}/>}
      
    </div>
  </div>
   
  );
};

export default PasswordInput;
