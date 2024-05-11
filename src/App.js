import { useEffect, useState } from 'react';
import './App.css';
import MainRouter from './MainRouter/MainRouter';
import { AppContext } from './appContext';
import { useNavigate } from 'react-router-dom';

function App() {
  const [loggedInUser, setLoggedInUser] = useState('Welcome');
  const navigate = useNavigate();

  
 
  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}>
      <MainRouter />
    </AppContext.Provider>
  );
}

export default App;
