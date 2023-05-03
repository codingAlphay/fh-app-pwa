import React from 'react';
import styles from '@/styles/Meal.module.css';
import { useEffect, useState } from "react";
import handler from '../../api/fetch';

function MealList(props) {
    // API data is stored in the state
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
    async function fetchData() {
        const newData = await handler(`cafeteria/getcafeteriadata;from=${firstDayOfWeekFormatted};until=${lastDayOfWeekFormatted}`);
        setData(newData.cafeteriaData);
    }
    fetchData();
    }, []);

    const groupedData = data.reduce((acc, item, index) => {
        const lastGroup = acc[acc.length - 1];
        if (index === 0 || item.tag !== lastGroup.tag) {
          acc.push({ tag: item.tag, items: [{ name: item.name, price: item.preis }] });
        } else {
          lastGroup.items.push({ name: item.name, price: item.preis });
        }
        return acc;
      }, []);    
    
      return (
        <div className={styles.main}> 
          {groupedData.map((group, index) => (
            <ListEntry group={group} key={index} />
          ))}
        </div>
      );
}

function ListEntry(props) {
    const date = new Date(props.group.tag);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('de-DE', options);


    return (
        <div className={styles.listEntry} key={props.key}>
            <h2>{formattedDate.toLocaleUpperCase()}</h2>
            {props.group.items.map((item, index) => (
                <div className={styles.description}>
                    <div className={styles.line}>
                        <p key={index}>{item.name.split("\n")[0]}</p>
                        <span key={index}>{item.name.split("\n")[1]}</span>
                    </div>
                    <div className={styles.price}>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MealList;