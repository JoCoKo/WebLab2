import React from 'react';
import Middler from "./Middler"
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

describe('Middler', () => {
  const props = {
    addCity: () => {}
  };
  const middler = shallow(<Middler {...props} />);
  test('отображается корректно', () => {
    expect(shallowToJson(middler)).toMatchSnapshot();
  });
});