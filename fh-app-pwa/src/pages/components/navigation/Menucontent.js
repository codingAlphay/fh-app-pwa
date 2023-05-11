import React from 'react'
const data = require('../../../../public/assets/json/json_en/labels.json');

const Sidemenu = () => {
    const listClass = 'text-menutitle text-black font-bold tracking-wide uppercase my-5 flex grid grid-cols-10 items-center';

  return (        
    <div className='flex justify-between'>
      <ul className='mt-8 ml-10'>
        <li className={listClass}><img src="/icons/menuicons/calendar.svg" alt="Menu Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_INFOSCREEN"]}</span></li>
        <li className={listClass}><img src="/icons/menuicons/forkKnife.svg" alt="Meal Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_CAFE"]}</span></li>
        <li className={listClass}><img src="/icons/menuicons/bell.svg" alt="Message Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_MESSAGES"]}</span></li>
        <li className={listClass}><img src="/icons/menuicons/exams.svg" alt="Exams Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_EXAMS"]}</span></li>
        <li className={listClass}><img src="/icons/menuicons/guide.svg" alt="Beginner's Guide Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_BGUIDE"]}</span></li>
        <li className={listClass}><img src="/icons/menuicons/association.svg" alt="Student's Association Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_OEH"]}</span></li>
        <li className={listClass}><img src="/icons/menuicons/grades.svg" alt="Grades Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_GRADES"]}</span></li>  
        <li className={listClass}><img src="/icons/menuicons/evaluation.svg" alt="Evaluation Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_EVAL"]}</span></li>
        <li className={listClass}><img src="/icons/menuicons/settings.svg" alt="Settings Icon" className='col-span-2'/><span className='col-span-8'>{data["LBL_SETTINGS"]}</span></li>
    </ul>
    </div>
  )
}

export default Sidemenu;
