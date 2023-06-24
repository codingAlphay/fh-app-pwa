import React from 'react';

// components
import Header from '../components/layout/Header';

// data mockups
const info = require('./api/student-info-mockup.json');

function bguide() {
    return (
        <>
            <Header headline={"LBL_BGUIDE"} subheadline={info[info.length - 1].jg_kurzbez}/>
            <div className='mx-4'>
            <h2 className='font-bold text-maintitle-course text-green mt-0.5 mb-3.5'>Weitere Informationen bzw. Dokumente finden Sie untere den flogenden Links:</h2>
                <ul className='pl-4 list-disc'>
                    <li>
                        <a href="https://checkin.fh-kufstein.ac.at" className='text-green'>FH Check In</a> für: 
                            <ul className='pl-4 list-disc'>
                                <li className='mb-2'>Inskriptionsbestätigung</li>
                                <li className='mb-2'>Zeugnis</li>
                                <li className='mb-2'>Parkschein</li>
                                <li className='mb-2'>News</li>
                                <li className='mb-2'>Lehrendenportal</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://login.microsoft.com" className='text-green'>Microsoft Login</a> für:
                            <ul className='pl-4 list-disc'>
                                <li className='mb-2'>Webmail</li>
                                <li className='mb-2'>Office 365</li>
                                <li className='mb-2'>OneDrive</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://weblearn.fh-kufstein.ac.at" className='text-green'>Weblearn</a> für:
                            <ul className='pl-4 list-disc'>
                                <li className='mb-2'>Kursdokumente</li>
                                <li className='mb-2'>Bibliothek</li>
                            </ul>
                        </li>
                    </ul>
                    <h3 className='font-bold text-maintitle-course opacity-60 mt-3.5 mb-3.5 text-center'>Wenn Sie weitere fragen haben kontaktieren Sie bitte den jeweiligen Anprechpartner.</h3>
            </div>
        </>
    );
}

export default bguide;