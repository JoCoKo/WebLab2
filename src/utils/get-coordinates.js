function getLocation(callback, errorHandler) {
    navigator.geolocation.getCurrentPosition(callback, errorHandler);
}

export default getLocation;