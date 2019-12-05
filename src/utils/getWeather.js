import {API_BASE} from "../const/constants";

const _transformData = (data) => {
    return {
        id : data.id,
        city: data.name,
        temp: (data.main.temp - 273.15).toFixed(0),
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        wind: data.wind.speed,
        cloudiness: data.weather[0].description,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        coordinates: `${data.coord.lat},${data.coord.lon}`,
    }

};

const getResource = async(url) => {
    const res = await fetch(`${API_BASE}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status} `)
    }
    return await res.json();
};

export const getWeatherByCity = async(city) => {
    const weather = await getResource(`q=${city}`);
    return _transformData(weather);
};

export const getWeatherByCoord = async(lat, lon) => {
    const weather = await getResource(`lat=${lat}&lon=${lon}`);
    return _transformData(weather);
};