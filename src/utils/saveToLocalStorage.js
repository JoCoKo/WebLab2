const saveToLocalStorage = (cities) => {
    const citiesList = cities.map(( city ) => (city.city));
    localStorage.setItem('state', JSON.stringify({cities: citiesList}));
    return cities;
};

export default saveToLocalStorage;