import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '../../Assets/img/AppLogo.png';
import { AppContext } from '../../appContext';
import { useState } from 'react';
import '../../Assets/css/index.css';


export default function Index() {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const { state, logout,fetchMasherProfile } = appContext;
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <div className={`fixed left-0 z-[9999] flex flex-col w-full overflow-hidden sm:w-20 ${isExpanded ? 'h-full' : 'h-16' } md:h-full bg-[#583a00] justify-start items-center`}>
        <div className='hidden md:flex flex-col items-center h-full'>
          <a className="px-0 py-0 mt-6" href="/Dashboard">
            <img src={LogoImage} alt="..." className='!w-[50px] rounded-2 shadow p-2 bg-[#f4eeda]' />
          </a>
          <Link to={'/'} className='no-underline'>
            <div className='mt-8 flex flex-col items-center'>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1667 28H21.8334M16.5 22.6667V28M5.83335 4H27.1667C28.6394 4 29.8334 5.19391 29.8334 6.66667V20C29.8334 21.4728 28.6394 22.6667 27.1667 22.6667H5.83335C4.36059 22.6667 3.16669 21.4728 3.16669 20V6.66667C3.16669 5.19391 4.36059 4 5.83335 4Z" stroke="#EEE9E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
              <span className='text-xs text-white font-semibold'>Dashboard</span>
            </div>
          </Link>
          <Link className='no-underline' to={'/Edit-profile'}>
            <div className='mt-8 flex flex-col items-center'>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.1666 28V25.3333C27.1666 23.9188 26.6047 22.5623 25.6045 21.5621C24.6044 20.5619 23.2478 20 21.8333 20H11.1666C9.75216 20 8.3956 20.5619 7.39541 21.5621C6.39522 22.5623 5.83331 23.9188 5.83331 25.3333V28M21.8333 9.33333C21.8333 12.2789 19.4455 14.6667 16.5 14.6667C13.5545 14.6667 11.1666 12.2789 11.1666 9.33333C11.1666 6.38781 13.5545 4 16.5 4C19.4455 4 21.8333 6.38781 21.8333 9.33333Z" stroke="#EEE9E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
              <span className='text-xs text-white font-semibold'>Profile</span>
            </div>
          </Link>
          {/* <Link className='no-underline' >
            <div className='mt-8 flex flex-col items-center'>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8334 28V6.66667C21.8334 5.95942 21.5524 5.28115 21.0523 4.78105C20.5522 4.28095 19.8739 4 19.1667 4H13.8334C13.1261 4 12.4478 4.28095 11.9477 4.78105C11.4476 5.28115 11.1667 5.95942 11.1667 6.66667V28M5.83335 9.33333H27.1667C28.6394 9.33333 29.8334 10.5272 29.8334 12V25.3333C29.8334 26.8061 28.6394 28 27.1667 28H5.83335C4.36059 28 3.16669 26.8061 3.16669 25.3333V12C3.16669 10.5272 4.36059 9.33333 5.83335 9.33333Z" stroke="#EEE9E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
              <span className='text-xs text-white font-semibold'>Portfolio</span>
            </div>

          </Link> */}
          
          <div className='mt-auto' />
          {/* <a href="https://forms.clickup.com/9003215177/f/8ca4aa9-1502/K3614QV7ME2SAXDFVE" target='_blank' className='no-underline'>
            <div className='mt-8 flex flex-col items-center'>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.62 12.0001C12.9335 11.109 13.5522 10.3576 14.3666 9.87893C15.181 9.40029 16.1385 9.22533 17.0696 9.38503C18.0006 9.54473 18.8451 10.0288 19.4535 10.7515C20.0618 11.4741 20.3948 12.3888 20.3934 13.3334C20.3934 16.0001 16.3934 17.3334 16.3934 17.3334M16.5 22.6667H16.5134M29.8334 16.0001C29.8334 23.3639 23.8638 29.3334 16.5 29.3334C9.13622 29.3334 3.16669 23.3639 3.16669 16.0001C3.16669 8.63628 9.13622 2.66675 16.5 2.66675C23.8638 2.66675 29.8334 8.63628 29.8334 16.0001Z" stroke="#EEE9E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
              <span className='text-xs text-white font-semibold'>Support</span>
            </div>
          </a> */}
          <button className='my-8 flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg> 
            <span className='text-xs text-white font-semibold'>Logout</span>
          </button>
        </div>
        <div className={`md:hidden flex flex-col ${isExpanded ? 'items-start mt-[13px] justify-start ' : 'items-center md:items-start justify-center'} w-full px-4 h-full `}>
          <div className='flex justify-between items-center w-full'>
            <a className="px-0 py-0" href="/">
              <img src={LogoImage} alt="..." className='!w-[50px] rounded-2 shadow p-2 bg-[#f4eeda]' />
            </a>
            <button onClick={() => setExpanded(!isExpanded)}>
              {isExpanded ? 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#FED53F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> : 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H17M3 6H21M3 18H21" stroke="#FED53F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>}
            
            </button></div>
          
          {isExpanded && (<>
            <Link to={'/'} className='no-underline'>
              <div className='w-full text-white flex gap-4 mt-8 ml-4'>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1667 28H21.8334M16.5 22.6667V28M5.83335 4H27.1667C28.6394 4 29.8334 5.19391 29.8334 6.66667V20C29.8334 21.4728 28.6394 22.6667 27.1667 22.6667H5.83335C4.36059 22.6667 3.16669 21.4728 3.16669 20V6.66667C3.16669 5.19391 4.36059 4 5.83335 4Z" stroke="#EEE9E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='flex flex-col gap-2'>
                  <span className='text-lg font-semibold'>Dashboard</span>
                  <span>Your Dashboard</span>
                </div>
              </div>
            </Link>
            <Link className='no-underline' to={'/Edit-profile'}>
              <div className='w-full text-white flex gap-4 mt-8 ml-4'>
                <svg width="33" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#EEE9E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className='flex flex-col gap-2'>
                  <span className='text-lg font-semibold'>Profile</span>
                  <span>Update your Profile details</span>
                </div>
              </div>
            </Link>
            {/* <Link className='no-underline' >
              <div className='w-full text-white flex gap-4 mt-8 ml-4'>
                <svg width="33" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21M4 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7Z" stroke="#EEE9E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className='flex flex-col gap-2'>
                  <span className='text-lg font-semibold'>Portfolio</span>
                  <span>Update your portfolio</span>
                </div>
              </div>
            </Link> */}
            <div className='border-b border-white w-full mt-auto' />
            
            {/* <a href="https://forms.clickup.com/9003215177/f/8ca4aa9-1502/K3614QV7ME2SAXDFVE" target='_blank' className='no-underline'>
              <div className='w-full text-white flex gap-4 mt-8 ml-4'>
                <svg width="33" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#EEE9E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className='flex flex-col gap-2'>
                  <span className='text-lg font-semibold'>Support</span>
                  <span>Get Help</span>
                </div>
              </div>
            </a> */}
            <div className='w-full text-white flex gap-4 my-8 ml-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg> 
              <div className='flex flex-col gap-2'>
                <span className='text-lg font-semibold'>Logout</span>
                <span>Logout your account</span>
              </div>
            </div>
          </>)}

        </div>

        
      </div>
      <div className='w-full sm:w-20 h-16'></div>
    </>
  );
}