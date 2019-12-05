import React from 'react';
import './CityList.css'
import SecondaryCity from "../SecondaryCity/SecondaryCity";

const CityList = ({cities, onDeleted}) => (
    <div className="CityList">
        {cities.map((city, index)=>(<SecondaryCity weather={city} key={`city-${index}`} onDeleted={onDeleted} i={index}/>))}
    </div>
);
export default CityList;