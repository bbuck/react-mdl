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

  Tabs,
  TabBar,
  Tab,
  TabPanel,

  MegaFooter,
  MegaFooterSection,
  MegaFooterLinkList,
  MegaFooterSocialButton,
  MegaFooterHeading,
  MiniFooter,
  MiniFooterSection,
  MiniFooterLinkList,
  MiniFooterSocialButton,
  Logo,

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
  CardMenu,

  ProgressBar,
  Spinner,

  MenuButton,
  Menu,
  MenuItem,
  Slider
} from "react-mdl/react-mdl.min.js";

class TestComponent extends React.Component {
  componentDidMount() {
    document.querySelector("#prog1").addEventListener("mdl-componentupgraded", function() {
      this.MaterialProgress.setProgress(44);
    });

    document.querySelector("#prog3").addEventListener("mdl-componentupgraded", function() {
      this.MaterialProgress.setProgress(33);
      this.MaterialProgress.setBuffer(57);
    })
  }

  sliderChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <Layout fixedHeader>
        <LayoutHeader>
          <LayoutHeaderRow>
            <LayoutTitle>React MDL</LayoutTitle>
            <LayoutSpacer />
            <MenuButton id="global-menu" />
            <Menu htmlFor="global-menu" bottomRight>
              <MenuItem>Sign In</MenuItem>
              <MenuItem>Sign Up</MenuItem>
              <MenuItem>About Us</MenuItem>
            </Menu>
          </LayoutHeaderRow>
        </LayoutHeader>
        <LayoutContent>
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
              <Button ripple>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button raised>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button raised ripple>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button fab>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button fab ripple>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button miniFab>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button miniFab ripple>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button icon>
                <Icon>mood</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button icon ripple>
                <Icon>mood</Icon>
              </Button>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="1" middle>
              <Button colored>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored ripple>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored raised>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored raised ripple>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored fab>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored fab ripple>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored miniFab>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored miniFab ripple>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored icon>
                <Icon>mood</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button colored icon ripple>
                <Icon>mood</Icon>
              </Button>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="1" middle>
              <Button primary>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary ripple>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary raised>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary raised ripple>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary fab>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary fab ripple>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary miniFab>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary miniFab ripple>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary icon>
                <Icon>mood</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button primary icon ripple>
                <Icon>mood</Icon>
              </Button>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="1" middle>
              <Button accent>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent ripple>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent raised>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent raised ripple>Click Me</Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent fab>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent fab ripple>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent miniFab>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent miniFab ripple>
                <Icon>add</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent icon>
                <Icon>mood</Icon>
              </Button>
            </Cell>
            <Cell cols="1" middle>
              <Button accent icon ripple>
                <Icon>mood</Icon>
              </Button>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4">
              <LinkButton raised ripple href="http://getmdl.io" target="_blank">
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
                  <Button colored ripple>
                    Get Started
                  </Button>
                </CardActions>
                <CardMenu>
                  <Button icon ripple>
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
                  <LinkButton colored ripple>
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
                  <LinkButton colored ripple>
                    Add to Calendar
                  </LinkButton>
                  <LayoutSpacer />
                  <Icon>event</Icon>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="4">
              <Tabs>
                <TabBar>
                  <Tab href="#starks-panel" active>Starks</Tab>
                  <Tab href="#lannisters-panel">Lannisters</Tab>
                  <Tab href="#targaryens-panel">Targaryens</Tab>
                </TabBar>
                <TabPanel id="starks-panel" active>
                  <ul>
                    <li>Eddard</li>
                    <li>Catelyn</li>
                    <li>Robb</li>
                    <li>Sansa</li>
                    <li>Brandon</li>
                    <li>Arya</li>
                    <li>Rickon</li>
                  </ul>
                </TabPanel>
                <TabPanel id="lannisters-panel">
                  <ul>
                    <li>Tywin</li>
                    <li>Cersei</li>
                    <li>Jamie</li>
                    <li>Tyrion</li>
                  </ul>
                </TabPanel>
                <TabPanel id="targaryens-panel">
                  <ul>
                    <li>Viserys</li>
                    <li>Daenerys</li>
                  </ul>
                </TabPanel>
              </Tabs>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4">
              <ProgressBar id="prog1" />
            </Cell>
            <Cell cols="4">
              <ProgressBar id="prog2" indeterminate />
            </Cell>
            <Cell cols="4">
              <ProgressBar id="prog3" />
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="4">
              <Spinner active />
              <Spinner singleColor active />
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="2">
              <Slider min="0" max="100" onChange={this.sliderChange} />
            </Cell>
            <Cell cols="2">
              <Slider min="0" max="100" defaultValue="20" onChange={this.sliderChange} />
            </Cell>
          </Grid>
          <MiniFooter>
            <MiniFooterSection left>
              <Logo>Title</Logo>
              <MiniFooterLinkList>
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy & Terms</a></li>
              </MiniFooterLinkList>
            </MiniFooterSection>
            <MiniFooterSection right>
              <MiniFooterSocialButton />
              <MiniFooterSocialButton />
              <MiniFooterSocialButton />
            </MiniFooterSection>
          </MiniFooter>
        </LayoutContent>
      </Layout>
    );
  }
}

React.render(<TestComponent />, document.querySelector("#app-main"));
