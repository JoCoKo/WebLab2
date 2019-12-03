import React from "react";
import "./app-header.css";

const AppHeader = ({updateCity}) => {
    return(
      <button onClick={updateCity}>
          Обновить геолокацию
      </button>
    );
};

export default AppHeader;