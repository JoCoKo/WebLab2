import React from 'react';
import '../App.css';

function App() {
    return (
        <div className="App">
          <div className="FirstHalf">
            <header className="App-header">
                <p>Погода здесь</p>
              <button>Обновить геолокацию</button>
            </header>
          </div>
        </div>
    );
}

let APIkey = '74e541dab94c8071bb4282ecb2691ea0';

function getWeather(cityName = "St Petersburg") {
    // eslint-disable-next-line no-undef
    return $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        dataType: 'json',
        data: {
            q: cityName,
            appid: APIkey
        }
    })
}
getWeather()
    .done(
        function (data) {
            console.log(data);
        }
    );

export default App;
