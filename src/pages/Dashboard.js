import React, { useEffect } from 'react';
import "../App.css"
import Navbar from '../components/Navbar';
import MoneyManager from '../components/MoneyManager';
import { useNavigate } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

const auth = getAuth();

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is already authenticated
    // eslint-disable-next-line
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // User is authenticated, redirect to a protected route or dashboard
        navigate('/') // Replace '/dashboard' with the desired URL
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  // eslint-disable-next-line
  }, []);

    return (
        <div className="App">
          <Navbar/>
          <MoneyManager />
       
        </div>
    );
}

export default Dashboard;