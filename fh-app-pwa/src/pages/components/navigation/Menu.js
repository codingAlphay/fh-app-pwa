import React, { useState } from 'react';
import Menucontent from './Menucontent';
import { BiMenuAltRight } from 'react-icons/bi';

export default function Menu() {
  // Save the active state of the menu in the useState 
  const [menuVisible, setMenuVisible] = useState(false);

  // Handle trigger to open and close the nav
  async function handleClick() {
    setMenuVisible(!menuVisible)
  }
  
  return (
    <>
      <div onClick={() => handleClick()} className='z-50 dark:bg-green'>
        <BiMenuAltRight size={40} />
      </div>

      <div
        className={`bg-gray z-20 fixed top-0 left-0 w-full h-screen transition duration-300 ease-in-out transform ${menuVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <div className='absolute -translate-y-[55%] top-1/2'>
          <div className='mx-5'>
            <div className='flex items-center'>
              <img src="/icons/menuicons/userimage.svg" alt="User Image Icon" />
              <div className='mt-2 ml-3'>
                <h2 className='-mb-2 text-maintitle-column text-green'>Maximilan Mustermann</h2>
                <h1 className='font-bold tracking-wider text-black text-maintitle'>Griaß di.</h1>
              </div>
            </div>
          </div>
          { menuVisible && 
            <div className=''>
              <Menucontent />
            </div>
          }
        </div>
      </div>
    </>
  )
}