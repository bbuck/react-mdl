import React from "react/react.js";
import {
  MDLGrid,
  MDLCell,

  MDLComponent,
  MDLButton
} from "react-mdl/react-mdl.min.js";

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <MDLGrid>
          <MDLCell cols="12">
            <MDLComponent badge={10} className="material-icons">account_box</MDLComponent>
          </MDLCell>
        </MDLGrid>
        <MDLGrid>
          <MDLCell cols="1" middle>
            <MDLButton>Click Me</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton applyRipple>Click Me</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton raised>Click Me</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton raised applyRipple>Click Me</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton fab>+</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton fab colored>+</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton fab primary applyRipple>+</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton raised colored applyRipple>Raised</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton raised primary applyRipple>Raised</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton raised accent applyRipple>Raised</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton miniFab accent applyRipple>+</MDLButton>
          </MDLCell>
          <MDLCell cols="1" middle>
            <MDLButton icon accent applyRipple>
              <i className="material-icons">mood</i>
            </MDLButton>
          </MDLCell>
        </MDLGrid>
      </div>
    );
  }
}

React.render(<TestComponent />, document.querySelector("#app-main"));
