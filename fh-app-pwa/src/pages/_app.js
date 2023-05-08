import '@/styles/globals.css';
import Head from 'next/head';
import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { Sidemenu } from './components/sidemenu/Sidemenu';
import Header from './components/Header';


export default function App({ Component, pageProps }) {
  const [value, setValue] = React.useState(0); // Bottom Navigation

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
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
          />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
          />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />

    
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
                    lineHeight: '20px'
                  },
                  '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                    color: theme => theme.palette.primary.main
                  }
                }
              }}
            >
            <BottomNavigationAction label="Add User" icon={<RestoreIcon />}/>
            <BottomNavigationAction label="Remove User" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Add Beer" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Drink Beer" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
      </div>

    </>
  
  );
}
