import React from 'react';
import './MainCity.css';
import List from "../List/List";



const MainCity = ({weather}) => {
    const {city, temp, image} = weather;
    return (
        <div className='MainCity'>
            <div className='MainInfo'>
                <span>{city}</span>
                <div className='Temp'>
                    <img src={image} alt=''/>
                    <span>{temp} ℃</span>
                </div>
            </div>
            <List {...weather}/>
        </div>
    );
};

export default MainCity;
