import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {GiKnifeFork, GiRead} from 'react-icons/gi'
import {TbBellRingingFilled} from 'react-icons/tb'


const Sidemenu = () => {
    const listClass = 'ml-10 text-sm uppercase m-12 flex';

  return (
           
    <div className='flex justify-between items-top w-full h-full px-2'>
    <ul className='ml-8'>
        <li className={listClass}><BsCalendarDate size={25} className='mr-8'/>Schedule</li>
        <li className={listClass}><GiKnifeFork size={25} className='mr-8'/>Meal</li>
        <li className={listClass}><TbBellRingingFilled size={25} className='mr-8'/>Messages</li>
        <li className={listClass}><GiRead size={25} className='mr-8'/>Exams</li>
        <li className={listClass}><GiRead size={25} className='mr-8'/>Beginner's Guide</li>
        <li className={listClass}><GiRead size={25} className='mr-8'/>Exams</li>
        <li className={listClass}><GiRead size={25} className='mr-8'/>Exams</li>
        <li className={listClass}><GiRead size={25} className='mr-8'/>Exams</li>
        <li className={listClass}><GiRead size={25} className='mr-8'/>Exams</li>
    </ul>
    </div>
  )
}

export default Sidemenu;
