System.register([], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define(["exports", "react/react.min.js", "react-mdl/react-mdl.min.js"], factory);
        } else if (typeof exports !== "undefined") {
          factory(exports, require("react/react.min.js"), require("react-mdl/react-mdl.min.js"));
        } else {
          var mod = {
            exports: {}
          };
          factory(mod.exports, global.React, global.MDLComponent);
          global.MDLButton = mod.exports;
        }
      })(undefined, function (exports, _reactReactMinJs, _reactMdlReactMdlMinJs) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        })();

        var _get = function get(_x, _x2, _x3) {
          var _again = true;_function: while (_again) {
            var object = _x,
                property = _x2,
                receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);if (parent === null) {
                return undefined;
              } else {
                _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;if (getter === undefined) {
                return undefined;
              }return getter.call(receiver);
            }
          }
        };

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var _React = _interopRequireDefault(_reactReactMinJs);

        var _MDLComponent2 = _interopRequireDefault(_reactMdlReactMdlMinJs);

        var MDLButton = (function (_MDLComponent) {
          _inherits(MDLButton, _MDLComponent);

          function MDLButton() {
            _classCallCheck(this, MDLButton);

            _get(Object.getPrototypeOf(MDLButton.prototype), "constructor", this).apply(this, arguments);
          }

          _createClass(MDLButton, [{
            key: "getElementProperties",
            value: function getElementProperties() {
              var _this = this;

              var properties = _get(Object.getPrototypeOf(MDLButton.prototype), "getElementProperties", this).call(this);

              // MDL Base button classes
              properties.className.concat(["mdl-button", "mdl-js-button"]);

              // The following are mutually exclusive, hence switch
              switch (true) {
                case !!this.props.raised:
                  properties.className.push("mdl-button--raised");
                  break;
                case !!this.props.fab:
                  properties.className.push("mdl-button--fab");
                  break;
                case !!this.props.miniFab:
                  properties.className.push("mdl-button--mini-fab");
                  break;
                case !!this.props.icon:
                  properties.className.push("mdl-button--icon");
                  break;
              }

              ["colored", "primary", "accent"].forEach(function (name) {
                if (_this.props[name]) {
                  properties.className.push("mdl-button--" + _this.props["name"]);
                }
              });

              if (this.props.applyRipple) {
                properties.push("mdl-js-ripple-effect");
              }

              return properties;
            }
          }, {
            key: "render",
            value: function render() {
              return _React["default"].createElement("button", this.getElementProperties(), this.props.children);
            }
          }]);

          return MDLButton;
        })(_MDLComponent2["default"]);

        exports.MDLButton = MDLButton;
      });
    }
  };
});