import React, { useEffect } from 'react';
import './App.css';
import MainCity from "../MainCity/MainCity";
import AppHeader from "../AppHeader/AppHeader";
import {
    getWeatherByCity,
    getWeatherByCoord,
    getLocation,
    getCitiesFromLocalStorage
} from "../../utils";
import Middler from "../Middler/Middler";
import { DEFAULT_CITY } from "../../const/constants";
import CityList from "../CityList/CityList";
import { connect } from "react-redux";
import * as actions from "../../actions"

export const App = (props) => {
    const {mainCityRequest, mainCitySuccess, mainCityError, cityRequest, citySuccess, cityError, cityDelete, weather, cities} = props;

    const updateMainCity = () => {
        mainCityRequest();
        getLocation(successGeoCallback, errorGeoCallback);
    };


    const successGeoCallback = (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        getWeatherByCoord(lat, lon)
            .then((data) => mainCitySuccess(data))
            .catch((err) => mainCityError(err));
    };

    const errorGeoCallback = () => {
        getWeatherByCity(DEFAULT_CITY)
            .then((data) => mainCitySuccess(data))
            .catch((err) => mainCityError(err));
    };

    const canInsert = (cityName) => {
        let flag = true;
        //проверка на добавление уже существующего города в избранное
        if (cities.length === 0) return true;
        cities.forEach((city) => {
            if (city.city && city.city.toLocaleLowerCase() !== cityName.toLowerCase())
                flag &= true;
            else {
                alert('Already on the list');
                flag &= false;
            }
        });
        return flag;
    };


    const addCityToState = (cityName) => {
        if (canInsert(cityName)) {
            cityRequest();
            getWeatherByCity(cityName)
                .then((data) => {
                    citySuccess(data);
                })
                .catch((err) => {
                    cityError();
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


    return (
        <div className="App">
            <AppHeader updateCity={updateMainCity}/>
            <MainCity weather={weather}/>
            <Middler addCity={addCityToState}/>
            <CityList cities={cities} onDeleted={cityDelete}/>
        </div>
    );
};

const mapStateToProps = ({weather, cities}) => ({weather, cities});

export default connect(mapStateToProps, actions)(App);
