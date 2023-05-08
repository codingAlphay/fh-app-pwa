import React from 'react';
import styles from '@/styles/Meal.module.css';

function Timeline(props) {
    let today = new Date();

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
    let firstDayOfWeekFormatted = firstDayOfWeek.toLocaleString('de-DE', options);
    let lastDayOfWeekFormatted = lastDayOfWeek.toLocaleDateString('de-DE', options);

    return (
        <div className='flex justify-around items-center pb-4 mx-24 pt-16 font-bold'>
            <p>{firstDayOfWeekFormatted.toLocaleUpperCase()}</p>
            <hr className='w-1/2 border-2 border-green'/>
            <p>{lastDayOfWeekFormatted.toLocaleUpperCase()}</p>
        </div>
    );
}

export default Timeline;