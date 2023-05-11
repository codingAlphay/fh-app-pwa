import React from 'react'
const data = require('../../../../public/assets/json/json_en/labels.json');
import Link from 'next/link';
import { useRouter } from "next/router"

const Sidemenu = () => {
  const router = useRouter()
  const path = router.pathname
  const listClass = 'text-menutitle text-black font-bold tracking-wide uppercase my-5 flex grid grid-cols-10 items-center';

  return (        
    <div className='flex justify-between'>
      <ul className='mt-8 ml-10'>
        <Link href={'/'}>
          <li className={listClass}><img src="/icons/menuicons/calendar.svg" alt="Menu Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/" && 'text-green'}`}>{data["LBL_INFOSCREEN"]}</span></li>
        </Link>
        <Link href={'/mealplan'}>
          <li className={listClass}><img src="/icons/menuicons/forkKnife.svg" alt="Meal Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/mealplan" && 'text-green'}`}>{data["LBL_CAFE"]}</span></li>
        </Link>
        <Link href={'/'}>
          <li className={listClass}><img src="/icons/menuicons/bell.svg" alt="Message Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/EDIT" && 'text-green'}`}>{data["LBL_MESSAGES"]}</span></li>
        </Link>
        <Link href={'/'}>
          <li className={listClass}><img src="/icons/menuicons/exams.svg" alt="Exams Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/EDIT" && 'text-green'}`}>{data["LBL_EXAMS"]}</span></li>
        </Link>
        <Link href={'/'}>
          <li className={listClass}><img src="/icons/menuicons/guide.svg" alt="Beginner's Guide Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/EDIT" && 'text-green'}`}>{data["LBL_BGUIDE"]}</span></li>
        </Link>
        <Link href={'/'}>
          <li className={listClass}><img src="/icons/menuicons/association.svg" alt="Student's Association Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/EDIT" && 'text-green'}`}>{data["LBL_OEH"]}</span></li>
        </Link>
        <Link href={'/'}>
          <li className={listClass}><img src="/icons/menuicons/grades.svg" alt="Grades Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/EDIT" && 'text-green'}`}>{data["LBL_GRADES"]}</span></li>  
        </Link>
        <Link href={'/'}>
          <li className={listClass}><img src="/icons/menuicons/evaluation.svg" alt="Evaluation Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/EDIT" && 'text-green'}`}>{data["LBL_EVAL"]}</span></li>
        </Link>
        <Link href={'/'}>
          <li className={listClass}><img src="/icons/menuicons/settings.svg" alt="Settings Icon" className='col-span-2'/><span className={`col-span-8 ${path == "/EDIT" && 'text-green'}`}>{data["LBL_SETTINGS"]}</span></li>
        </Link>
    </ul>
    </div>
  )
}

export default Sidemenu;
