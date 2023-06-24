import React from 'react';
import styles from '@/styles/Meal.module.css';
import language from '../../pages/api/Language';


function Timeline(props) {
    let today = new Date();
    const systemLanguage = language(props);

    // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
    let dayOfWeek = today.getDay();

    // Calculate the date of the first day of the week (Monday)
    let firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));

    // Calculate the date of the last day of the week (Sunday)
    let lastDayOfWeek = new Date(today);
    lastDayOfWeek.setDate(today.getDate() - dayOfWeek + 6 + (dayOfWeek === 0 ? -6 : 1));

    // Format the dates as "dd.mm.yyyy"
    let options = { day: '2-digit', month: 'long' };
    let firstDayOfWeekFormatted = firstDayOfWeek.toLocaleString(`${systemLanguage}-DE`, options);
    let lastDayOfWeekFormatted = lastDayOfWeek.toLocaleDateString(`${systemLanguage}-DE`, options);

    return (
        <div className='flex items-center justify-around pt-4 mx-12 font-bold'>
            <p>{firstDayOfWeekFormatted.toLocaleUpperCase()}</p>
            <hr className='w-1/2 border-2 border-green'/>
            <p>{lastDayOfWeekFormatted.toLocaleUpperCase()}</p>
        </div>

    );
}

export default Timeline;