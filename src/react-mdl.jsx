import React from "react/react.js";

const componentHandlerDefined = window.componentHandler && window.componentHandler && typeof window.componentHandler.upgradeElement === "function",
      componentHandler = window.componentHandler;

setInterval(function() {
  if (componentHandlerDefined) {
    componentHandler.upgradeDom();
  }
}, 1000);

// ***************************************************************************
// Base Components
// ***************************************************************************

class BaseComponent extends React.Component {
  getExcludedProperties() {
    return ["children"];
  }

  getElementProperties() {
    const exclude = this.getExcludedProperties();
    let properties = {};

    Object.keys(this.props).map(key => {
      const value = this.props[key];

      if (exclude.indexOf(key) < 0) {
        properties[key] = value;
      }
    });

    properties.className = (properties.className ? properties.className.split(/\s+/) : []);

    return properties;
  }

  // Default render
  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <div {...properties}>
        {this.props.children}
      </div>
    )
  }
}

export class Component extends BaseComponent {
  getExcludedProperties() {
    return ["badge"];
  }

  getElementProperties() {
    let properties = super.getElementProperties();

    if (this.props.badge) {
      properties.className.push("mdl-badge");
      properties["data-badge"] = this.props.badge;

      if (this.props.transparentBadge) {
        properties.className.push("mdl-badge--no-background");
      }
    }

    return properties;
  }
}

export class Icon extends Component {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("material-icons");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <i {...properties}>{this.props.children}</i>
    );
  }
}

// ***************************************************************************
// Layout Components
// ***************************************************************************

export class Layout extends BaseComponent {
  getExcludedProperties() {
    let excluded = ["fixedDrawer", "fixedHeader", "fixedTabs"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className = properties.className.concat(["mdl-layout", "mdl-js-layout", "mdl-layout--overlay-drawer-button"]);

    if (this.props.fixedDrawer) {
      properties.className.push("mdl-layout--fixed-drawer");
    }

    if (this.props.fixedHeader) {
      properties.className.push("mdl-layout--fixed-header");
    }

    if (this.props.fixedTabs) {
      properties.className.push("mdl-layout--fixed-tabs");
    }

    return properties;
  }
}

export class LayoutHeader extends BaseComponent {
  getExcludedProperties() {
    let excluded = ["scroll", "waterfall", "transparent"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout__header");

    if (this.props.scroll) {
      properties.className.push("mdl-layout__header--scroll");
    }

    if (this.props.waterfall) {
      properties.className.push("mdl-layout__header--waterfall");
    }

    if (this.props.transparent) {
      properties.className.push("mdl-layout__header--transparent");
    }

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <header {...properties}>
        {this.props.children}
      </header>
    );
  }
}

export class LayoutHeaderRow extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout__header-row");

    return properties;
  }
}

export class LayoutTitle extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout-title");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <span {...properties}>
        {this.props.children}
      </span>
    );
  }
}

export class Navigation extends BaseComponent {
  getExcludedProperties() {
    let excluded = ["largeScreenOnly"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-navigation");

    if (this.props.largeScreenOnly) {
      properties.className.push("mdl-layout--large-screen-only");
    }

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <nav {...properties}>
        {this.props.children}
      </nav>
    );
  }
}

export class NavigationLink extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-navigation__link");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <a {...properties}>
        {this.props.children}
      </a>
    );
  }
}

export class LayoutTabBar extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout__tab-bar");

    return properties;
  }
}

export class LayoutTab extends BaseComponent {
  getExcludedProperties() {
    const excluded = ["active"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout__tab");

    if (this.props.active) {
      properties.className.push("is-active");
    }

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <a {...properties}>
        {this.props.children}
      </a>
    );
  }
}

export class LayoutTabPanel extends BaseComponent {
  getExcludedProperties() {
    const excluded = ["active"];

    return super.getExcludedProperties().concat(exclude);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout__tab-panel");

    if (this.props.active) {
      properties.className.push("is-active");
    }

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <section {...properties}>
        {this.props.children}
      </section>
    );
  }
}

export class LayoutDrawer extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout__drawer");

    return properties;
  }
}

