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

  Slider,

  Checkbox,
  Radio,
  IconToggle,
  Switch,

  Table,
  TH,
  TD,

  TextField,
  ExpandingTextField,
  TextArea,

  Tooltip
} from "react-mdl/react-mdl.min.js";

class TestComponent extends React.Component {
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
        <LayoutDrawer>
          <LayoutTitle>Drawer</LayoutTitle>
          <Navigation>
            <NavigationLink href="#">First</NavigationLink>
            <NavigationLink href="#">Second</NavigationLink>
            <NavigationLink href="#">Third</NavigationLink>
            <NavigationLink href="#">Fourth</NavigationLink>
          </Navigation>
        </LayoutDrawer>
        <LayoutContent>
          <Grid>
            <Cell cols="2">
              <Icon badge="10">account_box</Icon>
            </Cell>
            <Cell cols="2">
              <Icon badge="10" transparentBadge>account_box</Icon>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="2" />
            <Cell cols="6">
              <Component display="4">Display 4</Component>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="2" />
            <Cell cols="6">
              <Component display="3">Display 3</Component>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="2" />
            <Cell cols="6">
              <Component display="2">Display 2</Component>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="2" />
            <Cell cols="6">
              <Component display="1">Display 1</Component>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="2" />
            <Cell cols="6">
              <Component display="headline">Display headline</Component>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="2" />
            <Cell cols="6">
              <Component display="title">Display title</Component>
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
              <div style={{display: "inline-block"}}>
                <Tabs ripple>
                  <TabBar>
                    <Tab href="#starks-panel" active>Starks</Tab>
                    <Tab href="#lannisters-panel">Lannisters</Tab>
                    <Tab href="#targaryens-panel">Targaryens</Tab>
                  </TabBar>
                  <TabPanel id="starks-panel" active>
                    <ul style={{listStyle: "none"}}>
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
                    <ul style={{listStyle: "none"}}>
                      <li>Tywin</li>
                      <li>Cersei</li>
                      <li>Jamie</li>
                      <li>Tyrion</li>
                    </ul>
                  </TabPanel>
                  <TabPanel id="targaryens-panel">
                    <ul style={{listStyle: "none"}}>
                      <li>Viserys</li>
                      <li>Daenerys</li>
                    </ul>
                  </TabPanel>
                </Tabs>
              </div>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4">
              <ProgressBar progress="44" />
            </Cell>
            <Cell cols="4">
              <ProgressBar indeterminate />
            </Cell>
            <Cell cols="4">
              <ProgressBar progress="22" buffer="57" />
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
          <Grid>
            <Cell cols="4" />
            <Cell cols="1">
              <Checkbox label="Checked" checked />
            </Cell>
            <Cell cols="1">
              <Checkbox label="Unchecked" />
            </Cell>
            <Cell cols="1">
              <Checkbox label="Checked" checked ripple />
            </Cell>
            <Cell cols="1">
              <Checkbox label="Unchecked" ripple />
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="1">
              <Radio label="Checked" checked name="radio" value="1" />
            </Cell>
            <Cell cols="1">
              <Radio label="Unchecked" name="radio" value="2" />
            </Cell>
            <Cell cols="1">
              <Radio label="Checked" ripple name="radio" value="3" />
            </Cell>
            <Cell cols="1">
              <Radio label="Unchecked" ripple name="radio" value="4" />
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="1">
              <IconToggle checked>format_bold</IconToggle>
            </Cell>
            <Cell cols="1">
              <IconToggle>format_italic</IconToggle>
            </Cell>
            <Cell cols="1">
              <IconToggle checked ripple>format_underline</IconToggle>
            </Cell>
            <Cell cols="1">
              <IconToggle ripple>mood</IconToggle>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="1">
              <Switch label="On" checked />
            </Cell>
            <Cell cols="1">
              <Switch label="Off" />
            </Cell>
            <Cell cols="1">
              <Switch label="On" checked ripple />
            </Cell>
            <Cell cols="1">
              <Switch label="Off" ripple />
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="4">
              <Table selectable>
                <thead>
                  <tr>
                    <TH>Material</TH>
                    <TH numeric>Quantity</TH>
                    <TH numeric>Unit Price</TH>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TD>Acrylic (transparent)</TD>
                    <TD numeric>25</TD>
                    <TD numeric>$2.90</TD>
                  </tr>
                  <tr>
                    <TD>Plywood (birch)</TD>
                    <TD numeric>50</TD>
                    <TD numeric>$1.25</TD>
                  </tr>
                  <tr>
                    <TD>Laminate (gold and blue)</TD>
                    <TD numeric>10</TD>
                    <TD numeric>$2.35</TD>
                  </tr>
                </tbody>
              </Table>
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="1">
              <TextField id="username" label="User" pattern="[A-Z,a-z, ]*" error="Letters and spaces only"/>
            </Cell>
            <Cell cols="1">
              <TextArea id="address" rows="1" label="Full address" />
            </Cell>
            <Cell cols="1">
              <ExpandingTextField id="search" icon="search" label="Query..." />
            </Cell>
            <Cell cols="1">
              <TextField id="floating" label="Name" floatingLabel />
            </Cell>
          </Grid>
          <Grid>
            <Cell cols="4" />
            <Cell cols="1">
              <Icon id="tt1">add</Icon>
              <Tooltip htmlFor="tt1">Follow</Tooltip>
            </Cell>
            <Cell cols="1">
              <Icon id="tt2">print</Icon>
              <Tooltip htmlFor="tt2" large>Print</Tooltip>
            </Cell>
            <Cell cols="1">
              <Icon id="tt3">cloud_upload</Icon>
              <Tooltip htmlFor="tt3">
                Upload <strong>file.zip</strong>
              </Tooltip>
            </Cell>
            <Cell cols="1">
              <Icon id="tt4">share</Icon>
              <Tooltip htmlFor="tt4" dangerouslySetInnerHTML={{__html: "Share your content<br />via social media"}} />
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
