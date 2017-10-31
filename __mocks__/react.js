'use strict';

var react = require('react');
// Resolution for requestAnimationFrame not supported in jest error :
// https://github.com/facebook/react/issues/9102#issuecomment-283873039
global.window = global;
window.addEventListener = function () {};
window.requestAnimationFrame = function () {
  throw new Error('requestAnimationFrame is not supported in Node');
};

module.exports = react;