export class LayoutContent extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout__content");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <main {...properties}>
        {this.props.children}
      </main>
    );
  }
}

export class LayoutIcon extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout-icon");

    return properties;
  }
}

export class LayoutSpacer extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-layout-spacer");

    return properties;
  }
}

export class Grid extends BaseComponent {
  getExcludedProperties() {
    let excluded = super.getExcludedProperties();

    return excluded.concat(["noSpacing"]);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-grid");

    if (this.props.noSpacing) {
      properties.className.push("mdl-grid--no-spacing");
    }

    return properties;
  }
}

export class Cell extends BaseComponent {
  getExcludedProperties() {
    let excluded = super.getExcludedProperties();

    return excluded.concat(Object.keys(Cell.ClassMapping));
  }

  getElementProperties() {
    let properties = super.getElementProperties(),
        key, value;

    properties.className.push("mdl-cell");

    for (key in Cell.ClassMapping) {
      value = Cell.ClassMapping[key];

      if (this.props[key]) {
        if (typeof value === "function") {
          properties.className.push(value(this.props[key]));
        } else {
          properties.className.push(value);
        }
      }
    }

    return properties;
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

export class Button extends Component {
  getExcludedProperties() {
    let excluded = super.getExcludedProperties();

    return excluded.concat(["raised", "fab", "miniFab", "icon", "colored", "primary", "accent", "ripple"]);
  }

  getElementProperties() {
    let properties = super.getElementProperties();

    // MDL Base button classes
    properties.className = properties.className.concat(["mdl-button", "mdl-js-button"]);

    // The following are mutually exclusive, hence switch
    switch (true) {
    case !!this.props.raised:
      properties.className.push("mdl-button--raised");
      break;
    case !!this.props.fab:
      properties.className.push("mdl-button--fab");
      break;
    case !!this.props.miniFab:
      properties.className = properties.className.concat(["mdl-button--fab", "mdl-button--mini-fab"]);
      break;
    case !!this.props.icon:
      properties.className.push("mdl-button--icon");
      break;
    }

    ["colored", "primary", "accent"].forEach(name => {
      if (this.props[name]) {
        properties.className.push(`mdl-button--${name}`);
      }
    });

    if (this.props.ripple) {
      properties.className.push("mdl-js-ripple-effect");
    }

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <button {...properties}>
        {this.props.children}
      </button>
    );
  }
}

export class LinkButton extends Button {
  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <a {...properties}>
        {this.props.children}
      </a>
    );
  }
}

export class LabelButton extends Button {
  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <label {...properties}>
        {this.props.children}
      </label>
    );
  }
}

// ***************************************************************************
// Card Components
// ***************************************************************************

export class Card extends Component {
  getExcludedProperties() {
    let excluded = super.getExcludedProperties();

    return excluded.concat(["shadow"])
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-card");

    if (this.props.shadow) {
      properties.className.push(`mdl-shadow--${this.props.shadow}dp`);
    }

    return properties;
  }
}

class CardComponent extends BaseComponent {
  getExcludedProperties() {
    let excluded = super.getExcludedProperties();

    return excluded.concat(["border", "expand"]);
  }

  getElementProperties() {
    let properties = super.getElementProperties();

    ["border", "expand"].forEach(name => {
      if (this.props[name]) {
        properties.className.push(`mdl-card--${name}`);
      }
    })

    return properties;
  }
}

export class CardTitle extends CardComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-card__title");

    return properties;
  }
}

export class CardTitleText extends CardComponent {
  getExcludedProperties() {
    let excluded = super.getExcludedProperties();

    return excluded.concat(["h"]);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-card__title-text");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    switch (this.props.h) {
      case "6":
        return <h6 {...properties}>{this.props.children}</h6>;
      case "5":
        return <h5 {...properties}>{this.props.children}</h5>;
      case "4":
        return <h4 {...properties}>{this.props.children}</h4>;
      case "3":
        return <h3 {...properties}>{this.props.children}</h3>;
      case "2":
        return <h2 {...properties}>{this.props.children}</h2>;
      default:
        return <h1 {...properties}>{this.props.children}</h1>;
    }
  }
}

export class CardSubtitleText extends CardComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-card__subtitle-text");

    return properties;
  }
}

