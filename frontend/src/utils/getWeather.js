import {transformData} from "./index";

export const getWeatherByCity = async (city) => {
  return fetch(`http://localhost:3012/weather?city=${city}`)
    .then(response => {
      if (response.ok)
        return response.json();
      else
        throw new Error(`status ${response.status}`)
    })
    .then(response => transformData(response));
};

export const getWeatherByCoord = async (lat, lon) => {
  return fetch(`http://localhost:3012/weather/coordinates?lat=${lat}&lon=${lon}`)
    .then(response => {
      if (response.ok)
        return response.json();
      else
        throw new Error(`status ${response.status}`)
    })
    .then(response => transformData(response));
};

export const getFavorites = async () => {
  return fetch(`http://localhost:3012/favorites`)
    .then(response => {
      if (response.ok)
        return response.json();
      else
        throw new Error(`status ${response.status}`)
    })
    .then(response => response.map(({name}) => name));
};

export const addFavorite = async (city) => {
  return fetch(`http://localhost:3012/favorites`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ city })
  })
    .then(response => {
      if (response.ok)
        return response.json();
      else
        throw new Error(`status ${response.status}`)
    })
};

export const deleteFavorite = async (id) => {
  return fetch(`http://localhost:3012/favorites`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ id })
  })
    .then(response => {
      if (response.ok)
        return response.json();
      else
        throw new Error(`status ${response.status}`)
    })
};