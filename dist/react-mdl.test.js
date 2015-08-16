System.register(["react/react.js", "react-mdl/react-mdl.min.js"], function (_export) {
  "use strict";

  var React, Layout, LayoutHeader, LayoutHeaderRow, LayoutTitle, Navigation, NavigationLink, LayoutTabBar, LayoutTab, LayoutTabPanel, LayoutDrawer, LayoutContent, LayoutIcon, LayoutSpacer, Grid, Cell, Tabs, TabBar, Tab, TabPanel, MegaFooter, MegaFooterSection, MegaFooterLinkList, MegaFooterSocialButton, MegaFooterHeading, MiniFooter, MiniFooterSection, MiniFooterLinkList, MiniFooterSocialButton, Logo, Component, Button, LinkButton, Icon, Card, CardTitle, CardTitleText, CardSubtitleText, CardMedia, CardSupportingText, CardActions, CardMenu, TestComponent;

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
      Tabs = _reactMdlReactMdlMinJs.Tabs;
      TabBar = _reactMdlReactMdlMinJs.TabBar;
      Tab = _reactMdlReactMdlMinJs.Tab;
      TabPanel = _reactMdlReactMdlMinJs.TabPanel;
      MegaFooter = _reactMdlReactMdlMinJs.MegaFooter;
      MegaFooterSection = _reactMdlReactMdlMinJs.MegaFooterSection;
      MegaFooterLinkList = _reactMdlReactMdlMinJs.MegaFooterLinkList;
      MegaFooterSocialButton = _reactMdlReactMdlMinJs.MegaFooterSocialButton;
      MegaFooterHeading = _reactMdlReactMdlMinJs.MegaFooterHeading;
      MiniFooter = _reactMdlReactMdlMinJs.MiniFooter;
      MiniFooterSection = _reactMdlReactMdlMinJs.MiniFooterSection;
      MiniFooterLinkList = _reactMdlReactMdlMinJs.MiniFooterLinkList;
      MiniFooterSocialButton = _reactMdlReactMdlMinJs.MiniFooterSocialButton;
      Logo = _reactMdlReactMdlMinJs.Logo;
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
              Layout,
              { fixedHeader: true },
              React.createElement(
                LayoutHeader,
                null,
                React.createElement(
                  LayoutHeaderRow,
                  null,
                  React.createElement(
                    LayoutTitle,
                    null,
                    "React MDL"
                  ),
                  React.createElement(LayoutSpacer, null)
                )
              ),
              React.createElement(
                LayoutContent,
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
                      { ripple: true },
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
                      { raised: true, ripple: true },
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
                      { fab: true, ripple: true },
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
                      { miniFab: true, ripple: true },
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
                      { icon: true, ripple: true },
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
                      { colored: true, ripple: true },
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
                      { colored: true, raised: true, ripple: true },
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
                      { colored: true, fab: true, ripple: true },
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
                      { colored: true, miniFab: true, ripple: true },
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
                      { colored: true, icon: true, ripple: true },
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
                      { primary: true, ripple: true },
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
                      { primary: true, raised: true, ripple: true },
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
                      { primary: true, fab: true, ripple: true },
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
                      { primary: true, miniFab: true, ripple: true },
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
                      { primary: true, icon: true, ripple: true },
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
                      { accent: true, ripple: true },
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
                      { accent: true, raised: true, ripple: true },
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
                      { accent: true, fab: true, ripple: true },
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
                      { accent: true, miniFab: true, ripple: true },
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
                      { accent: true, icon: true, ripple: true },
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
                      { raised: true, ripple: true, href: "http://getmdl.io", target: "_blank" },
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
                          { colored: true, ripple: true },
                          "Get Started"
                        )
                      ),
                      React.createElement(
                        CardMenu,
                        null,
                        React.createElement(
                          Button,
                          { icon: true, ripple: true },
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
                          { colored: true, ripple: true },
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
                          { colored: true, ripple: true },
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
                  Grid,
                  null,
                  React.createElement(Cell, { cols: "4" }),
                  React.createElement(
                    Cell,
                    { cols: "4" },
                    React.createElement(
                      Tabs,
                      null,
                      React.createElement(
                        TabBar,
                        null,
                        React.createElement(
                          Tab,
                          { href: "#starks-panel", active: true },
                          "Starks"
                        ),
                        React.createElement(
                          Tab,
                          { href: "#lannisters-panel" },
                          "Lannisters"
                        ),
                        React.createElement(
                          Tab,
                          { href: "#targaryens-panel" },
                          "Targaryens"
                        )
                      ),
                      React.createElement(
                        TabPanel,
                        { id: "starks-panel", active: true },
                        React.createElement(
                          "ul",
                          null,
                          React.createElement(
                            "li",
                            null,
                            "Eddard"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Catelyn"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Robb"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Sansa"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Brandon"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Arya"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Rickon"
                          )
                        )
                      ),
                      React.createElement(
                        TabPanel,
                        { id: "lannisters-panel" },
                        React.createElement(
                          "ul",
                          null,
                          React.createElement(
                            "li",
                            null,
                            "Tywin"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Cersei"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Jamie"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Tyrion"
                          )
                        )
                      ),
                      React.createElement(
                        TabPanel,
                        { id: "targaryens-panel" },
                        React.createElement(
                          "ul",
                          null,
                          React.createElement(
                            "li",
                            null,
                            "Viserys"
                          ),
                          React.createElement(
                            "li",
                            null,
                            "Daenerys"
                          )
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  MiniFooter,
                  null,
                  React.createElement(
                    MiniFooterSection,
                    { left: true },
                    React.createElement(
                      Logo,
                      null,
                      "Title"
                    ),
                    React.createElement(
                      MiniFooterLinkList,
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "#" },
                          "Help"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "#" },
                          "Privacy & Terms"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    MiniFooterSection,
                    { right: true },
                    React.createElement(MiniFooterSocialButton, null),
                    React.createElement(MiniFooterSocialButton, null),
                    React.createElement(MiniFooterSocialButton, null)
                  )
                )
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