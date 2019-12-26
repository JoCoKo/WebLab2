import React from 'react';
import AppHeader from "./AppHeader";
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

describe('AppHeader', () => {
  const appHeader = shallow(<AppHeader updateCity={() => {}} />);
  it ('отображается корректно', () => {
    expect(shallowToJson(appHeader)).toMatchSnapshot();
  });
});