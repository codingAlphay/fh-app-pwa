import React from 'react';

// components
import Header from './components/Header';
import ExamList from './components/exams/ExamList';

// data mockups
const info = require('./api/student-info-mockup.json');


function examOverview() {
    return (
        <>
            <Header headline={"LBL_EXAMS"} subheadline={info[info.length - 1].jg_kurzbez}/>
            <ExamList />
        </>
    );
}

export default examOverview;