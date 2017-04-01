'use strict';

exports.__esModule = true;
exports.getRowProps = getRowProps;
exports.default = Row;

var _classNames = require('../classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

var propTypes = {
  reverse: _react.PropTypes.bool,
  start: _types.ViewportSizeType,
  center: _types.ViewportSizeType,
  end: _types.ViewportSizeType,
  top: _types.ViewportSizeType,
  middle: _types.ViewportSizeType,
  bottom: _types.ViewportSizeType,
  around: _types.ViewportSizeType,
  between: _types.ViewportSizeType,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

function getRowClassNames(props) {
  var modificators = [props.className, (0, _classNames2.default)('row')];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];
    if (value) {
      modificators.push((0, _classNames2.default)(key + '-' + value));
    }
  }

  if (props.reverse) {
    modificators.push((0, _classNames2.default)('reverse'));
  }

  return modificators;
}

function getRowProps(props) {
  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props));
}

function Row(props) {
  return _react2.default.createElement(props.tagName || 'div', getRowProps(props));
}

Row.propTypes = propTypes;