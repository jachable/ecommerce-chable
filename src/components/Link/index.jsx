import React, {useState, useEffect} from 'react';
import {styles} from './styles.jsx'
const Link = ({ruta, nombre}) => {
    const [hover, setHover] = useState(false);
    useEffect(() => {

    }, []);


    return (
        <li>
            <a href={ruta} style={{...styles.link, ...(hover ? styles.hover : null)}}
                onMouseEnter={()=> setHover(true)}
                onMouseLeave={()=> setHover(false)}>
            {nombre}</a>
        </li>
    );
}

export default Link;