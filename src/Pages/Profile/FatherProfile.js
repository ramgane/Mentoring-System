import React, { createContext, useContext, useState, useCallback } from 'react';
import { AppContext } from '../../appContext';
import '../../Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useFormik } from 'formik';
import 'react-phone-number-input/style.css'
import { InnerLoader } from '../../Component/Loader/InnerLoader';
import { InputErrorMessage } from '../../Component/ErrorMessge/InputErrorMessge';
import { FatherProfileValidation,} from '../../Validation/ValidationSchema';
import {ProfileInputComponent } from '../../Component/InputElements/InputElements';
import {useNavigate } from 'react-router-dom';
import {useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { People, XCircleFill } from 'react-bootstrap-icons';
import PhoneInput from 'react-phone-number-input';
import { FileUploadComponent } from '../../Component/Loader/FileProgressbar';

export default function FatherProfile() {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      img: '',
    },
    validationSchema: FatherProfileValidation,
    onSubmit: async (values) => {
      alert(values)
    },
  });
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      try {
        // Create a FileReader to read the contents of the file
        const reader = new FileReader();

        // Define a callback for when the file is loaded
        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          // Check the image dimensions
          img.onload = () => {
            const width = img.width;
            const height = img.height;
            // Check if the dimensions meet your criteria (max. 800x400px)
            if (width <= 800 && height <= 400) {
              // Convert the file to base64
              const base64String = e.target.result.split(',')[1]; // Extract base64 string
              // Save the base64 string in formik.values.img
              formik.setFieldValue('img', "data:image/png;base64," + base64String);
            } else {
              // Display an error message if dimensions exceed the limit
              toast.error('File dimensions must be at most 800x400 pixels', { id: '002' });
            }
          };
        };
        // Read the contents of the file as a data URL
        reader.readAsDataURL(file);
      } catch (error) {
        // Handle errors, e.g., if the FileReader fails
        toast.error('Error processing file dimensions', { id: '004' });
      }
    }
  }, [formik]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.svg'],
    }, onDrop
  });
  return (
    <div className='d-flex justify-content-center  min-vh-100 p-2'>
      <form className='form-component p-3' onSubmit={formik.handleSubmit}>
        <div className='flex gap-4 input-group mb-2 w-full'>
          {
            (formik.values.img) ?
              <>
                <div className='w-full  p-1 flex items-center justify-center mt-0'>
                  <div className='relative inline-block'>
                    <XCircleFill
                      onClick={() => { formik.setFieldValue('img', ''); }}
                      size={30}
                      color='#a35f00'
                      className='absolute top-0 right-0 -mt-5 -mr-3'
                    />

                    <img src={formik.values.img} className='img-fluid rounded-lg' />
                  </div>
                </div>
              </>


              : <div className={Boolean(formik.touched?.img && formik.errors?.img) ? 'w-full rounded-lg  p-4 flex items-center justify-center mt-2 mb-3 profile-img border-danger' : 'w-full rounded-lg  p-4 flex items-center justify-center mt-2 mb-3 profile-img'}  {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? <div className='flex flex-col items-center text-center'>
                  <div className='flex justify-center items-center rounded-full bg-[#F2F4F7]'><People /></div>
                  <p className='font-semibold text-[#00A46F] mt-6'>Drop here</p>
                  <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div> : <div className='flex flex-col items-center text-center'>
                  <div className='flex justify-center items-center rounded-full p-3 profile-photo'><People size={40} /></div>
                  <p className='font-semibold text-[#00A46F] mt-6'>Click to upload <span className='text-[#667085] font-normal hidden md:block'>order drag and drop</span></p>
                  <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>}
              </div>
          }
           
           {/* <FileUploadComponent name='name' filesize='12' percentage='10' /> */}
           <InputErrorMessage error={formik.touched.img && formik.errors.img} />
        </div>
        
        <ProfileInputComponent label="Name" mandate={true}
          input={
            <div>
              <input type='text' className={Boolean(formik.touched?.name && formik.errors?.name) ? 'form-control border-danger' : 'form-control'} id='name' name='name' placeholder='Enter your  Full Name' value={formik.values.name} onChange={formik.handleChange} />
              <InputErrorMessage error={formik.touched.name && formik.errors.name} />
            </div>

          }
        />
        <ProfileInputComponent label="Phone Number" mandate={true}
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
         <button type='submit' className='w-full inline-block mt-3 mb-3 pt-2.5 pb-2.5 shadow rounded-2 bg-[#141414] custom-font'>
                  {!loader ? (
                    <span className='text-center  text-xl text-white'>submit</span>
                  ) : (
                    <div className='text-xs w-full'>
                      <InnerLoader />
                    </div>
                  )}
                </button>

      </form>
    </div>
  );
}
