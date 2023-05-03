import React from 'react';
import styles from '@/styles/Meal.module.css';
import { useEffect, useState } from "react";
import handler from '../../api/fetch';

function MealList(props) {
    // API data is stored in the state
    const [data, setData] = useState([]);

    useEffect(() => {
    async function fetchData() {
        const newData = await handler("cafeteria/getcafeteriadata;from=01.05.2023;until=05.05.2023");
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
            <h2>{formattedDate}</h2>
            {props.group.items.map((item, index) => (
                <div className={styles.description}>
                    <div className={styles.line}>
                        <p key={index}>{item.name.split("\n")[0]}</p>
                        <p key={index}>{item.name.split("\n")[1]}</p>
                    </div>
                    <div className={styles.price}>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function replaceWithBr(item) {
    return item.replace(/\n/g, "<br />")
}

export default MealList;