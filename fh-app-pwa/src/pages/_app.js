import '@/styles/globals.css';
import '@/styles/calendar.css';
import '@/styles/fonts.css'
import Head from 'next/head';
import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalenderMonth from '@mui/icons-material/CalendarMonth';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { Sidemenu } from './components/sidemenu/Sidemenu';


// Language
import language from './api/Language';

// Toast Notifications
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";


export default function App({ Component, pageProps, props }) {
  const [value, setValue] = React.useState(0); // Bottom Navigation
  const systemLanguage = language(props);

  // Get the labels for the current language
  const labels = require(`../../public/assets/json/json_${systemLanguage}/labels.json`);

  const [view, setView] = useState()
  useEffect(() => {
    // Check if the user is connected to the internet
    if (!navigator.onLine) {
      // If the user is offline, let them know
      toast(`${labels.LBL_CACHEDDATA}`, { hideProgressBar: true, autoClose: 2000, type: 'error' });
    }
  }, []);
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>FH Kufstein App</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
          />
        <link
          href="/icons/favicon/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
          />
        <link rel="apple-touch-icon" href="/icons/favicon/mstile-70x70.png"></link>
        <meta name="theme-color" content="#008E4D" />
      </Head>
      <ToastContainer />
      <Component {...pageProps}/>

    
      {/* Bottom Navigation, only visible on mobile size */}
      <div className='bottomNav'>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                '& .Mui-selected': {
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: theme => theme.typography.caption,
                    transition: 'none',
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    fontFamily: 'Oswald'
                  },
                  '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                    color: "#008E4D" //theme => theme.palette.primary.main
                  }
                }
              }}
            >
            <BottomNavigationAction label="Calendar" icon={<CalenderMonth />} href='/'/>
            <BottomNavigationAction label="Menu" icon={<RestaurantMenuIcon />} href='/mealplan' />
            <BottomNavigationAction label="Messages" icon={<NotificationsActiveIcon />} href='/messages'/>
          </BottomNavigation>
        </Paper>
      </div>

    </>
  
  );
}