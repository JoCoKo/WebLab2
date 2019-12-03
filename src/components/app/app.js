import React from 'react';
import './app.css';
import MainCity from "../main-city";
import AppHeader from "../app-header/app-header";
import {getWeather} from "../../utils/get-weather";

const weather2 = {
    temperature: '66C',
    wind: {
        speed: '3.2ms',
        direction: 'n'
    }
};

const App = () => {
    let APIkey = '74e541dab94c8071bb4282ecb2691ea0';
    const wrapGetWeather = () => {
        getWeather("St Petersburg", APIkey);
    };


    return (
        <div className="App">
            <div className="FirstHalf">
                <header className="App-header">
                    <p>Погода здесь</p>
                    <AppHeader updateCity={wrapGetWeather}/>
                </header>
                <MainCity weather={weather2}/>
            </div>
        </div>
    );
};


export default App;
