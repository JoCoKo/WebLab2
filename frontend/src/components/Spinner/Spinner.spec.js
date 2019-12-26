import React from 'react';
import Spinner from "./Spinner"
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

describe('Spinner', () => {
  const spinner = shallow(<Spinner/>);
  test('отображается корректно', () => {
    expect(shallowToJson(spinner)).toMatchSnapshot();
  });
});