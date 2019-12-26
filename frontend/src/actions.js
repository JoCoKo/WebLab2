export const mainCityRequest = () => ({
    type: 'MAIN_CITY_REQUEST'
});

export const mainCitySuccess = (city) => ({
    type: 'MAIN_CITY_SUCCESS',
    city
});

export const mainCityError = (error) => ({
    type: 'MAIN_CITY_ERROR',
    error
});

export const cityRequest = () => ({
    type: 'CITY_REQUEST'
});

export const citySuccess = (city) => ({
    type: 'CITY_SUCCESS',
    city
});

export const cityError = () => ({
    type: 'CITY_ERROR'
});

export const cityDelete = (index) => ({
    type: 'CITY_DELETE',
    index
});
