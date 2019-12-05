import React from 'react';
import './List.css'

const List = ({wind, cloudiness, pressure, humidity, coordinates}) => {
    return (
        <ul className='ExtraInfo'>
            <li><span>Ветер</span><span>{wind} m/s</span></li>
            <li><span>Облачность</span><span>{cloudiness}</span></li>
            <li><span>Давление</span><span>{pressure} hpa</span></li>
            <li><span>Влажность</span><span>{humidity} %</span></li>
            <li><span>Координаты:</span><span>[{coordinates}]</span></li>
        </ul>
    );
};

export default List;