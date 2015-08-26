import React from "react/react.js";

const EventNames = [
  "onCopy", "onCut", "onPaste", "DOMDataTransfer", "clipboardData", "onKeyDown",
  "onKeyPress", "onKeyUp", "onFocus", "onBlur", "DOMEventTarget", "relatedTarget",
  "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick",
  "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver",
  "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave",
  "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel",
  "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onLoad",
  "onError"
];

// ***************************************************************************
// Base Components
// ***************************************************************************

class BaseComponent extends React.Component {
  getExcludedProperties() {
    return ["children"];
  }

  getRenderProperties() {
    let props = this.getElementProperties();
    props.className = props.className.join(" ");

    return props;
  }

  getElementProperties() {
    const exclude = this.getExcludedProperties();
    let props = {};

    Object.keys(this.props).map(key => {
      const value = this.props[key];

      if (exclude.indexOf(key) < 0) {
        props[key] = value;
      }
    });

    props.className = (props.className ? props.className.split(/\s+/) : []);

    return props;
  }

  // Default render
  render() {
    return (
      <div {...this.getRenderProperties()}>
        {this.props.children}
      </div>
    )
  }
}

class UpgradingBaseComponent extends BaseComponent {
  componentDidMount() {
    if (componentHandler && componentHandler.upgradeElement) {
      componentHandler.upgradeElement(React.findDOMNode(this));
    }
  }
}

export class Component extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["badge", "display", "transparentBadge"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();

    if (this.props.badge) {
      props.className.push("mdl-badge");
      props["data-badge"] = this.props.badge;

      if (this.props.transparentBadge) {
        props.className.push("mdl-badge--no-background");
      }
    }

    if (this.props.display) {
      if (["headline", "title"].indexOf(this.props.display) >= 0) {
        props.className.push(`mdl-typography--${this.props.display}`);
      } else {
        props.className.push(`mdl-typography--display-${this.props.display}`);
      }
    }

    return props;
  }
}

class UpgradingComponent extends Component {
  componentDidMount() {
    if (componentHandler && componentHandler.upgradeElement) {
      componentHandler.upgradeElement(React.findDOMNode(this));
    }
  }
}

export class Icon extends Component {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("material-icons");

    return props;
  }

  render() {
    return (
      <i {...this.getRenderProperties()}>{this.props.children}</i>
    );
  }
}

class BaseInputWrapper extends UpgradingComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(EventNames.concat(["disabled"]));
  }

  getInputProperties(additional) {
    const find = EventNames.concat(additional || []).concat(["disabled"]);
    let inputProps = {};

    find.forEach(key => {
      if (this.props[key]) {
        inputProps[key] = this.props[key];
      }
    });

    return inputProps;
  }
}

// ***************************************************************************
// Layout Components
// ***************************************************************************

export class Layout extends UpgradingBaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["fixedDrawer", "fixedHeader", "fixedTabs"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout", "mdl-js-layout", "mdl-layout--overlay-drawer-button");

    if (this.props.fixedDrawer) {
      props.className.push("mdl-layout--fixed-drawer");
    }

    if (this.props.fixedHeader) {
      props.className.push("mdl-layout--fixed-header");
    }

    if (this.props.fixedTabs) {
      props.className.push("mdl-layout--fixed-tabs");
    }

    return props;
  }
}

export class LayoutHeader extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["scroll", "waterfall", "transparent"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout__header");

    if (this.props.scroll) {
      props.className.push("mdl-layout__header--scroll");
    }

    if (this.props.waterfall) {
      props.className.push("mdl-layout__header--waterfall");
    }

    if (this.props.transparent) {
      props.className.push("mdl-layout__header--transparent");
    }

    return props;
  }

  render() {
    return (
      <header {...this.getRenderProperties()}>
        {this.props.children}
      </header>
    );
  }
}

export class LayoutHeaderRow extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout__header-row");

    return props;
  }
}

export class LayoutTitle extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout-title");

    return props;
  }

  render() {
    return (
      <span {...this.getRenderProperties()}>
        {this.props.children}
      </span>
    );
  }
}

export class Navigation extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["largeScreenOnly"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-navigation");

    if (this.props.largeScreenOnly) {
      props.className.push("mdl-layout--large-screen-only");
    }

    return props;
  }

  render() {
    return (
      <nav {...this.getRenderProperties()}>
        {this.props.children}
      </nav>
    );
  }
}

export class NavigationLink extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-navigation__link");

    return props;
  }

  render() {
    return (
      <a {...this.getRenderProperties()}>
        {this.props.children}
      </a>
    );
  }
}

