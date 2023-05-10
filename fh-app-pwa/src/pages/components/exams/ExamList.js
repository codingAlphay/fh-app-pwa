import React from 'react';
const data = require('../../api/exam-mockup.json');

function ExamList(props) {
    return (
        <>
        {data.map((exam, index) => (
            <div key={index}>
                <h1>{exam.lehrveranstaltung}</h1>
                <p>{exam.lektor}</p>
            </div>
        ))}
        </>
    );
}

export default ExamList;