const getCitiesFromLocalStorage = () => {
    const state = JSON.parse( localStorage.getItem('state') );
    if (state === null)
        return null;
    return state.cities;
};

export default getCitiesFromLocalStorage;