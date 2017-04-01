'use strict';

exports.__esModule = true;
exports.default = Grid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = require('../classNames');

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  fluid: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

function Grid(props) {
  var containerClass = (0, _classNames2.default)(props.fluid ? 'container-fluid' : 'container');
  var classNames = [props.className, containerClass];

  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
}

Grid.propTypes = propTypes;