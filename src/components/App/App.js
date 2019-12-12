import React, {useState, useEffect} from 'react';
import './App.css';
import MainCity from "../MainCity/MainCity";
import AppHeader from "../AppHeader/AppHeader";
import {
    getWeatherByCity,
    getWeatherByCoord,
    getLocation,
    saveToLocalStorage,
    getCitiesFromLocalStorage
} from "../../utils";
import Middler from "../Middler/Middler";
import {DEFAULT_CITY} from "../../const/constants";
import Spinner from "../Spinner/Spinner";
import CityList from "../CityList/CityList";

const App = () => {
    const [weather, setWeather] = useState({});
    const [cities, setCities] = useState([]);

    const updateMainCity = () => {
        setWeather({});
        getLocation(successGeoCallback, errorGeoCallback);
    };


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

    const deleteLoading = (arr, data) => {
        let firstLoadingObj = arr.length - 1;
        arr.filter((el) => (el)).forEach((el, index) => {
            if (el.isLoading && index < firstLoadingObj) firstLoadingObj = index;
        });
        if (data)
            arr[firstLoadingObj] = data;
        else
            arr.pop();
        return arr;
    };

    const addCityToState = (cityName) => {
        let neededToBeSet = false;
        //проверка на добавление уже существующего города в избранное
        cities.forEach((city) => {
            if (city.city && city.city.toLocaleLowerCase() !== cityName.toLowerCase())
                neededToBeSet = true;
            else
                alert('Already on the list');
        });
        if (cities.length === 0 || neededToBeSet) {
            setCities((state) => ([...state, {isLoading: true}]));
            getWeatherByCity(cityName)
                .then((data) => {
                    setCities((state) => saveToLocalStorage([...deleteLoading(state, data)]));
                })
                .catch((err) => {
                    setCities((state) => saveToLocalStorage([...deleteLoading(state)]));
                    alert(err)
                });
        }

    };

    useEffect(() => {
        const ls = getCitiesFromLocalStorage();
        if (ls) ls.map((city) => addCityToState(city));
        updateMainCity();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDeleted = (id) => setCities((state) => saveToLocalStorage(state.filter((city, index) => index !== id)));

    return (
        <div className="App">
            <AppHeader updateCity={updateMainCity}/>
            {weather.city ? <MainCity weather={weather}/> : <Spinner/>}
            <Middler addCity={addCityToState}/>
            <CityList cities={cities} onDeleted={onDeleted}/>
        </div>
    );
};

export default App;
