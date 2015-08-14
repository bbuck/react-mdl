import React from "react/react.js";
import {
  Layout,
  LayoutHeader,
  LayoutHeaderRow,
  LayoutTitle,
  Navigation,
  NavigationLink,
  LayoutTabBar,
  LayoutTab,
  LayoutTabPanel,
  LayoutDrawer,
  LayoutContent,
  LayoutIcon,
  LayoutSpacer,

  Grid,
  Cell,

  Component,
  Button,
  LinkButton,
  Icon,

  Card,
  CardTitle,
  CardTitleText,
  CardSubtitleText,
  CardMedia,
  CardSupportingText,
  CardActions,
  CardMenu
} from "react-mdl/react-mdl.min.js";

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell cols="12">
            <Icon badge="10">account_box</Icon>
          </Cell>
        </Grid>
        <Grid>
          <Cell cols="1" middle>
            <Button>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button applyRipple>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button raised>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button raised applyRipple>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button fab>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button fab applyRipple>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button miniFab>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button miniFab applyRipple>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button icon>
              <Icon>mood</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button icon applyRipple>
              <Icon>mood</Icon>
            </Button>
          </Cell>
        </Grid>
        <Grid>
          <Cell cols="1" middle>
            <Button colored>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored applyRipple>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored raised>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored raised applyRipple>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored fab>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored fab applyRipple>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored miniFab>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored miniFab applyRipple>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored icon>
              <Icon>mood</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button colored icon applyRipple>
              <Icon>mood</Icon>
            </Button>
          </Cell>
        </Grid>
        <Grid>
          <Cell cols="1" middle>
            <Button primary>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary applyRipple>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary raised>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary raised applyRipple>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary fab>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary fab applyRipple>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary miniFab>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary miniFab applyRipple>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary icon>
              <Icon>mood</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button primary icon applyRipple>
              <Icon>mood</Icon>
            </Button>
          </Cell>
        </Grid>
        <Grid>
          <Cell cols="1" middle>
            <Button accent>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent applyRipple>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent raised>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent raised applyRipple>Click Me</Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent fab>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent fab applyRipple>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent miniFab>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent miniFab applyRipple>
              <Icon>add</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent icon>
              <Icon>mood</Icon>
            </Button>
          </Cell>
          <Cell cols="1" middle>
            <Button accent icon applyRipple>
              <Icon>mood</Icon>
            </Button>
          </Cell>
        </Grid>
        <Grid>
          <Cell cols="4">
            <LinkButton raised applyRipple href="http://getmdl.io" target="_blank">
              Get MDL
            </LinkButton>
          </Cell>
        </Grid>
        <Grid>
          <Cell cols="4">
            <Card className="demo-card-wide" shadow="2">
              <CardTitle>
                <CardTitleText h="2">Welcome</CardTitleText>
              </CardTitle>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardSupportingText>
              <CardActions border>
                <Button colored applyRipple>
                  Get Started
                </Button>
              </CardActions>
              <CardMenu>
                <Button icon applyRipple>
                  <Icon>share</Icon>
                </Button>
              </CardMenu>
            </Card>
          </Cell>
          <Cell cols="3">
            <Card className="demo-card-square" shadow="4">
              <CardTitle expand>
                <CardTitleText h="2">Update</CardTitleText>
              </CardTitle>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
              </CardSupportingText>
              <CardActions border>
                <LinkButton colored applyRipple>
                  View Updates
                </LinkButton>
              </CardActions>
            </Card>
          </Cell>
          <Cell cols="2">
            <Card className="demo-card-image" shadow="6">
              <CardTitle expand />
              <CardActions>
                <span className="demo-card-image__filename">Image.jpg</span>
              </CardActions>
            </Card>
          </Cell>
          <Cell cols="3">
            <Card className="demo-card-event" shadow="8">
              <CardTitle expand>
                <CardTitleText h="4" dangerouslySetInnerHTML={{__html: "Featured event:<br />May 24, 2016<br />7-11pm"}} />
              </CardTitle>
              <CardActions border>
                <LinkButton colored applyRipple>
                  Add to Calendar
                </LinkButton>
                <LayoutSpacer />
                <Icon>event</Icon>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
        <Layout fixedHeader fixedDrawer>
          <LayoutHeader>
            <LayoutHeaderRow>
              <LayoutSpacer />
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                  <Icon>search</Icon>
                </label>
                <div className="mdl-textfield__expandable-holder">
                  <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
                </div>
              </div>
            </LayoutHeaderRow>
          </LayoutHeader>
          <LayoutDrawer>
            <LayoutTitle>Title</LayoutTitle>
            <Navigation>
              <NavigationLink href="">Link</NavigationLink>
              <NavigationLink href="">Link</NavigationLink>
              <NavigationLink href="">Link</NavigationLink>
              <NavigationLink href="">Link</NavigationLink>
            </Navigation>
          </LayoutDrawer>
          <LayoutContent />
        </Layout>
      </div>
    );
  }
}

React.render(<TestComponent />, document.querySelector("#app-main"));