export class LayoutTabBar extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout__tab-bar");

    return props;
  }
}

export class LayoutTab extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["active"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout__tab");

    if (this.props.active) {
      props.className.push("is-active");
    }

    return props;
  }

  render() {
    return (
      <a {...this.getRenderProperties()}>
        {this.props.children}
      </a>
    );
  }
}

export class LayoutTabPanel extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["active"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout__tab-panel");

    if (this.props.active) {
      props.className.push("is-active");
    }

    return props;
  }

  render() {
    return (
      <section {...this.getRenderProperties()}>
        {this.props.children}
      </section>
    );
  }
}

export class LayoutDrawer extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout__drawer");

    return props;
  }
}

export class LayoutContent extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout__content");

    return props;
  }

  render() {
    return (
      <main {...this.getRenderProperties()}>
        {this.props.children}
      </main>
    );
  }
}

export class LayoutIcon extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout-icon");

    return props;
  }
}

export class LayoutSpacer extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-layout-spacer");

    return props;
  }
}

export class Grid extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["noSpacing"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-grid");

    if (this.props.noSpacing) {
      props.className.push("mdl-grid--no-spacing");
    }

    return props;
  }
}

export class Cell extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(Object.keys(Cell.ClassMapping));
  }

  getElementProperties() {
    let props = super.getElementProperties(),
        key, value;

    props.className.push("mdl-cell");

    for (key in Cell.ClassMapping) {
      value = Cell.ClassMapping[key];

      if (this.props[key]) {
        if (typeof value === "function") {
          props.className.push(value(this.props[key]));
        } else {
          props.className.push(value);
        }
      }
    }

    return props;
  }
}

Cell.ClassMapping = {
  "hideDesktop": "mdl-cell--hide-desktop",
  "hideTablet": "mdl-cell--hide-tablet",
  "hidePhone": "mdl-cell--hide-phone",
  "stretch": "mdl-cell--stretch",
  "top": "mdl-cell--top",
  "middle": "mdl-cell--middle",
  "bottom": "mdl-cell--bottom",
  "cols": n => `mdl-cell--${n}-col`,
  "desktopCols": n => `mdl-cell--${n}-col-desktop`,
  "tabletCols": n => `mdl-cell--${n}-col-tablet`,
  "phoneCols": n => `mdl-cell--${n}-col-phone`
};

// ***************************************************************************
// Usability/Control Components
// ***************************************************************************

export class Button extends UpgradingComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["raised", "fab", "miniFab", "icon", "colored", "primary", "accent", "ripple"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();

    // MDL Base button classes
    props.className.push("mdl-button", "mdl-js-button");

    // The following are mutually exclusive, hence switch
    switch (true) {
    case !!this.props.raised:
      props.className.push("mdl-button--raised");
      break;
    case !!this.props.fab:
      props.className.push("mdl-button--fab");
      break;
    case !!this.props.miniFab:
      props.className.push("mdl-button--fab", "mdl-button--mini-fab");
      break;
    case !!this.props.icon:
      props.className.push("mdl-button--icon");
      break;
    }

    ["colored", "primary", "accent"].forEach(name => {
      if (this.props[name]) {
        props.className.push(`mdl-button--${name}`);
      }
    });

    if (this.props.ripple) {
      props.className.push("mdl-js-ripple-effect");
    }

    return props;
  }

  render() {
    return (
      <button {...this.getRenderProperties()}>
        {this.props.children}
      </button>
    );
  }
}

export class LinkButton extends Button {
  render() {
    return (
      <a {...this.getRenderProperties()}>
        {this.props.children}
      </a>
    );
  }
}

export class LabelButton extends Button {
  render() {
    return (
      <label {...this.getRenderProperties()}>
        {this.props.children}
      </label>
    );
  }
}

// ***************************************************************************
// Card Components
// ***************************************************************************

export class Card extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["shadow"])
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-card");

    if (this.props.shadow) {
      props.className.push(`mdl-shadow--${this.props.shadow}dp`);
    }

    return props;
  }
}

class CardComponent extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["border", "expand"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();

    ["border", "expand"].forEach(name => {
      if (this.props[name]) {
        props.className.push(`mdl-card--${name}`);
      }
    })

    return props;
  }
}

class UpgradingCardComponent extends CardComponent {
  componentDidMount() {
    if (componentHandler && componentHandler.upgradeElement) {
      componentHandler.upgradeElement(React.findDOMNode(this));
    }
  }
}

