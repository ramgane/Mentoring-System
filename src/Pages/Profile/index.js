
import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import '../../Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Father from '../../Assets/img/Profile-img/Fathericon.png';
import Mother from '../../Assets/img/Profile-img/mothericon.png';
import Student from '../../Assets/img/Profile-img/graduated_1321090.png'
import 'react-phone-number-input/style.css'
import AdminLayout from '../../Component/admin-layout';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { People, PersonCircle,PersonSquare } from 'react-bootstrap-icons';
import FatherProfile from './FatherProfile';
import MotherProfile from './MotherProfile';
import StudentProfile from './StudentProfile';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Index() {
  const { loggedInUser } = useContext(AppContext);
  const [loader, setloader] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AdminLayout bg={'linear-gradient(45deg, #fff6cd, #fef7e1)'}>
      <Box >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'linear-gradient(216deg, #f8debe, #fffef4)', padding: 1, boxShadow: '1px 1px 2px 1px #f3e9d5' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable"
            scrollButtons="auto"
            tabItemContainerStyle={{
              background: 'grey',
              position: "fixed", bottom:"0"
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#a35f00",
              }
            }}
            aria-label="basic tabs example">
            <Tab icon={<img src={Father} className='img-fluid'/>} label="Father" {...a11yProps(0)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 10 }} />
            <Tab icon={<img src={Mother} className='img-fluid'/>} label="Mother" {...a11yProps(1)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 10 }} />
            <Tab icon={<img src={Student} className='img-fluid'/>} label="Student" {...a11yProps(2)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 10 }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
         <FatherProfile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
         <MotherProfile />
        </CustomTabPanel> 
        <CustomTabPanel value={value} index={2}>
         <StudentProfile />
        </CustomTabPanel>

      </Box>
    </AdminLayout>

  );
}