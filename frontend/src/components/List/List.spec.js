import React from 'react';
import List from "./List"
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

describe('List', () => {
  describe('с null в качестве данных', () => {
    const props = {
      wind: null,
      cloudiness: null,
      pressure: null,
      humidity: null,
      coordinates: null
    };
    const list = shallow(<List {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(list)).toMatchSnapshot();
    });
  });


  describe('с заполненым массивом данных', () => {
    const props = JSON.parse(
      '{"wind":3,"cloudiness":"overcast clouds","pressure":1026,"humidity":85,"coordinates":"54.73,55.95"}'
    );
    const list = shallow(<List {...props} />);
    test('отображается корректно', () => {
      expect(shallowToJson(list)).toMatchSnapshot();
    });
  });
});