export class CardTitle extends CardComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-card__title");

    return props;
  }
}

export class CardTitleText extends CardComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["h"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-card__title-text");

    return props;
  }

  render() {
    switch (this.props.h) {
      case "6":
        return <h6 {...this.getRenderProperties()}>{this.props.children}</h6>;
      case "5":
        return <h5 {...this.getRenderProperties()}>{this.props.children}</h5>;
      case "4":
        return <h4 {...this.getRenderProperties()}>{this.props.children}</h4>;
      case "3":
        return <h3 {...this.getRenderProperties()}>{this.props.children}</h3>;
      case "2":
        return <h2 {...this.getRenderProperties()}>{this.props.children}</h2>;
      default:
        return <h1 {...this.getRenderProperties()}>{this.props.children}</h1>;
    }
  }
}

export class CardSubtitleText extends CardComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-card__subtitle-text");

    return props;
  }
}

export class CardMedia extends CardComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-card__media");

    return props;
  }
}

export class CardSupportingText extends CardComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-card__supporting-text");

    return props;
  }
}

export class CardActions extends CardComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-card__actions");

    return props;
  }
}

export class CardMenu extends UpgradingCardComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-card__menu");

    return props;
  }
}

// ***************************************************************************
// Tabs
// ***************************************************************************

export class Tabs extends UpgradingBaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["ripple"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-tabs", "mdl-js-tabs");

    if (this.props.ripple) {
      props.className.push("mdl-js-ripple-effect");
    }

    return props;
  }
}

export class TabBar extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-tabs__tab-bar");

    return props;
  }
}

export class Tab extends Component {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["active"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-tabs__tab");

    if (this.props.active) {
      props.className.push("is-active");
    }

    return props;
  }

  render() {
    return (
      <a {...this.getRenderProperties()}>
        {this.props.children}
      </a>
    );
  }
}

export class TabPanel extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["active"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-tabs__panel");

    if (this.props.active) {
      props.className.push("is-active");
    }

    return props;
  }
}

// ***************************************************************************
// Footers
// ***************************************************************************

export class MegaFooter extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-mega-footer");

    return props;
  }

  render() {
    return (
      <footer {...this.getRenderProperties()}>
        {this.props.children}
      </footer>
    );
  }
}

export class MegaFooterSection extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["top", "middle", "bottom", "left", "right", "dropDown"]);
  }

  getElementProperties() {
    let props = super.getElementProperties(),
        section;

    switch (true) {
      case this.props.middle:
        section = "middle";
        break;
      case this.props.bottom:
        section = "bottom";
        break;
      case this.props.left:
        section = "left";
        break;
      case this.props.right:
        section = "right";
        break;
      case this.props.dropDown:
        section = "drop-down";
        break;
      default:
        section = "top";
        break;
    }
    props.className.push(`mdl-mega-footer__${section}-section`);

    return props;
  }
}

export class MegaFooterHeading extends Component {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-mega-footer__heading");

    return props;
  }

  render() {
    return (
      <h1 {...this.getRenderProperties()}>
        {this.props.children}
      </h1>
    );
  }
}

export class MegaFooterSocialButton extends Component {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-mega-footer__social-button");

    return props;
  }

  render() {
    return (
      <button {...this.getRenderProperties()}>
        {this.props.children}
      </button>
    );
  }
}

export class MegaFooterLinkList extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-mega-footer__link-list");

    return props;
  }

  render() {
    return (
      <ul {...this.getRenderProperties()}>
        {this.props.children}
      </ul>
    );
  }
}

export class Logo extends Component {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-logo");

    return props;
  }
}

export class MiniFooter extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-mini-footer");

    return props;
  }

  render() {
    return (
      <footer {...this.getRenderProperties()}>
        {this.props.children}
      </footer>
    );
  }
}

export class MiniFooterSection extends BaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["left", "right"]);
  }

  getElementProperties() {
    let props = super.getElementProperties(),
        section;

    switch (true) {
      case this.props.right:
        section = "right";
        break;
      default:
        section = "left";
        break;
    }
    props.className.push(`mdl-mini-footer__${section}-section`);

    return props;
  }
}

export class MiniFooterLinkList extends BaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-mini-footer__link-list");

    return props;
  }

  render() {
    return (
      <ul {...this.getRenderProperties()}>
        {this.props.children}
      </ul>
    );
  }
}

export class MiniFooterSocialButton extends Component {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-mini-footer__social-button");

