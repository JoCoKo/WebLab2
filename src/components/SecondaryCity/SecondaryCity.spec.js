import React from 'react';
import SecondaryCity from "./SecondaryCity"
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

describe('SecondaryCity', () => {
  describe('в состоянии загрузки', () => {
    const props = {
      weather: {
        city: "Ufa",
        temp: "-6",
        image: "http://openweathermap.org/img/wn/04n@2x.png",
        isLoading: true
      },
      onDeleted: ()=>{},
      i: 1
    };

    const secondaryCity = shallow(<SecondaryCity {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(secondaryCity)).toMatchSnapshot();
    });
  });

  describe('в состоянии штатного отображения', () => {
    const props = {
      weather: {
        city: "Ufa",
        temp: "-6",
        image: "http://openweathermap.org/img/wn/04n@2x.png",
        isLoading: null
      },
      onDeleted: ()=>{},
      i: 1
    };

    const secondaryCity = shallow(<SecondaryCity {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(secondaryCity)).toMatchSnapshot();
    });
  });
});