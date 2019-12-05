import React, {useState, useEffect} from 'react';
import './App.css';
import MainCity from "../MainCity/MainCity";
import AppHeader from "../AppHeader/AppHeader";
import {getWeatherByCity, getWeatherByCoord} from "../../utils/getWeather";
import getLocation from "../../utils/getCoordinates";
import Middler from "../Middler/Middler";
import {DEFAULT_CITY} from "../../const/constants";
import Spinner from "../Spinner/Spinner";
import CityList from "../CityList/CityList";

const App = () => {
    const [weather, setWeather] = useState({});
    const [upToDate, setUpToDate] = useState(true);
    const [cities, setCities] = useState([]);

    //UseEffect без массива вторым элементов работаем как onUpdate (рендерится при каждом обновлении), с пустым массивом в конце как onMount (1 раз)
    useEffect(() => {
        if (upToDate) {
            setWeather({});
            getLocation(successGeoCallback, errorGeoCallback);
            setUpToDate(false);
        }
    }, [upToDate]);

    const successGeoCallback = (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        getWeatherByCoord(lat, lon)
            .then((data) => setWeather(data))
            .catch((err) => alert(err));
    };

    const errorGeoCallback = () => {
        getWeatherByCity(DEFAULT_CITY)
            .then((data) => setWeather(data))
            .catch((err) => alert(err));
    };

    const addCityToState = (cityName) => {
        getWeatherByCity(cityName)
            .then((data) => {
                setCities((cities) => ([...cities, data]));
            })
            .catch((err) => alert(err));
    };

    useEffect(() => {
        console.log(cities);
    }, [cities]);


    return (
        <div className="App">
            <AppHeader updateCity={() => setUpToDate(true)}/>
            {weather.city ? <MainCity weather={weather}/> : <Spinner/>}
            <Middler addCity={addCityToState}/>
            <CityList cities={cities}/>
        </div>
    );
};

export default App;
