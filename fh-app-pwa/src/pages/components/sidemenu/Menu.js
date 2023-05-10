import React, { useState } from 'react';
import styles from '@/styles/Header.module.css';
import Sidemenu from './Sidemenu';

//Icons:
import {RxAvatar} from 'react-icons/rx'
import { BiMenuAltRight } from 'react-icons/bi';


function Menu() {
    const[menuVisible, setMenuVisible] = useState(false);

    function handleClick() {
        setMenuVisible(!menuVisible);
    }
    return (
        <>
        <BiMenuAltRight size={50} onClick={handleClick} />

        <div
          className={`bg-gray fixed top-0 left-0 w-full h-screen transition duration-500 ease-in-out transform ${
            menuVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className='flex flex-col mt-12 mb-12 h-auto pb-8'>
            <div className={`flex m-12 ${styles.headerboxNav}`}>
              <img src="/icons/menuicons/userimage.svg" alt="User Image Icon" />
              <div className={`pr-40 ${styles.headerNav}`}>
                <h2>Alpay Aksu</h2>
                <h1>Bonjour</h1>
              </div>
                          
              <BiMenuAltRight className={styles.headerbox_icon} size={50} onClick={handleClick} />
            </div>
          </div>
          <div className='ml-12'>
            <Sidemenu />
          </div>
        </div>
      </>
    );
  }

export default Menu;