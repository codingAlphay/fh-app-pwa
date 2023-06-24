import React from 'react';

// components
import Header from '../components/layout/Header';

// data mockups
const info = require('./api/student-info-mockup.json');

function oehPage() {
    return (
        <>
            <Header headline={"LBL_OEH"} subheadline={info[info.length - 1].jg_kurzbez}/>
            <div className='mx-4'>
            <h2 className='font-bold text-maintitle-course text-green mt-0.5 mb-3.5'>Weitere Informationen bzw. Dokumente finden Sie untere den flogenden Links:</h2>
                <ul className='pl-4 list-disc'>
                <li className='mb-3'>
                        Besuche die <a href="http://oeh-kufstein.at" className="text-green">ÖH Homepage</a> für die wichtigsten ÖH News.
                    </li>
                    <li className='mb-3'>
                        Schau auf der <a href="http://www.oeh-fhkufstein.at/events" className="text-green">ÖH Eventseite</a> vorbei, um kommende und vergangene ÖH Events zu entdecken.
                    </li>
                    <li className=''>
                        Erkunde die <a href="http://www.oeh-fhkufstein.at/sportprogramm" className="text-green">ÖH Sportseite</a> und finde ein regelmäßiges und abwechslungsreiches ÖH Sportprogramm.
                    </li>

                    </ul>
                    <h3 className='font-bold text-maintitle-course opacity-60 mt-3.5 mb-3.5 text-center'>Wenn Sie weitere fragen haben kontaktieren Sie bitte den jeweiligen Anprechpartner.</h3>
            </div>
        </>
    );
}

export default oehPage;