import '@/styles/globals.css';
import '@/styles/calendar.css';
import '@/styles/fonts.css'
import 'react-toastify/dist/ReactToastify.css'

import Head from 'next/head';
import * as React from 'react';
import { useEffect, useState } from "react";

// Language
import language from './api/Language';

// Toast Notifications
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify"

import BottomNav from '../components/navigation/BottomNav';

export default function App({ Component, pageProps, props }) {
  const systemLanguage = language(props)
   // Get the labels for the current language
  const labels = require(`../../public/assets/json/json_${systemLanguage}/labels.json`)
  // Save first bootuo in state
  const [firstBootDone, setFirstBootDone] = useState(false)

  useEffect(() => {
    // Check if the user is connected to the internet
    if (!navigator.onLine) {
      // If the user is offline, let them know
      toast(`${labels.LBL_CACHEDDATA}`, { hideProgressBar: true, autoClose: 2000, type: 'error' });
    }
    async function firstLaunch() {
      if(!firstBootDone) {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(1500)
        document.getElementById('first-loader').classList.remove("translate-y-0")
        document.getElementById('first-loader').classList.add("-translate-y-full")
        await delay(1500)
        setFirstBootDone(true)
      }
    }
    firstLaunch()
  }, []);
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover,width=device-width" 
          />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
      </Head>
      {!firstBootDone && 
        <div className='z-[70] flex absolute justify-center w-full h-screen duration-1000 translate-y-0 bg-white dark:bg-htmlblack' id='first-loader'>
          <img src="./logo.svg" className="w-1/3 animate-scale-up" alt="" />
        </div>
      } 
      <ToastContainer />
      <Component {...pageProps}/>
      <BottomNav/>
    </>
  
  );
}