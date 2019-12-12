import {saveToLocalStorage} from "./utils";

const initialStore = {
    weather: {},
    cities: []
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'MAIN_CITY_REQUEST':
            return {
                ...store,
                weather: {}
            };
        case 'MAIN_CITY_SUCCESS':
            return {
                ...store,
                weather: action.city
            };
        case 'MAIN_CITY_ERROR':
            return {
                ...store,
                weather: {error: action.error}
            };
        case 'CITY_REQUEST':
            return {
                ...store,
                cities: [...store.cities, {isLoading: true}]
            };
        case 'CITY_SUCCESS': {
            let firstLoadingObj = store.cities.length - 1;
            const citiesCopy = store.cities.filter((el) => (el)).map((el, index) => {
                if (el.isLoading && index < firstLoadingObj) firstLoadingObj = index;
                return el;
            });
            citiesCopy[firstLoadingObj] = action.city;
            saveToLocalStorage(citiesCopy);
            return {
                ...store,
                cities: citiesCopy
            };
        }
        case 'CITY_ERROR': {
            let firstLoadingObj = store.cities.length - 1;
            const citiesCopy = store.cities.filter((el) => (el)).map((el, index) => {
                if (el.isLoading && index < firstLoadingObj) firstLoadingObj = index;
                return el;
            });
            citiesCopy.pop();
            saveToLocalStorage(citiesCopy);
            return {
                ...store,
                cities: citiesCopy
            };
        }
        case 'CITY_DELETE':
            return {
                ...store,
                cities:  saveToLocalStorage(store.cities.filter((city, index) => index !== action.index))
            };
        default:
            return store;
    }
};

export default reducer;