import React from "react/react.min.js";
import MDLComponent from "react-mdl/react-mdl.min.js";

export class MDLButton extends MDLComponent {
  getElementProperties() {
    let properties = super.getElementProperties();

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

    ["colored", "primary", "accent"].forEach(name => {
      if (this.props[name]) {
        properties.className.push(`mdl-button--${this.props["name"]}`);
      }
    });

    if (this.props.applyRipple) {
      properties.push("mdl-js-ripple-effect");
    }

    return properties;
  }

  render() {
    return (
      <button {...this.getElementProperties()}>
        {this.props.children}
      </button>
    );
  }
}
