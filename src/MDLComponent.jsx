import React from "react/react";

export class MDLComponent extends React.Component {
  getElementProperties() {
    let properties = {
      className: (this.props.className ? this.props.className.split(/\s+/) : []),
      disabled: this.props.disabled
    };

    if (this.props.badge) {
      properties.className.push("mdl-badge");
      properties["data-badge"] = this.props.badge;

      if (this.props.transparentBadge) {
        properties.className.push("mdl-badge--no-background");
      }
    }

    properties.className = properties.className.join(" ");

    return properties;
  }

  // Default render
  render() {
    return (
      <div {...this.getElementProperties()}>
        {this.props.children}
      </div>
    )
  }
}