    return props;
  }

  render() {
    return (
      <button {...this.getRenderProperties()}>
        {this.props.children}
      </button>
    );
  }
}

// ***************************************************************************
// Progress
// ***************************************************************************

export class ProgressBar extends UpgradingBaseComponent {
  componentDidMount() {
    super.componentDidMount();

    var domEl = React.findDOMNode(this);
    if (domEl.MaterialProgress) {
      if (this.props.progress) {
        domEl.MaterialProgress.setProgress(parseFloat(this.props.progress));
      }

      if (this.props.buffer) {
        domEl.MaterialProgress.setBuffer(parseFloat(this.props.buffer));
      }
    } else {
      if (console && console.warn && typeof console.warn === "function") {
        console.warn("ProgressBar was not properly upgraded to MaterialProgress");
      }
    }
  }

  getExcludedProperties() {
    return super.getExcludedProperties().concat(["indeterminate", "progress", "buffer"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-progress", "mdl-js-progress");

    if (this.props.indeterminate) {
      props.className.push("mdl-progress__indeterminate");
    }

    return props;
  }
}

export class Spinner extends UpgradingBaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["singleColor", "active"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-spinner", "mdl-js-spinner");

    if (this.props.active) {
      props.className.push("is-active");
    }

    if (this.props.singleColor) {
      props.className.push("mdl-spinner--single-color");
    }

    return props;
  }
}

// ***************************************************************************
// Menus
// ***************************************************************************

export class MenuButton extends Button {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-button--icon");

    return props;
  }

  render() {
    return (
      <button {...this.getRenderProperties()}>
        <Icon>{this.props.icon || "more_vert"}</Icon>
      </button>
    );
  }
}

export class Menu extends UpgradingBaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["ripple", "topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-menu", "mdl-js-menu");

    if (this.props.ripple) {
      props.className.push("mdl-js-ripple-effect");
    }

    switch (true) {
      case this.props.topLeft:
        props.className.push("mdl-menu--top-left");
        break;
      case this.props.topRight:
        props.className.push("mdl-menu--top-right");
        break;
      case this.props.bottomRight:
        props.className.push("mdl-menu--bottom-right");
        break;
    }

    return props;
  }

  render() {
    return (
      <ul {...this.getRenderProperties()}>
        {this.props.children}
      </ul>
    );
  }
}

export class MenuItem extends Component {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-menu__item");

    return props;
  }

  render() {
    return (
      <li {...this.getRenderProperties()}>
        {this.props.children}
      </li>
    );
  }
}

// ***************************************************************************
// Slider
// ***************************************************************************

export class Slider extends UpgradingBaseComponent {
  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-slider", "mdl-js-slider");
    props.type = "range";

    return props;
  }

  render() {
    return <input {...this.getRenderProperties()} />;
  }
}

// ***************************************************************************
// Toggle
// ***************************************************************************

export class Checkbox extends BaseInputWrapper {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["id", "name", "ripple", "label", "checked", "defaultChecked"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-checkbox", "mdl-js-checkbox");

    if (this.props.ripple) {
      props.className.push("mdl-js-ripple-effect");
    }

    return props;
  }

  render() {
    let inputProps = this.getInputProperties(["name", "id"]);
    if (this.props.checked || this.props.defaultChecked) {
      inputProps.defaultChecked = true;
    }

    return (
      <label htmlFor={this.props.id} {...this.getRenderProperties()}>
        <input type="checkbox" className="mdl-checkbox__input" {...inputProps} />
        <span className="mdl-checkbox__label">{this.props.label}</span>
      </label>
    );
  }
}

export class Radio extends BaseInputWrapper {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["label", "ripple", "id", "name", "checked", "defaultChecked"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-radio", "mdl-js-radio");

    if (this.props.ripple) {
      props.className.push("mdl-js-ripple-effect");
    }

    return props;
  }

  render() {
    let inputProps = this.getInputProperties(["id", "name", "value"]);
    if (this.props.checked || this.props.defaultChecked) {
      inputProps.defaultChecked = true;
    }

    return (
      <label htmlFor={this.props.id} {...this.getRenderProperties()}>
        <input className="mdl-radio__button" type="radio" {...inputProps} />
        <span className="mdl-radio__label">{this.props.label}</span>
      </label>
    );
  }
}

export class IconToggle extends BaseInputWrapper {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["id", "name", "ripple", "checked", "defaultChecked"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-icon-toggle", "mdl-js-icon-toggle");

    if (this.props.ripple) {
      props.className.push("mdl-js-ripple-effect");
    }

    return props;
  }

