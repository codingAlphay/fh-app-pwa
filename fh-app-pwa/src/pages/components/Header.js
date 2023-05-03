import React from 'react';
import styles from '@/styles/Header.module.css';
const data = require('../../../public/assets/json/json_en/labels.json');

function Header(props) {
    var hl = "";
    if(props.headline != null){
      hl = data[props.headline];
    }

    return (
      <>
        <div className={styles.header}>
            <h2>{props.subheadline}</h2>
            <h1>{hl}</h1>
        </div>
      </>
    );
}

export default Header;