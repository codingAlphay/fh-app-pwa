import React from 'react';
import { useEffect, useState } from "react";

function StartEndWeek(props) {
    const [data, setData] = useState([]);

    // Get today's date
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
    let options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let firstDayOfWeekFormatted = firstDayOfWeek.toLocaleDateString('de-DE', options);
    let lastDayOfWeekFormatted = lastDayOfWeek.toLocaleDateString('de-DE', options);

    useEffect(() => {
        // set firstDayOfWeekFormatted and lastDayOfWeekFormatted as state
        setData([firstDayOfWeekFormatted, lastDayOfWeekFormatted]);
    }, []);

    return data;
}

export default StartEndWeek;