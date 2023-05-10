import React from 'react';

// components
import Header from './components/layout/Header';
import ExamList from './components/exams/ExamList';

// data mockups
const info = require('./api/student-info-mockup.json');
const exams = require('./api/exam-mockup.json');

function examOverview() {
    return (
        <>
            <Header headline={"LBL_EXAMS"} subheadline={info[info.length - 1].jg_kurzbez}/>
            <div className='mx-4'>
                { exams.map((exam, index) => (
                    <ExamList key={index} exam={exam}/>
                    ))
                }
            </div>
        </>
    );
}

export default examOverview;