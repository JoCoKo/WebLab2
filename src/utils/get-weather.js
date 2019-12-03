const getWeather = (cityName = "Moscow", APIkey) => {
    // eslint-disable-next-line no-undef
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        dataType: 'json',
        data: {
            q: cityName,
            appid: APIkey
        }
    })
        .done((data) => {
            console.log("KEKW");
            console.log(data);
            console.log("KEKW");
        })
};


/*async function fetchByCity(api_key, city) {
    const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
    let dataByCity;
    if (response.ok) {
        dataByCity = await response.json();
    } else {
        dataByCity = {error: "The server responded with a status of " + response.status}
    }
    return dataByCity;
}

async function fetchByCoordinates(api_key, latitude, longitude) {
    const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`);
    let dataByCoor;
    if (response.ok) {
        dataByCoor = await response.json();
    } else {
        dataByCoor = {error: response.status}
    }
    return dataByCoor;
}*/

export {
    getWeather
}