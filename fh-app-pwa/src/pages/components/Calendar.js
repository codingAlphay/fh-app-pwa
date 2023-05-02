import React from 'react';
import { useEffect, useState } from "react";
import handler from '../api/fetch';

function Calendar(props) {
  // API data is stored in the state
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const newData = await handler("infoboard/getrpdata?from=02.05.2023&until=15.07.2023&pkz=2110653142");
      setData(newData);
    }
    fetchData();
  }, []);

    return (
        <div>
            <h1>Calendar</h1>
            {
                data.map((item) => (
                    <div>
                        <h1>{item.courseName}</h1>
                        <p>{item.lecturer}</p>
                        <p>{item.date}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Calendar;