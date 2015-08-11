import React from "react/react.js";

const componentHandlerDefined = window.componentHandler && window.componentHandler && typeof window.componentHandler.upgradeElement === "function",
      componentHandler = window.componentHandler;

setInterval(function() {
  if (componentHandlerDefined) {
    componentHandler.upgradeDom();
  }
}, 1000);

class BaseMDLComponent extends React.Component {
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

export class MDLComponent extends BaseMDLComponent {
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

// MDL Grid component
export class MDLGrid extends BaseMDLComponent {
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

export class MDLCell extends BaseMDLComponent {
  getExcludedProperties() {
    let excluded = super.getExcludedProperties();

    return excluded.concat(Object.keys(MDLCell.ClassMapping));
  }

  getElementProperties() {
    let properties = super.getElementProperties(),
        key, value;

    properties.className.push("mdl-cell");

    for (key in MDLCell.ClassMapping) {
      value = MDLCell.ClassMapping[key];

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

MDLCell.ClassMapping = {
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

export class MDLButton extends MDLComponent {
  getExcludedProperties() {
    let excluded = super.getExcludedProperties();

    return excluded.concat(["raised", "fab", "miniFab", "icon", "colored", "primary", "accent", "applyRipple"]);
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

    if (this.props.applyRipple) {
      properties.className.push("mdl-js-ripple-effect");
    }

    return properties;
  }

  componentDidMount() {
    let domNode = React.findDOMNode(this);


    // componentHandler.upgradeElement(domNode.querySelector("button"));
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
