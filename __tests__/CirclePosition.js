'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CirclePosition = require('../CirclePosition');

var _CirclePosition2 = _interopRequireDefault(_CirclePosition);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

it('calculates a basic position', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(
    _CirclePosition2.default,
    { angle: 90, radius: 100 },
    function (_ref) {
      var x = _ref.x,
          y = _ref.y;
      return _react2.default.createElement(
        'text',
        { x: x, y: y },
        'Test'
      );
    }
  ))).toMatchSnapshot();
});

it('calculates a complex position', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(
    _CirclePosition2.default,
    { angle: 41, radius: 100 },
    function (_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      return _react2.default.createElement(
        'text',
        { x: x, y: y },
        'Test'
      );
    }
  ))).toMatchSnapshot();
});

it('calculates a complex position with an adjust prop', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(
    _CirclePosition2.default,
    { angle: 41, radius: 100, adjust: -20 },
    function (_ref3) {
      var x = _ref3.x,
          y = _ref3.y;
      return _react2.default.createElement(
        'text',
        { x: x, y: y },
        'Test'
      );
    }
  ))).toMatchSnapshot();
});

it('uses the render prop when provided', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(
    _CirclePosition2.default,
    {
      angle: 90,
      radius: 100,
      render: function render(_ref4) {
        var x = _ref4.x,
            y = _ref4.y;
        return _react2.default.createElement(
          'text',
          { x: x, y: y },
          'Rendered'
        );
      }
    },
    function (_ref5) {
      var x = _ref5.x,
          y = _ref5.y;
      return _react2.default.createElement(
        'text',
        { x: x, y: y },
        'NOT RENDERED'
      );
    }
  ))).toMatchSnapshot();
});