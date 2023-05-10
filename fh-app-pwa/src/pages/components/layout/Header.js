import React from 'react';
import styles from '@/styles/Header.module.css';
import Menu from './sidemenu/Menu';
import language from '../api/Language';

function Header(props) {
    const systemLanguage = language(props);
    const labels = require(`../../../public/assets/json/json_${systemLanguage}/labels.json`);

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
        <div className={styles.headerbox_icon}><Menu/></div>
      </>
    );
}

export default Header;