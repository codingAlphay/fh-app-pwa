import React from 'react';
import { useEffect, useState } from "react";

function language(props) {
    const [systemLanguage, setSystemLanguage] = useState('en'); // System Language

    useEffect(() => {
      const lang = navigator.language;
      if(lang.startsWith('de')) {
        setSystemLanguage('de');
      }
    }, []);
    
    return systemLanguage
}

export default language;