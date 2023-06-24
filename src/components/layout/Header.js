import React from 'react';
import Menu from '../navigation/Menu';
import language from '../../pages/api/Language';

function Header(props) {
    const systemLanguage = language(props);
    const labels = require(`../../../public/assets/json/json_${systemLanguage}/labels.json`);

    var hl = "";
    if(props.headline != null){
      hl = labels[props.headline];
    }

    return (
      <div className="flex items-center justify-between pt-6 mx-8 mb-8">
        <div>
            <h2 className='text-maintitle-column text-green'>{props.subheadline}</h2>
            <h1 className='-mt-1 font-bold text-black uppercase dark:text-white text-maintitle'>{hl}</h1>
        </div>
        <Menu/>
      </div>

    );
}

export default Header; 