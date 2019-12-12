import React from 'react';
import CityList from "./CityList";
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

describe('CityList', () => {
  describe('с пустым массивом городов', () => {
    const props = {
      cities: [],
      onDeleted: () => {}
    };
    const cityList = shallow(<CityList {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(cityList)).toMatchSnapshot();
    });
  });
  describe('с заполненым массивом городов', () => {
    const city = JSON.parse(
      '{"id":479561,"city":"Ufa","temp":"-6","image":"http://openweathermap.org/img/wn/04n@2x.png","wind":3,"cloudiness":"overcast clouds","pressure":1026,"humidity":85,"coordinates":"54.73,55.95"}'
      );
    const props = {
      cities: [city, city, city],
      onDeleted: () => {}
    };
    const cityList = shallow(<CityList {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(cityList)).toMatchSnapshot();
    });
  });
});