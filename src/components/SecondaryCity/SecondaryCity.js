import React from 'react';
import './SecondaryCity.css';
import List from "../List/List";
import Spinner from "../Spinner/Spinner";


const SecondaryCity = ({weather, onDeleted, i}) => {
    const {city, temp, image, isLoading} = weather;
    return (
        <div className='SecondaryCity'>
            { isLoading ?
                <Spinner/> :
                <>
                <div className='SecondaryInfo'>
                    <span>{city}</span>
                    <img src={image} alt=''/>
                    <span>{temp} ℃</span>
                    <button onClick={() => onDeleted(i)}>X</button>
                </div>
                <List {...weather}/>
                </>
            }
        </div>
    );
};

export default SecondaryCity;
