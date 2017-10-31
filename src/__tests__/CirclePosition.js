/* eslint-env jest */

import React from 'react';
import CirclePosition from '../CirclePosition';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('calculates a basic position', () => {
  expect(
    mount(
      <CirclePosition angle={90} radius={100}>
        {({x, y}) => (
          <text x={x} y={y}>
            Test
          </text>
        )}
      </CirclePosition>,
    ),
  ).toMatchSnapshot();
});

it('calculates a complex position', () => {
  expect(
    mount(
      <CirclePosition angle={41} radius={100}>
        {({x, y}) => (
          <text x={x} y={y}>
            Test
          </text>
        )}
      </CirclePosition>,
    ),
  ).toMatchSnapshot();
});

it('calculates a complex position with an adjust prop', () => {
  expect(
    mount(
      <CirclePosition angle={41} radius={100} adjust={-20}>
        {({x, y}) => (
          <text x={x} y={y}>
            Test
          </text>
        )}
      </CirclePosition>,
    ),
  ).toMatchSnapshot();
});

it('uses the render prop when provided', () => {
  expect(
    mount(
      <CirclePosition
        angle={90}
        radius={100}
        render={({x, y}) => (
          <text x={x} y={y}>
            Rendered
          </text>
        )}
      >
        {({x, y}) => (
          <text x={x} y={y}>
            NOT RENDERED
          </text>
        )}
      </CirclePosition>,
    ),
  ).toMatchSnapshot();
});
