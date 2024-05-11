import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import '../../Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LeftContainerImg from '../../Assets/img/Mail.png';
import 'react-phone-number-input/style.css'
import AdminLayout from '../../Component/admin-layout';

export default function Index() {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
 
  return (
   <AdminLayout>
  
   </AdminLayout>
      
  );
}
