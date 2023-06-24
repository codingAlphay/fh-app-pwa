import React from 'react';

// components
import Header from '../components/layout/Header';
import Grade from '../components/Grade';

// data mockups
const info = require('./api/student-info-mockup.json');
const gradesData = require('./api/grade-mockup.json');

function grades() {
    return (
        <>
            <Header headline={"LBL_GRADES"} subheadline={info[info.length - 1].jg_kurzbez}/>
            <div className='mx-4'>
                {gradesData && gradesData.map((grade, index) => (
                    <Grade key={index} grade={grade}/>
                ))}
            </div>
        </>
    );
}

export default grades;