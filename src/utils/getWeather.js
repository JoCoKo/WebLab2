import { API_BASE } from "../const/constants";
import { transformData } from "./";

const getResource = (url) => fetch(`${API_BASE}${url}`);

export const getWeatherByCity = async(city) => {
    return getResource(`q=${city}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error(`status ${response.status}`)
        })
        .then(response => transformData(response));
};

export const getWeatherByCoord = async(lat, lon) => {
    return getResource(`lat=${lat}&lon=${lon}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error(`status ${response.status}`)
        })
        .then(response => transformData(response));
};