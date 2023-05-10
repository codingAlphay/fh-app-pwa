import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {GiKnifeFork, GiRead} from 'react-icons/gi'
import {TbBellRingingFilled} from 'react-icons/tb'

const data = require('../../../../public/assets/json/json_en/labels.json');



const Sidemenu = () => {
    const listClass = 'ml-10 text-sm uppercase m-12 flex';

  return (
           
    <div className='flex justify-between items-top w-full h-full px-2'>
    <ul className='ml-8'>
        <li className={listClass}><img src="/icons/menuicons/calendar.svg" alt="Menu Icon" className='mr-8'/>{data["LBL_INFOSCREEN"]}</li>
        <li className={listClass}><img src="/icons/menuicons/forkKnife.svg" alt="Meal Icon" className='mr-8'/>{data["LBL_CAFE"]}</li>
        <li className={listClass}><img src="/icons/menuicons/bell.svg" alt="Message Icon" className='mr-8'/> {data["LBL_MESSAGES"]}</li>
        <li className={listClass}><img src="/icons/menuicons/exams.svg" alt="Exams Icon" className='mr-8'/>{data["LBL_EXAMS"]}</li>
        <li className={listClass}><img src="/icons/menuicons/guide.svg" alt="Beginner's Guide Icon" className='mr-8'/>{data["LBL_BGUIDE"]}</li>
        <li className={listClass}><img src="/icons/menuicons/association.svg" alt="Student's Association Icon" className='mr-8'/>{data["LBL_OEH"]}</li>
        <li className={listClass}><img src="/icons/menuicons/grades.svg" alt="Grades Icon" className='mr-8'/>{data["LBL_GRADES"]}</li>  
        <li className={listClass}><img src="/icons/menuicons/evaluation.svg" alt="Evaluation Icon" className='mr-8'/>{data["LBL_EVAL"]}</li>
        <li className={listClass}><img src="/icons/menuicons/settings.svg" alt="Settings Icon" className='mr-8'/>{data["LBL_SETTINGS"]}</li>
    </ul>
    </div>
  )
}

export default Sidemenu;
