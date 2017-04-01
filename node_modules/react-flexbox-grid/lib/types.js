'use strict';

exports.__esModule = true;
exports.ViewportSizeType = exports.ColumnSizeType = undefined;

var _react = require('react');

var ColumnSizeType = exports.ColumnSizeType = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]);
var ViewportSizeType = exports.ViewportSizeType = _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);