export class CardMedia extends CardComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-card__media");

    return properties;
  }
}

export class CardSupportingText extends CardComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-card__supporting-text");

    return properties;
  }
}

export class CardActions extends CardComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-card__actions");

    return properties;
  }
}

export class CardMenu extends CardComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-card__menu");

    return properties;
  }
}

// ***************************************************************************
// Tabs
// ***************************************************************************

export class Tabs extends BaseComponent {
  getExcludedProperties() {
    const excluded = ["ripple"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className = properties.className.concat(["mdl-tabs", "mdl-js-tabs"]);

    if (this.props.ripple) {
      properties.className.push("mdl-js-ripple-effect");
    }

    return properties;
  }
}

export class TabBar extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-tabs__tab-bar");

    return properties;
  }
}

export class Tab extends Component {
  getExcludedProperties() {
    const excluded = ["active"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-tabs__tab");

    if (this.props.active) {
      properties.className.push("is-active");
    }

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <a {...properties}>
        {this.props.children}
      </a>
    );
  }
}

export class TabPanel extends BaseComponent {
  getExcludedProperties() {
    const excluded = ["active"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-tabs__panel");

    if (this.props.active) {
      properties.className.push("is-active");
    }

    return properties;
  }
}

// ***************************************************************************
// Footers
// ***************************************************************************

export class MegaFooter extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-mega-footer");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <footer {...properties}>
        {this.props.children}
      </footer>
    );
  }
}

export class MegaFooterSection extends BaseComponent {
  getExcludedProperties() {
    const excluded = ["top", "middle", "bottom", "left", "right", "dropDown"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties(),
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
    properties.className.push(`mdl-mega-footer__${section}-section`);

    return properties;
  }
}

export class MegaFooterHeading extends Component {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-mega-footer__heading");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <h1 {...properties}>
        {this.props.children}
      </h1>
    );
  }
}

export class MegaFooterSocialButton extends Component {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-mega-footer__social-button");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <button {...properties}>
        {this.props.children}
      </button>
    );
  }
}

export class MegaFooterLinkList extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-mega-footer__link-list");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <ul {...properties}>
        {this.props.children}
      </ul>
    );
  }
}

export class Logo extends Component {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-logo");

    return properties;
  }
}

export class MiniFooter extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-mini-footer");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <footer {...properties}>
        {this.props.children}
      </footer>
    );
  }
}

export class MiniFooterSection extends BaseComponent {
  getExcludedProperties() {
    const excluded = ["left", "right"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties(),
        section;

    switch (true) {
      case this.props.right:
        section = "right";
        break;
      default:
        section = "left";
        break;
    }
    properties.className.push(`mdl-mini-footer__${section}-section`);

    return properties;
  }
}

export class MiniFooterLinkList extends BaseComponent {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-mini-footer__link-list");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <ul {...properties}>
        {this.props.children}
      </ul>
    );
  }
}

export class MiniFooterSocialButton extends Component {
  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className.push("mdl-mini-footer__social-button");

    return properties;
  }

  render() {
    let properties = this.getElementProperties();
    properties.className = properties.className.join(" ");

    return (
      <button {...properties}>
        {this.props.children}
      </button>
    );
  }
}

// ***************************************************************************
// Progress
// ***************************************************************************

export class ProgressBar extends BaseComponent {
  getExcludedProperties() {
    const excluded = ["indeterminate"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className = properties.className.concat(["mdl-progress", "mdl-js-progress"]);

    if (this.props.indeterminate) {
      properties.className.push("mdl-progress__indeterminate");
    }

    return properties;
  }
}

export class Spinner extends BaseComponent {
  getExcludedProperties() {
    const excluded = ["singleColor", "active"];

    return super.getExcludedProperties().concat(excluded);
  }

  getElementProperties() {
    let properties = super.getElementProperties();
    properties.className = properties.className.concat(["mdl-spinner", "mdl-js-spinner"]);

    if (this.props.active) {
      properties.className.push("is-active");
    }

    if (this.props.singleColor) {
      properties.className.push("mdl-spinner--single-color");
    }

    return properties;
  }
}
