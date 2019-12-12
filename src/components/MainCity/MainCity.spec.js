import React from 'react';
import MainCity from "./MainCity"
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

describe('MainCity', () => {
  describe('в состоянии ошибки', () => {
    const props = {
      weather: {
        city: "",
        temp: "",
        image: "",
        error: "АШЫПКА!!"
      }
    };
    const city = shallow(<MainCity {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(city)).toMatchSnapshot();
    });
  });

  describe('в состоянии загрузки', () => {
    const props = {
      weather: {
        city: null,
        temp: "",
        image: "",
        error: null
      }
    };
    const city = shallow(<MainCity {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(city)).toMatchSnapshot();
    });
  });

  describe('в состоянии штатного отображения данных', () => {
    const props = {
      weather: {
        city: "Ufa",
        temp: "-6",
        image: "http://openweathermap.org/img/wn/04n@2x.png",
        error: null
      }
    };
    const city = shallow(<MainCity {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(city)).toMatchSnapshot();
    });
  });



});