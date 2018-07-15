import React from 'react'
import { Link, withSiteData } from 'react-static'
import MenuList from 'MenuItems'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Col
} from 'reactstrap';
import window from 'global'

function getColor() {
  window.onscroll = function () {
    "use strict";
    if (document.documentElement.scrollTop > 0 || window.pageYOffset > 0) {
      document.getElementById("nav").classList.add("white")
      document.getElementById("nav").classList.remove("transparent")
    }
    else {
      document.getElementById("nav").classList.add("transparent")
      document.getElementById("nav").classList.remove("white")
    }
  }
}

export default withSiteData(class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    var width = document.body.clientWidth;
    if (width <= 993) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }


  render() {
    const logo = this.props.options.companyLogo

    return(
      <div className = "navWrapper" >
        < Navbar  dark fixed = "top" expand = "lg" id="nav" >
        { getColor() }
          <Container>
            <Row className="navRow">
              <Col xs="3">
                <NavbarBrand href="/"><img src={logo} /></NavbarBrand>
              </Col>
              <Col xs="9" className="text-right">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/" className="nav-link" onClick={this.toggle}>Home</Link>
                    </NavItem>
                    <MenuList toggle={this.toggle} />
                    <NavItem>
                      <Link to="/contact" className="nav-link" onClick={this.toggle}>Contact</Link>
                    </NavItem>
                    <NavItem>
                      <a href="tel:9183799400" className="nav-link nav-phone" onClick={this.toggle}>(918) 409-2101</a>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div >
    );
  }
})