import React from 'react';

const MainCity = ({weather}) => {
    return (
        <div>
            <span>Wind: {weather.wind.speed}</span>
        </div>

    );
};

export default MainCity;
