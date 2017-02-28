module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(10);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _textareaCaret = __webpack_require__(6);

	var _textareaCaret2 = _interopRequireDefault(_textareaCaret);

	var _getInputSelection = __webpack_require__(3);

	var _getInputSelection2 = _interopRequireDefault(_getInputSelection);

	__webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEY_UP = 38;
	var KEY_DOWN = 40;
	var KEY_RETURN = 13;
	var KEY_ENTER = 14;
	var KEY_ESCAPE = 27;

	var OPTION_LIST_Y_OFFSET = 10;
	var OPTION_LIST_MIN_WIDTH = 100;

	var propTypes = {
		Component: _react.PropTypes.string,
		defaultValue: _react.PropTypes.string,
		disabled: _react.PropTypes.bool,
		maxOptions: _react.PropTypes.number,
		onBlur: _react.PropTypes.func,
		onChange: _react.PropTypes.func,
		onKeyDown: _react.PropTypes.func,
		onRequestOptions: _react.PropTypes.func,
		options: _react.PropTypes.array,
		regex: _react.PropTypes.string,
		requestOnlyIfNoOptions: _react.PropTypes.bool,
		spaceRemovers: _react.PropTypes.array,
		trigger: _react.PropTypes.string,
		value: _react.PropTypes.any
	};

	var defaultProps = {
		Component: 'textarea',
		defaultValue: '',
		disabled: false,
		maxOptions: 6,
		onBlur: function onBlur() {},
		onChange: function onChange() {},
		onKeyDown: function onKeyDown() {},
		onRequestOptions: function onRequestOptions() {},
		options: [],
		regex: '^[A-Za-z0-9\\-_]+$',
		requestOnlyIfNoOptions: true,
		spaceRemovers: [',', '.', '!', '?'],
		trigger: '@'
	};

	var AutocompleteTextField = function (_React$Component) {
		_inherits(AutocompleteTextField, _React$Component);

		function AutocompleteTextField(props) {
			_classCallCheck(this, AutocompleteTextField);

			var _this = _possibleConstructorReturn(this, (AutocompleteTextField.__proto__ || Object.getPrototypeOf(AutocompleteTextField)).call(this, props));

			_this.isTrigger = _this.isTrigger.bind(_this);
			_this.getMatch = _this.getMatch.bind(_this);
			_this.handleBlur = _this.handleBlur.bind(_this);
			_this.handleChange = _this.handleChange.bind(_this);
			_this.handleKeyDown = _this.handleKeyDown.bind(_this);
			_this.handleResize = _this.handleResize.bind(_this);
			_this.handleSelection = _this.handleSelection.bind(_this);
			_this.updateCaretPosition = _this.updateCaretPosition.bind(_this);
			_this.updateHelper = _this.updateHelper.bind(_this);
			_this.resetHelper = _this.resetHelper.bind(_this);
			_this.renderAutocompleteList = _this.renderAutocompleteList.bind(_this);
			_this.debouncedResetScroll = _lodash2.default.debounce(function () {
				return _this.resetScrollLock();
			}, 250);

			_this.state = {
				helperVisible: false,
				left: 0,
				matchLength: 0,
				matchStart: 0,
				options: [],
				scrolling: false,
				selection: 0,
				top: 0,
				value: null
			};

			_this.recentValue = props.defaultValue;
			return _this;
		}

		_createClass(AutocompleteTextField, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				window.addEventListener('resize', this.handleResize);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (nextProps.options.length !== this.props.options.length) {
					this.updateHelper(this.recentValue, this.state.caret, nextProps.options);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				window.removeEventListener('resize', this.handleResize);
			}
		}, {
			key: 'getMatch',
			value: function getMatch(str, caret, providedOptions) {
				var triggerLength = this.props.trigger.length;

				for (var i = caret - 1; i >= 0; --i) {
					var re = new RegExp(this.props.regex);
					var substr = str.substring(i, caret);
					var match = substr.match(re);

					if (!match) {
						if (!triggerLength && substr.length === 1) {
							return null;
						}

						var triggerIdx = i - triggerLength + 1;

						if (triggerIdx < 0) {
							return null;
						}

						if (this.isTrigger(str, triggerIdx)) {
							var _ret = function () {
								var matchedSlug = substr.substring(1, substr.length);

								var options = providedOptions.filter(function (slug) {
									return slug.substring(0, matchedSlug.length) === matchedSlug;
								});
								var matchLength = matchedSlug.length;
								var matchStart = i + 1;

								return {
									v: { matchLength: matchLength, matchStart: matchStart, options: options }
								};
							}();

							if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
						}

						break;
					}
				}

				return null;
			}
		}, {
			key: 'isTrigger',
			value: function isTrigger(str, i) {
				var trigger = this.props.trigger;


				if (!trigger || !trigger.length) {
					return true;
				}

				if (str.substr(i, trigger.length) === trigger) {
					return true;
				}

				return false;
			}
		}, {
			key: 'handleBlur',
			value: function handleBlur() {
				var _this2 = this;

				// we need to add small delay if mouse click was used for option selection
				// to ensure that events would be handled in correct order
				setTimeout(function () {
					return _this2.setState({ helperVisible: false });
				}, 50);

				this.props.onBlur();
			}
		}, {
			key: 'handleChange',
			value: function handleChange(e) {
				var _props = this.props,
				    onChange = _props.onChange,
				    options = _props.options,
				    spaceRemovers = _props.spaceRemovers;


				var old = this.recentValue;
				var str = e.target.value;
				var caret = (0, _getInputSelection2.default)(e.target).end;

				if (!str.length) {
					this.setState({ helperVisible: false });
				}

				this.recentValue = str;

				this.setState({ caret: caret, value: e.target.value });

				if (!str.length || !caret) {
					return onChange(e.target.value);
				}

				// '@wonderjenny ,|' -> '@wonderjenny, |'
				if (spaceRemovers.length && str.length > 2) {
					for (var i = 0; i < Math.max(old.length, str.length); ++i) {
						if (old[i] !== str[i]) {
							if (i >= 2 && str[i - 1] === ' ' && spaceRemovers.indexOf(str[i - 2]) === -1 && spaceRemovers.indexOf(str[i]) !== -1 && this.getMatch(str.substring(0, i - 2).toLowerCase(), caret - 3, options)) {
								var newValue = '' + str.slice(0, i - 1) + str.slice(i, str.length) + ' ';

								this.updateCaretPosition(i + 1);
								(0, _reactDom.findDOMNode)(this.refInput).value = newValue;

								if (!this.props.value) {
									this.setState({ value: newValue });
								}

								return onChange(newValue);
							}

							break;
						}
					}
				}

				this.updateHelper(str, caret, options);

				if (!this.props.value) {
					this.setState({ value: e.target.value });
				}

				return onChange(e.target.value);
			}
		}, {
			key: 'handleKeyDown',
			value: function handleKeyDown(event) {
				if (this.state.helperVisible) {
					var _state = this.state,
					    options = _state.options,
					    selection = _state.selection;


					switch (event.keyCode) {
						case KEY_ESCAPE:
							event.preventDefault();
							this.resetHelper();
							break;
						case KEY_UP:
							event.preventDefault();
							this.setState({ selection: (options.length + selection - 1) % options.length });
							this.checkScroll();
							break;
						case KEY_DOWN:
							event.preventDefault();
							this.setState({ selection: (selection + 1) % options.length });
							this.checkScroll();
							break;
						case KEY_ENTER:
						case KEY_RETURN:
							event.preventDefault();
							this.handleSelection(selection);
							break;
						default:
							this.props.onKeyDown(event);
							break;
					}
				} else {
					this.props.onKeyDown(event);
				}
			}
		}, {
			key: 'handleResize',
			value: function handleResize() {
				this.setState({ helperVisible: false });
			}
		}, {
			key: 'handleSelection',
			value: function handleSelection(idx) {
				var _state2 = this.state,
				    matchStart = _state2.matchStart,
				    matchLength = _state2.matchLength,
				    options = _state2.options;
				var trigger = this.props.trigger;


				var triggerLength = trigger.length;
				var slug = options[idx];
				var value = this.recentValue;
				var part1 = value.substring(0, matchStart - triggerLength);
				var part2 = value.substring(matchStart + matchLength + triggerLength, value.length);

				var event = { target: (0, _reactDom.findDOMNode)(this.refInput) };

				event.target.value = '' + part1 + trigger + slug + ' ' + part2;
				this.handleChange(event);

				this.resetHelper();

				this.updateCaretPosition(part1.length + slug.length + triggerLength + 1);
			}
		}, {
			key: 'updateCaretPosition',
			value: function updateCaretPosition(caret) {
				var _this3 = this;

				this.setState({ caret: caret }, function () {
					return (0, _getInputSelection.setCaretPosition)((0, _reactDom.findDOMNode)(_this3.refInput), caret);
				});
			}
		}, {
			key: 'updateHelper',
			value: function updateHelper(str, caret, options) {
				var input = (0, _reactDom.findDOMNode)(this.refInput);

				var slug = this.getMatch(str, caret, options);

				if (slug) {
					var caretPos = (0, _textareaCaret2.default)(input, caret);
					var rect = input.getBoundingClientRect();

					var top = caretPos.top + input.offsetTop;
					var left = Math.min(caretPos.left + input.offsetLeft - OPTION_LIST_Y_OFFSET, input.offsetLeft + rect.width - OPTION_LIST_MIN_WIDTH);

					if (slug.options.length > 1 || slug.options.length === 1 && slug.options[0].length !== slug.matchLength) {
						this.setState(_extends({ helperVisible: true, top: top, left: left }, slug));
					} else {
						if (!this.props.requestOnlyIfNoOptions || !slug.options.length) {
							this.props.onRequestOptions(str.substr(slug.matchStart, slug.matchLength));
						}

						this.resetHelper();
					}
				} else {
					this.resetHelper();
				}
			}
		}, {
			key: 'scrollLock',
			value: function scrollLock() {
				this.setState({ scrolling: true });
			}
		}, {
			key: 'resetScrollLock',
			value: function resetScrollLock() {
				this.setState({ scrolling: false });
			}
		}, {
			key: 'resetHelper',
			value: function resetHelper() {
				this.setState({ helperVisible: false, selection: 0 });
			}
		}, {
			key: 'checkScroll',
			value: function checkScroll() {
				this.scrollLock();
				var parentEl = document.getElementsByClassName('react-autocomplete-input');
				if (!parentEl.length) {
					return;
				}
				var el = parentEl[0].getElementsByClassName('active'),
				    parentCoords = parentEl[0].getBoundingClientRect(),
				    selectedCoords = el[0].getBoundingClientRect(),
				    top = selectedCoords.top,
				    bottom = selectedCoords.bottom;

				if (top < parentCoords.top + 60) {
					parentEl[0].scrollTop += top - parentCoords.top - 60;
				} else if (bottom > parentCoords.bottom - 60) {
					parentEl[0].scrollTop += bottom - parentCoords.bottom + 60;
				}
				this.debouncedResetScroll();
			}

			/* eslint-disable jsx-a11y/no-static-element-interactions */

		}, {
			key: 'renderAutocompleteList',
			value: function renderAutocompleteList() {
				var _this4 = this;

				if (!this.state.helperVisible) {
					return null;
				}

				var _state3 = this.state,
				    left = _state3.left,
				    matchLength = _state3.matchLength,
				    options = _state3.options,
				    selection = _state3.selection,
				    top = _state3.top;


				var optionNumber = this.props.maxOptions === 0 ? options.length : this.props.maxOptions;

				var helperOptions = options.slice(0, optionNumber).map(function (val, idx) {
					return _react2.default.createElement(
						'li',
						{
							className: idx === selection ? 'active' : null,
							key: val,
							onClick: function onClick() {
								_this4.handleSelection(idx);
							},
							onMouseEnter: function onMouseEnter() {
								if (!_this4.state.scrolling) {
									_this4.setState({ selection: idx });
								}
							}
						},
						_react2.default.createElement(
							'b',
							null,
							val.substr(0, matchLength)
						),
						val.substr(matchLength, val.length)
					);
				});

				return _react2.default.createElement(
					'ul',
					{ className: 'react-autocomplete-input', style: { left: left, top: top } },
					helperOptions
				);
			}

			/* eslint-enable jsx-a11y/no-static-element-interactions */

		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				var _props2 = this.props,
				    Component = _props2.Component,
				    defaultValue = _props2.defaultValue,
				    disabled = _props2.disabled,
				    value = _props2.value,
				    rest = _objectWithoutProperties(_props2, ['Component', 'defaultValue', 'disabled', 'value']);

				var propagated = Object.assign({}, rest);
				Object.keys(this.constructor.propTypes).forEach(function (k) {
					delete propagated[k];
				});

				var val = '';

				if (typeof value !== 'undefined' && value !== null) {
					val = value;
				} else if (this.state.value) {
					val = this.state.value;
				} else if (defaultValue) {
					val = defaultValue;
				}

				return _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(Component, _extends({
						disabled: disabled,
						onBlur: this.handleBlur,
						onChange: this.handleChange,
						onKeyDown: this.handleKeyDown,
						ref: function ref(c) {
							_this5.refInput = c;
						},
						value: val
					}, propagated)),
					this.renderAutocompleteList()
				);
			}
		}]);

		return AutocompleteTextField;
	}(_react2.default.Component);

	AutocompleteTextField.propTypes = propTypes;
	AutocompleteTextField.defaultProps = defaultProps;

	exports.default = AutocompleteTextField;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("get-input-selection");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("textarea-caret");

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ }
/******/ ]);