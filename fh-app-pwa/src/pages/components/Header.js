import React, { useState } from 'react';
import styles from '@/styles/Header.module.css';
import Menu from './sidemenu/Menu';
const data = require('../../../public/assets/json/json_en/labels.json');

function Header(props) {
    var hl = "";
    if(props.headline != null){
      hl = data[props.headline];
    }

    return (
      <>
        <div className={styles.headerbox}>
        <div className={styles.header}>
            <h2>{props.subheadline}</h2>
            <h1>{hl}</h1>
        </div>
        <div className={styles.headerbox_icon}><Menu/></div>
        </div>
      </>
    );
}

export default Header;
