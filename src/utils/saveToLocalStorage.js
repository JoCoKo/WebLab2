const saveToLocalStorage = (cities) => {
    if(cities instanceof Array) {
        const citiesList = cities.filter((city) => (city.city)).map(( city ) => (city.city));
        localStorage.setItem('state', JSON.stringify({cities: citiesList}));
    }
    return cities;
};

export default saveToLocalStorage;