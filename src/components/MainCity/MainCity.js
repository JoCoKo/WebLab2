import React from 'react';
import './MainCity.css';
import List from "../List/List";
import Spinner from "../Spinner/Spinner";



const MainCity = ({weather}) => {
    let {city, temp, image, error} = weather;
    return (
        <div className='MainCity'>
            {error ?
                alert(error) :
                city ?
                    <>
                        <div className='MainInfo'>
                            <span>{city}</span>
                            <div className='Temp'>
                                <img src={image} alt=''/>
                                <span>{temp}℃</span>
                            </div>
                        </div>
                        <List {...weather}/>
                    </> : <Spinner/>
            }
        </div>
    );
};

export default MainCity;
