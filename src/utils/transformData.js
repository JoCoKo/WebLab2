const transformData = (data) => {
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

export default transformData;