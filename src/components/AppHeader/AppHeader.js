import React from "react";
import "./AppHeader.css";

const AppHeader = ({updateCity}) => {
    return (
        <header className="App-header">
            <p>Погода здесь</p>
            <button onClick={() => updateCity()}>
                Обновить геолокацию
            </button>
        </header>
    );
};

export default AppHeader;