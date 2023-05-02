import React from 'react';
import { useEffect, useState } from "react";
import handler from '../api/fetch';

function Calendar(props) {
  // API data is stored in the state
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const newData = await handler("infoscreen/getklausureninrange?from=01.03.2023&until=30.07.2023");
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
                        <h1>{item.tag}</h1>
                        <p>{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Calendar;