import '@/styles/globals.css';
import '@/styles/calendar.css';
import '@/styles/fonts.css'
import 'react-toastify/dist/ReactToastify.css'

import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from "react";

// Language
import language from './api/Language';

// Toast Notifications
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify"

export default function App({ Component, pageProps, props }) {
  const systemLanguage = language(props)
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
        <meta name="theme-color" content="#008E4D" />
      </Head>
      <ToastContainer />
      <Component {...pageProps}/>

    
      {/* Bottom Navigation, only visible on mobile size */}
      {/* <div className='bottomNav'>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
              showLabels
              value={value}
              className='bg-transparent'
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
            <BottomNavigationAction icon={<CalenderMonth />} href='/'/>
            <BottomNavigationAction icon={<RestaurantMenuIcon />} href='/mealplan' />
            <BottomNavigationAction icon={<NotificationsActiveIcon />} href='/messages'/>
          </BottomNavigation>
        </Paper>
      </div> */}
      <div className='fixed bottom-0 z-10 grid items-center w-full h-16 grid-cols-3 px-6 pb-2 bg-white dark:bg-htmlblack'>
        <div className='px-6 py-3 mx-auto'>
          <Link href={'/'}>
            <svg className="" width="23" height="25" viewBox="0 0 23 25" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-black dark:fill-white' d="M23 2.14557V24.0939H0V2.14557H2.875V3.14323C2.875 4.24364 3.73462 5.13853 4.79167 5.13853C5.84871 5.13853 6.70833 4.24364 6.70833 3.14323V2.14557H16.2917V3.14323C16.2917 4.24364 17.1513 5.13853 18.2083 5.13853C19.2654 5.13853 20.125 4.24364 20.125 3.14323V2.14557H23ZM21.0833 8.13149H1.91667V22.0986H21.0833V8.13149ZM19.1667 1.14792C19.1667 0.597217 18.7383 0.150269 18.2083 0.150269C17.6784 0.150269 17.25 0.597217 17.25 1.14792V3.14323C17.25 3.69393 17.6784 4.14088 18.2083 4.14088C18.7383 4.14088 19.1667 3.69393 19.1667 3.14323V1.14792ZM5.75 3.14323C5.75 3.69393 5.32162 4.14088 4.79167 4.14088C4.26171 4.14088 3.83333 3.69393 3.83333 3.14323V1.14792C3.83333 0.597217 4.26171 0.150269 4.79167 0.150269C5.32162 0.150269 5.75 0.597217 5.75 1.14792V3.14323ZM12.1584 16.5936C12.1584 15.7935 11.7578 15.1679 11.0956 14.9026C11.6016 14.6392 11.8967 14.0975 11.8967 13.4031C11.8967 12.0602 10.6394 11.2591 9.42329 11.2591C8.00783 11.2591 6.94025 12.182 6.87508 14.0156H8.45154C8.43812 13.2564 8.71125 12.7037 9.43383 12.7037C9.86412 12.7037 10.328 12.9751 10.328 13.5707C10.328 14.3229 9.54596 14.4307 8.82625 14.3658V15.6428C9.84879 15.6428 10.4592 15.7097 10.4592 16.6255C10.4592 17.3478 9.93408 17.671 9.41371 17.671C8.62596 17.671 8.303 17.0585 8.27521 16.2225H6.70929C6.67862 18.11 7.77688 19.1057 9.43288 19.1057C10.9116 19.1057 12.1584 18.1649 12.1584 16.5936ZM16.2917 19.1057V11.4058H14.9577C14.7919 12.5571 14.0041 12.8933 12.8771 12.8614V14.2042H14.652V19.1057H16.2917Z" fill="#1E1E1E"/>
            </svg>
          </Link>
        </div>
        <div className='px-6 py-3 mx-auto'>
          <Link href={'/mealplan'}>
            <svg width="23" height="25" viewBox="0 0 23 25" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-black dark:fill-white' fillRule="evenodd" clipRule="evenodd" d="M10.936 12.5111L12.7266 10.228C13.134 9.68544 12.9414 9.2426 12.6739 8.06865C12.4774 7.19991 12.6317 6.21947 13.2222 5.57514C14.9103 3.73593 18.3441 0.150269 18.3441 0.150269L18.7965 0.519308L15.2564 5.23503L16.0137 5.85043L19.7235 1.27235L20.1827 1.64438L16.7719 6.46682L17.5292 7.08322L21.2534 2.51511L21.6781 2.86121L18.2865 7.69862L19.0448 8.31401L22.5849 3.59829L23 3.93541C23 3.93541 20.5556 8.28409 19.2634 10.4534C18.8042 11.2224 17.8974 11.6114 17.026 11.6174C15.8651 11.6244 15.4107 11.5286 14.9966 12.0802L12.81 14.8679C15.1538 17.8223 17.1803 20.3846 18.1523 21.6792C18.8914 22.6637 18.2146 24.0939 17.0039 24.0939C16.6013 24.0939 16.1862 23.9234 15.8852 23.5224L7.87131 13.4766C7.87131 13.4766 6.98365 14.1937 6.00779 14.9906C2.9671 9.82009 0.000216671 3.35991 0.000216671 1.07187C0.000216671 0.944202 -0.0323758 0.150269 0.701915 0.150269C0.936773 0.150269 1.17451 0.265967 1.34801 0.493375C1.83594 1.13371 6.53885 6.98946 10.936 12.5111ZM8.10617 16.1187L9.97832 18.4776L6.03367 23.5194C5.75088 23.8964 5.32814 24.0939 4.9006 24.0939C3.75219 24.0939 2.99202 22.6956 3.76082 21.6722L8.10617 16.1187Z" fill="#1E1E1E"/>
            </svg>
          </Link>
        </div>
        <div className='px-6 py-3 mx-auto'>
          <svg width="20" height="25" viewBox="0 0 20 25" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-black dark:fill-white' d="M12.5896 4.08601C11.9725 3.71289 11.591 3.01852 11.593 2.27028V2.26729C11.593 1.09804 10.6931 0.150269 9.58333 0.150269C8.47358 0.150269 7.57371 1.09804 7.57371 2.26729V2.27028C7.57562 3.01952 7.19421 3.71289 6.57704 4.08601C2.10354 6.79164 4.67379 15.7735 0 17.3608V19.1057H19.1667V17.3608C14.4929 15.7735 17.0631 6.79164 12.5896 4.08601ZM9.58333 1.14792C10.1123 1.14792 10.5417 1.59587 10.5417 2.14557C10.5417 2.69628 10.1123 3.14323 9.58333 3.14323C9.05433 3.14323 8.625 2.69628 8.625 2.14557C8.625 1.59587 9.05433 1.14792 9.58333 1.14792ZM12.4583 21.101C12.4583 22.6952 11.1243 24.0939 9.61112 24.0939C8.09792 24.0939 6.70833 22.6952 6.70833 21.101H12.4583ZM17.2644 8.60936C17.0286 7.1089 16.3702 4.93601 14.5647 3.10731L15.9026 1.67668C17.6276 3.42456 18.7527 5.71118 19.1561 8.28712L17.2644 8.60936ZM0 8.28812C0.403458 5.71118 1.52854 3.42556 3.25354 1.67668L4.59137 3.10731C2.78587 4.93601 2.12654 7.1089 1.89175 8.60936L0 8.28812Z" fill="#1E1E1E"/>
          </svg>
        </div>
      </div>
    </>
  
  );
}