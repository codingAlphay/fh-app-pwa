import React from 'react';
import styles from '@/styles/Header.module.css';
import language from '../api/Language';

function Header(props) {
    const systemLanguage = language(props);
    const labels = require(`../../../public/assets/json/json_${systemLanguage}/labels.json`);

    var hl = "";
    if(props.headline != null){
      hl = labels[props.headline];
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