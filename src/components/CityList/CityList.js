import React from 'react';
import MainCity from "../MainCity/MainCity";

const CityList = ({cities}) => (
    <>
        {cities.map((city)=>(<MainCity weather={city} key={city.id}/>))}
    </>
);
export default CityList;