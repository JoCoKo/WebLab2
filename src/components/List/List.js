import React from 'react';
import './List.css'

const List = ({wind, cloudiness, pressure, humidity, coordinates}) => {
    return (
        <ul className='ExtraInfo'>
            <li>Ветер {wind} m/s</li>
            <li>Облачность {cloudiness}</li>
            <li>Давление {pressure} hpa</li>
            <li>Влажность {humidity} %</li>
            <li>Координаты: [{coordinates}]</li>
        </ul>
    );
};

export default List;