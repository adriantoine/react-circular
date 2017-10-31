'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LineCirclePosition = require('../LineCirclePosition');

var _LineCirclePosition2 = _interopRequireDefault(_LineCirclePosition);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

it('calculates a basic position', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(
    _LineCirclePosition2.default,
    { angle: 90, radius: 100, length: 20 },
    function (_ref) {
      var x1 = _ref.x1,
          y1 = _ref.y1,
          x2 = _ref.x2,
          y2 = _ref.y2;
      return _react2.default.createElement('line', { x1: x1, y1: y1, x2: x2, y2: y2 });
    }
  ))).toMatchSnapshot();
});

it('calculates a complex position', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(
    _LineCirclePosition2.default,
    { angle: 41, radius: 100, length: 20 },
    function (_ref2) {
      var x1 = _ref2.x1,
          y1 = _ref2.y1,
          x2 = _ref2.x2,
          y2 = _ref2.y2;
      return _react2.default.createElement('line', { x1: x1, y1: y1, x2: x2, y2: y2 });
    }
  ))).toMatchSnapshot();
});

it('calculates a complex position with an adjust prop', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(
    _LineCirclePosition2.default,
    { angle: 41, radius: 100, adjust: -20, length: 20 },
    function (_ref3) {
      var x1 = _ref3.x1,
          y1 = _ref3.y1,
          x2 = _ref3.x2,
          y2 = _ref3.y2;
      return _react2.default.createElement('line', { x1: x1, y1: y1, x2: x2, y2: y2 });
    }
  ))).toMatchSnapshot();
});

it('uses the render prop when provided', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(
    _LineCirclePosition2.default,
    {
      angle: 90,
      radius: 100,
      length: 20,
      render: function render(_ref4) {
        var x1 = _ref4.x1,
            y1 = _ref4.y1,
            x2 = _ref4.x2,
            y2 = _ref4.y2;
        return _react2.default.createElement('line', { x1: x1, y1: y1, x2: x2, y2: y2 });
      }
    },
    function (_ref5) {
      var x1 = _ref5.x1,
          y1 = _ref5.y1,
          x2 = _ref5.x2,
          y2 = _ref5.y2;
      return _react2.default.createElement(
        'text',
        { x: x1, y: y1 },
        'NOT RENDERED'
      );
    }
  ))).toMatchSnapshot();
});