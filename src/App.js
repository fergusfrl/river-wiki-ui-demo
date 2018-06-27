import React, { Component } from "react";
import "./App.css";
import logo from "./img/InfowikiLogo.png";

import {
  InputGroup,
  InputGroupAddon,
  Badge,
  TabContent,
  TabPane,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ListGroup,
  ListGroupItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import classnames from "classnames";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebookF from "@fortawesome/fontawesome-free-brands/faFacebookF";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faCalendarAlt from "@fortawesome/fontawesome-free-regular/faCalendarAlt";
import faTint from "@fortawesome/fontawesome-free-solid/faTint";
import faQuestion from "@fortawesome/fontawesome-free-solid/faQuestion";

class App extends Component {
  constructor() {
    super();
    this.state = {
      createModal: false,
      registerModal: false,
      loginModal: false,
      activeTab: "0",
      createType: "river"
    };

    this.toggleCreate = this.toggleCreate.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.updateCreateType = this.updateCreateType.bind(this);
  }

  toggleCreate() {
    this.setState({
      createModal: !this.state.createModal,
      createType: "river"
    });
  }

  toggleRegister() {
    this.setState({
      registerModal: !this.state.registerModal
    });
  }

  toggleLogin() {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  updateCreateType(event) {
    this.setState({
      createType: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar color="dark">
          <NavbarBrand href="#">
            <img src={logo} alt="" height="60px" />
          </NavbarBrand>
          <Nav className="mr-auto">
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <Row>
                  <Col>
                    <h1 className="text-info"> RiverWiki</h1>
                  </Col>
                  <Col>
                    <p className="text-info" id="caret">
                      &#x25BC;
                    </p>
                  </Col>
                </Row>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>About Us</DropdownItem>
                <DropdownItem>Our Goals</DropdownItem>
                <DropdownItem>Terms and Conditions</DropdownItem>
                <DropdownItem>Privacy Policy</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Contact Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <NavItem>
              <NavLink>
                <Button color="success" onClick={this.toggleCreate}>
                  Create new...
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-info icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-info icon">
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-info icon">
                <FontAwesomeIcon icon={faTwitter} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Button outline color="info" onClick={this.toggleRegister}>
                  Register
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Button outline color="info" onClick={this.toggleLogin}>
                  Login
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Modal isOpen={this.state.loginModal} toggle={this.toggleLogin}>
          <ModalHeader toggle={this.toggleLogin}>Welcome Back!</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="text" name="password" id="password" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLogin}>
              Login
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleLogin}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.registerModal} toggle={this.toggleRegister}>
          <ModalHeader toggle={this.toggleRegister}>Welcome!</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="text" name="password" id="password" />
              </FormGroup>
              <FormGroup>
                <Label for="confirm-password">Confirm Password</Label>
                <Input
                  type="text"
                  name="confirm-password"
                  id="confirm-password"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleRegister}>
              Register
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleRegister}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.createModal} toggle={this.toggleCreate}>
          <ModalHeader toggle={this.toggleCreate}>
            Contribute to the Knowledge Base{" "}
          </ModalHeader>
          <ModalBody>
            Create new <span>River Guides</span>, <span>Events</span> and{" "}
            <span>anything else</span> for other river users to see. The more
            you add the better RiverWiki becomes!
            <Form>
              <FormGroup>
                <br />
                <Label for="exampleSelect">Create New...</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={e => this.updateCreateType(e)}
                >
                  <option value="river">River Guide</option>
                  <option value="event">Event</option>
                  <option value="other">Other</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" />
              </FormGroup>
              <FormGroup>
                <Label for="title">Content</Label>
                <Input type="textarea" name="content" id="content" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input type="file" name="photo" id="photo" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleCreate}>
              Create
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleCreate}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Row id="main-page">
          <Col xs="3" sm="3" md="3" lg="3" xl="3">
            <Nav tabs id="tab-bar">
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "0"
                  })}
                  onClick={() => {
                    this.toggleTab("0");
                  }}
                >
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggleTab("1");
                  }}
                >
                  Rivers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggleTab("2");
                  }}
                >
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggleTab("3");
                  }}
                >
                  Other
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="0">
                <Input className="searchBar" placeholder="Search All..." />
                <ListGroup className="list">
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
              <TabPane tabId="1">
                <Input className="searchBar" placeholder="Search Rivers..." />
                <ListGroup className="list">
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    River{" "}
                    <Badge color="success" className="float-right">
                      <FontAwesomeIcon color="white" icon={faTint} />
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
              <TabPane tabId="2">
                <Input className="searchBar" placeholder="Search Events..." />
                <ListGroup className="list">
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    Event{" "}
                    <Badge color="primary" className="float-right">
                      <FontAwesomeIcon color="white" icon={faCalendarAlt} />
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
              <TabPane tabId="3">
                <Input className="searchBar" placeholder="Search Other..." />
                <ListGroup>
                  <ListGroupItem>
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Other{" "}
                    <Badge color="warning" className="float-right">
                      <FontAwesomeIcon color="white" icon={faQuestion} />
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
            </TabContent>
          </Col>
          <Col>
            <Map center={[-43.5, 171]} zoom={6}>
              <TileLayer
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-43.5, 171]}>
                <Popup>
                  <span>
                    New Zealand. <br /> South Island.
                  </span>
                </Popup>
              </Marker>
            </Map>
          </Col>
        </Row>
        <footer className="bg-dark p-4 text-center text-info">
          Copyright &copy; {new Date().getFullYear()} | RiverWiki
        </footer>
      </div>
    );
  }
}

export default App;
