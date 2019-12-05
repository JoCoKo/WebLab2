import React from 'react';
import './MainCity.css';



const MainCity = ({weather}) => {
    const {city, temp, image, wind, cloudiness, pressure, humidity, coordinates} = weather;
    return (
        <div className='MainCity'>
            <div className='MainInfo'>
                <span>{city}</span>
                <div className='Temp'>
                    <img src={image} alt=''/>
                    <span>{temp} ℃</span>
                </div>
            </div>
            <ul className='ExtraInfo'>
                <li>Ветер {wind} m/s</li>
                <li>Облачность {cloudiness}</li>
                <li>Давление {pressure} hpa</li>
                <li>Влажность {humidity} %</li>
                <li>Координаты: [{coordinates}]</li>
            </ul>
        </div>

    );
};

export default MainCity;
