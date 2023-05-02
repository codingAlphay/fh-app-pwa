import React from 'react';
import { useEffect, useState } from "react";
import handler from '../api/fetch';

function Cafeteria(props) {
  // API data is stored in the state
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const newData = await handler("cafeteria/getcafeteriadata;from=01.05.2023;until=05.05.2023");
      setData(newData.cafeteriaData);
    }
    fetchData();
  }, []);


    return (
        <div>
            <h1>Cafeteria</h1>
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

export default Cafeteria;