  render() {
    let inputProps = this.getInputProperties(["id", "name"]);
    if (this.props.checked || this.props.defaultChecked) {
      inputProps.defaultChecked = true;
    }

    return (
      <label htmlFor={this.props.id} {...this.getRenderProperties()}>
        <input className="mdl-icon-toggle__input" type="checkbox" {...inputProps} />
        <Icon className="mdl-icon-toggle__label">{this.props.children}</Icon>
      </label>
    );
  }
}

export class Switch extends BaseInputWrapper {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["id", "name", "checked", "defaltChecked", "label", "ripple"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-switch", "mdl-js-switch");

    if (this.props.ripple) {
      props.className.push("mdl-js-ripple-effect");
    }

    return props;
  }

  render() {
    let inputProps = this.getInputProperties(["id", "name"]);
    if (this.props.checked || this.props.defaultChecked) {
      inputProps.defaultChecked = true;
    }

    return (
      <label htmlFor={this.props.id} {...this.getRenderProperties()}>
        <input className="mdl-switch__input" type="checkbox" {...inputProps} />
        <span className="mdl-switch__label">{this.props.label}</span>
      </label>
    );
  }
}

// ***************************************************************************
// Tables
// ***************************************************************************

export class Table extends UpgradingBaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["selectable"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-data-table", "mdl-js-data-table");

    if (this.props.selectable) {
      props.className.push("mdl-data-table--selectable");
    }

    return props;
  }

  render() {
    return (
      <table {...this.getRenderProperties()}>
        {this.props.children}
      </table>
    );
  }
}

export class TH extends Component {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["numeric"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();

    if (!this.props.numeric) {
      props.className.push("mdl-data-table__cell--non-numeric");
    }

    return props;
  }

  render() {
    return (
      <th {...this.getRenderProperties()}>
        {this.props.children}
      </th>
    );
  }
}

export class TD extends TH {
  render() {
    return (
      <td {...this.getRenderProperties()}>
        {this.props.children}
      </td>
    );
  }
}

// ***************************************************************************
// Text Fields
// ***************************************************************************

export class TextField extends BaseInputWrapper {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["id", "name", "value", "label", "pattern", "error", "floatingLabel"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-textfield", "mdl-js-textfield");

    if (this.props.floatingLabel) {
      props.className.push("mdl-textfield--floating-label");
    }

    return props;
  }

  render() {
    let inputProps = this.getInputProperties(["value", "id", "name", "pattern"]),
        error = this.props.error ? (<span className="mdl-textfield__error">{this.props.error}</span>) : null;

    return (
      <div {...this.getRenderProperties()}>
        <input type="text" className="mdl-textfield__input" {...inputProps} />
        <label htmlFor={this.props.id} className="mdl-textfield__label">{this.props.label}</label>
        {error}
      </div>
    );
  }
}

export class ExpandingTextField extends TextField {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["icon"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-textfield--expandable");

    return props;
  }

  render() {
    let inputProps = this.getInputProperties(["value", "id", "name", "pattern"]);

    return (
      <div {...this.getRenderProperties()}>
        <LabelButton icon htmlFor={this.props.id}>
          <Icon>{this.props.icon}</Icon>
        </LabelButton>
        <div className="mdl-textfield__expandable-holder">
          <input type="text" className="mdl-textfield__input" {...inputProps} />
          <label htmlFor={this.props.id} className="mdl-textfield__label">{this.props.label}</label>
        </div>
      </div>
    );
  }
}

export class TextArea extends TextField {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["rows", "cols"]);
  }

  render() {
    let inputProps = this.getInputProperties(["id", "name", "rows", "cols"]),
        error = this.props.error ? (<span className="mdl-textfield__error">{this.props.error}</span>) : null;

    return (
      <div {...this.getRenderProperties()}>
        <textarea className="mdl-textfield__input" {...inputProps}>{this.props.children}</textarea>
        <label htmlFor={this.props.id} className="mdl-textfield__label">{this.props.label}</label>
        {error}
      </div>
    );
  }
}

// ***************************************************************************
// Tooltip
// ***************************************************************************

export class Tooltip extends UpgradingBaseComponent {
  getExcludedProperties() {
    return super.getExcludedProperties().concat(["large"]);
  }

  getElementProperties() {
    let props = super.getElementProperties();
    props.className.push("mdl-tooltip");

    if (this.props.large) {
      props.className.push("mdl-tooltip--large");
    }

    return props;
  }
}
