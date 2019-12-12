import React from 'react';
import {App} from "./App"
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

describe('App', () => {
  const city = JSON.parse(
    '{"id":479561,"city":"Ufa","temp":"-6","image":"http://openweathermap.org/img/wn/04n@2x.png","wind":3,"cloudiness":"overcast clouds","pressure":1026,"humidity":85,"coordinates":"54.73,55.95"}'
  );
  const props = {
    mainCityRequest:()=>{},
    mainCitySuccess:()=>{},
    mainCityError:()=>{},
    cityRequest:()=>{},
    citySuccess:()=>{},
    cityError:()=>{},
    cityDelete:()=>{},
    weather: {
      city: "Ufa",
      temp: "-6",
      image: "http://openweathermap.org/img/wn/04n@2x.png",
      error: null,
      wind: 3,
      cloudiness: "overcast clouds",
      pressure: 1026,
      humidity: 85,
      coordinates: "54.73,55.95"
    },
    cities: [city, city, city],
  };

  const app = shallow(<App {...props} />);
  test('отображается корректно', () => {
    expect(shallowToJson(app)).toMatchSnapshot();
  });
});