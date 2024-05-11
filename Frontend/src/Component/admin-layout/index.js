import React from 'react';
import DashboardSidenav from '../Sidebar';

const AdminLayout = ({ children, briefData, invitationId, briefDetails, delLength, masherQuotedObj,sidenav,bg }) => {

  const urlPathLocation = window.location.pathname;

  return (
    <div className="flex flex-col lg:flex-row lg:h-full">
     
      { !sidenav && <DashboardSidenav /> }
      <div className={`flex-lg-1 h-screen overflow-y-auto `} style={{background:bg || "#fff"}}>
        <div className={'content'}>{children}</div>
      </div>
    </div>
  );
};
export default AdminLayout;
