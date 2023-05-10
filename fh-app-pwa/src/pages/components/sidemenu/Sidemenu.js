import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {GiKnifeFork, GiRead} from 'react-icons/gi'
import {TbBellRingingFilled} from 'react-icons/tb'



const Sidemenu = () => {
    const listClass = 'ml-10 text-sm uppercase m-12 flex';

  return (
           
    <div className='flex justify-between items-top w-full h-full px-2'>
    <ul className='ml-8'>
        <li className={listClass}><img src="/icons/menuicons/calendar.svg" alt="Menu Icon" className='mr-8'/>Schedule</li>
        <li className={listClass}><img src="/icons/menuicons/forkKnife.svg" alt="Menu Icon" className='mr-8'/>Meal</li>
        <li className={listClass}><img src="/icons/menuicons/bell.svg" alt="Message Icon" className='mr-8'/> Messages</li>
        <li className={listClass}><img src="/icons/menuicons/exams.svg" alt="Exams Icon" className='mr-8'/>Exams</li>
        <li className={listClass}><img src="/icons/menuicons/guide.svg" alt="Beginner's Guide Icon" className='mr-8'/>Beginner's Guide</li>
        <li className={listClass}><img src="/icons/menuicons/association.svg" alt="Student's Association Icon" className='mr-8'/>Student's Association</li>
        <li className={listClass}><img src="/icons/menuicons/grades.svg" alt="Grades Icon" className='mr-8'/>Grades</li>
        <li className={listClass}><img src="/icons/menuicons/evaluation.svg" alt="Evaluation Icon" className='mr-8'/>Evaluation</li>
        <li className={listClass}><img src="/icons/menuicons/settings.svg" alt="Settings Icon" className='mr-8'/>Settings</li>
    </ul>
    </div>
  )
}

export default Sidemenu;
