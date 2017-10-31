/* eslint-env jest */

import React from 'react';
import LineCirclePosition from '../LineCirclePosition';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('calculates a basic position', () => {
  expect(
    mount(
      <LineCirclePosition angle={90} radius={100} length={20}>
        {({x1, y1, x2, y2}) => <line x1={x1} y1={y1} x2={x2} y2={y2} />}
      </LineCirclePosition>,
    ),
  ).toMatchSnapshot();
});

it('calculates a complex position', () => {
  expect(
    mount(
      <LineCirclePosition angle={41} radius={100} length={20}>
        {({x1, y1, x2, y2}) => <line x1={x1} y1={y1} x2={x2} y2={y2} />}
      </LineCirclePosition>,
    ),
  ).toMatchSnapshot();
});

it('calculates a complex position with an adjust prop', () => {
  expect(
    mount(
      <LineCirclePosition angle={41} radius={100} adjust={-20} length={20}>
        {({x1, y1, x2, y2}) => <line x1={x1} y1={y1} x2={x2} y2={y2} />}
      </LineCirclePosition>,
    ),
  ).toMatchSnapshot();
});

it('uses the render prop when provided', () => {
  expect(
    mount(
      <LineCirclePosition
        angle={90}
        radius={100}
        length={20}
        render={({x1, y1, x2, y2}) => <line x1={x1} y1={y1} x2={x2} y2={y2} />}
      >
        {({x1, y1, x2, y2}) => (
          <text x={x1} y={y1}>
            NOT RENDERED
          </text>
        )}
      </LineCirclePosition>,
    ),
  ).toMatchSnapshot();
});
