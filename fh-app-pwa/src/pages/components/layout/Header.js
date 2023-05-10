import React from 'react';
import styles from '@/styles/Header.module.css';
const data = require('../../../../public/assets/json/json_en/labels.json');

function Header(props) {
    var hl = "";
    if(props.headline != null){
      hl = data[props.headline];
    }

    return (
      <>
        <div className="mx-8 mt-14 mb-4">
            <h2 className='text-maintitle-column text-green'>{props.subheadline}</h2>
            <h1 className='text-maintitle uppercase font-bold'>{hl}</h1>
        </div>
      </>
    );
}

export default Header;