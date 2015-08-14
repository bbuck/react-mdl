System.register(["react/react.js", "react-mdl/react-mdl.min.js"], function (_export) {
  "use strict";

  var React, Layout, LayoutHeader, LayoutHeaderRow, LayoutTitle, Navigation, NavigationLink, LayoutTabBar, LayoutTab, LayoutTabPanel, LayoutDrawer, LayoutContent, LayoutIcon, LayoutSpacer, Grid, Cell, Component, Button, LinkButton, Icon, Card, CardTitle, CardTitleText, CardSubtitleText, CardMedia, CardSupportingText, CardActions, CardMenu, TestComponent;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_reactReactJs) {
      React = _reactReactJs["default"];
    }, function (_reactMdlReactMdlMinJs) {
      Layout = _reactMdlReactMdlMinJs.Layout;
      LayoutHeader = _reactMdlReactMdlMinJs.LayoutHeader;
      LayoutHeaderRow = _reactMdlReactMdlMinJs.LayoutHeaderRow;
      LayoutTitle = _reactMdlReactMdlMinJs.LayoutTitle;
      Navigation = _reactMdlReactMdlMinJs.Navigation;
      NavigationLink = _reactMdlReactMdlMinJs.NavigationLink;
      LayoutTabBar = _reactMdlReactMdlMinJs.LayoutTabBar;
      LayoutTab = _reactMdlReactMdlMinJs.LayoutTab;
      LayoutTabPanel = _reactMdlReactMdlMinJs.LayoutTabPanel;
      LayoutDrawer = _reactMdlReactMdlMinJs.LayoutDrawer;
      LayoutContent = _reactMdlReactMdlMinJs.LayoutContent;
      LayoutIcon = _reactMdlReactMdlMinJs.LayoutIcon;
      LayoutSpacer = _reactMdlReactMdlMinJs.LayoutSpacer;
      Grid = _reactMdlReactMdlMinJs.Grid;
      Cell = _reactMdlReactMdlMinJs.Cell;
      Component = _reactMdlReactMdlMinJs.Component;
      Button = _reactMdlReactMdlMinJs.Button;
      LinkButton = _reactMdlReactMdlMinJs.LinkButton;
      Icon = _reactMdlReactMdlMinJs.Icon;
      Card = _reactMdlReactMdlMinJs.Card;
      CardTitle = _reactMdlReactMdlMinJs.CardTitle;
      CardTitleText = _reactMdlReactMdlMinJs.CardTitleText;
      CardSubtitleText = _reactMdlReactMdlMinJs.CardSubtitleText;
      CardMedia = _reactMdlReactMdlMinJs.CardMedia;
      CardSupportingText = _reactMdlReactMdlMinJs.CardSupportingText;
      CardActions = _reactMdlReactMdlMinJs.CardActions;
      CardMenu = _reactMdlReactMdlMinJs.CardMenu;
    }],
    execute: function () {
      TestComponent = (function (_React$Component) {
        _inherits(TestComponent, _React$Component);

        function TestComponent() {
          _classCallCheck(this, TestComponent);

          _get(Object.getPrototypeOf(TestComponent.prototype), "constructor", this).apply(this, arguments);
        }

        _createClass(TestComponent, [{
          key: "render",
          value: function render() {
            return React.createElement(
              "div",
              null,
              React.createElement(
                Grid,
                null,
                React.createElement(
                  Cell,
                  { cols: "12" },
                  React.createElement(
                    Icon,
                    { badge: "10" },
                    "account_box"
                  )
                )
              ),
              React.createElement(
                Grid,
                null,
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    null,
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { applyRipple: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { raised: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { raised: true, applyRipple: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { fab: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { fab: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { miniFab: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { miniFab: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { icon: true },
                    React.createElement(
                      Icon,
                      null,
                      "mood"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { icon: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "mood"
                    )
                  )
                )
              ),
              React.createElement(
                Grid,
                null,
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, applyRipple: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, raised: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, raised: true, applyRipple: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, fab: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, fab: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, miniFab: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, miniFab: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, icon: true },
                    React.createElement(
                      Icon,
                      null,
                      "mood"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { colored: true, icon: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "mood"
                    )
                  )
                )
              ),
              React.createElement(
                Grid,
                null,
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, applyRipple: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, raised: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, raised: true, applyRipple: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, fab: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, fab: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, miniFab: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, miniFab: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, icon: true },
                    React.createElement(
                      Icon,
                      null,
                      "mood"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { primary: true, icon: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "mood"
                    )
                  )
                )
              ),
              React.createElement(
                Grid,
                null,
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, applyRipple: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, raised: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, raised: true, applyRipple: true },
                    "Click Me"
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, fab: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, fab: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, miniFab: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, miniFab: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "add"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, icon: true },
                    React.createElement(
                      Icon,
                      null,
                      "mood"
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "1", middle: true },
                  React.createElement(
                    Button,
                    { accent: true, icon: true, applyRipple: true },
                    React.createElement(
                      Icon,
                      null,
                      "mood"
                    )
                  )
                )
              ),
              React.createElement(
                Grid,
                null,
                React.createElement(
                  Cell,
                  { cols: "4" },
                  React.createElement(
                    LinkButton,
                    { raised: true, applyRipple: true, href: "http://getmdl.io", target: "_blank" },
                    "Get MDL"
                  )
                )
              ),
              React.createElement(
                Grid,
                null,
                React.createElement(
                  Cell,
                  { cols: "4" },
                  React.createElement(
                    Card,
                    { className: "demo-card-wide", shadow: "2" },
                    React.createElement(
                      CardTitle,
                      null,
                      React.createElement(
                        CardTitleText,
                        { h: "2" },
                        "Welcome"
                      )
                    ),
                    React.createElement(
                      CardSupportingText,
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                    ),
                    React.createElement(
                      CardActions,
                      { border: true },
                      React.createElement(
                        Button,
                        { colored: true, applyRipple: true },
                        "Get Started"
                      )
                    ),
                    React.createElement(
                      CardMenu,
                      null,
                      React.createElement(
                        Button,
                        { icon: true, applyRipple: true },
                        React.createElement(
                          Icon,
                          null,
                          "share"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "3" },
                  React.createElement(
                    Card,
                    { className: "demo-card-square", shadow: "4" },
                    React.createElement(
                      CardTitle,
                      { expand: true },
                      React.createElement(
                        CardTitleText,
                        { h: "2" },
                        "Update"
                      )
                    ),
                    React.createElement(
                      CardSupportingText,
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis."
                    ),
                    React.createElement(
                      CardActions,
                      { border: true },
                      React.createElement(
                        LinkButton,
                        { colored: true, applyRipple: true },
                        "View Updates"
                      )
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "2" },
                  React.createElement(
                    Card,
                    { className: "demo-card-image", shadow: "6" },
                    React.createElement(CardTitle, { expand: true }),
                    React.createElement(
                      CardActions,
                      null,
                      React.createElement(
                        "span",
                        { className: "demo-card-image__filename" },
                        "Image.jpg"
                      )
                    )
                  )
                ),
                React.createElement(
                  Cell,
                  { cols: "3" },
                  React.createElement(
                    Card,
                    { className: "demo-card-event", shadow: "8" },
                    React.createElement(
                      CardTitle,
                      { expand: true },
                      React.createElement(CardTitleText, { h: "4", dangerouslySetInnerHTML: { __html: "Featured event:<br />May 24, 2016<br />7-11pm" } })
                    ),
                    React.createElement(
                      CardActions,
                      { border: true },
                      React.createElement(
                        LinkButton,
                        { colored: true, applyRipple: true },
                        "Add to Calendar"
                      ),
                      React.createElement(LayoutSpacer, null),
                      React.createElement(
                        Icon,
                        null,
                        "event"
                      )
                    )
                  )
                )
              ),
              React.createElement(
                Layout,
                { fixedHeader: true, fixedDrawer: true },
                React.createElement(
                  LayoutHeader,
                  null,
                  React.createElement(
                    LayoutHeaderRow,
                    null,
                    React.createElement(LayoutSpacer, null),
                    React.createElement(
                      "div",
                      { className: "mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right" },
                      React.createElement(
                        "label",
                        { className: "mdl-button mdl-js-button mdl-button--icon", htmlFor: "fixed-header-drawer-exp" },
                        React.createElement(
                          Icon,
                          null,
                          "search"
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "mdl-textfield__expandable-holder" },
                        React.createElement("input", { className: "mdl-textfield__input", type: "text", name: "sample", id: "fixed-header-drawer-exp" })
                      )
                    )
                  )
                ),
                React.createElement(
                  LayoutDrawer,
                  null,
                  React.createElement(
                    LayoutTitle,
                    null,
                    "Title"
                  ),
                  React.createElement(
                    Navigation,
                    null,
                    React.createElement(
                      NavigationLink,
                      { href: "" },
                      "Link"
                    ),
                    React.createElement(
                      NavigationLink,
                      { href: "" },
                      "Link"
                    ),
                    React.createElement(
                      NavigationLink,
                      { href: "" },
                      "Link"
                    ),
                    React.createElement(
                      NavigationLink,
                      { href: "" },
                      "Link"
                    )
                  )
                ),
                React.createElement(LayoutContent, null)
              )
            );
          }
        }]);

        return TestComponent;
      })(React.Component);

      React.render(React.createElement(TestComponent, null), document.querySelector("#app-main"));
    }
  };
});