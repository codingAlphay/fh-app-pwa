import React from 'react';
import styles from '@/styles/Header.module.css';
const data = require('../../../public/assets/json/json_en/labels.json');

function Header(props) {

    return (
      <>
        <div className={styles.header}>
            <h2>{props.subheadline}</h2>
            <h1>{data.LBL_CAFE}</h1>
        </div>
      </>
    );
}

export default Header;