/* eslint-disable */
import React, { useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Image from "next/image";
import logo from "../../../assets/images/logos/logo.png";
import logo2 from "../../../assets/images/logos/white-logo.png";
import image from "next/image";
import { site } from "../../../constants/const";
import ForumIcon from '@mui/icons-material/Forum';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      {/* <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Header/Navigation</h1>
              <h6 className="subtitle">
                Here you can check Demos we created you can easily use it. Its
                quite easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="#">
              <Image src={logo} alt="wrapkit" width="64" height="64" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="#"></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={site.deepLog} target="_blank" rel="noopener noreferrer">DeepLog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={site.deepMuseum} target="_blank" rel="noopener noreferrer">DeepMuseum</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Others <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem href={site.community} target="_blank" rel="noopener noreferrer"><ForumIcon />Community</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href={site.ec} target="_blank" rel="noopener noreferrer"><ShoppingCartIcon/>Shop</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href={site.github} target="_blank" rel="noopener noreferrer"><GitHubIcon/>Github</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href={site.twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon/>Twitter</DropdownItem>
                    <DropdownItem href={site.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon/>Instagram</DropdownItem>
                    <DropdownItem href={site.tiktok} target="_blank" rel="noopener noreferrer"><MusicNoteIcon/>TikTok</DropdownItem>
                    <DropdownItem href={site.youtube} target="_blank" rel="noopener noreferrer"><YouTubeIcon/>YouTube</DropdownItem>
                    <DropdownItem href={site.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon/>Facebook</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {/* <NavItem>
                  <a className="btn btn-outline-info" href="#">
                    Hire Me
                  </a>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
      {/* <div className="header1 po-relative bg-dark">
        <Container>
          <Navbar className="navbar-expand-lg h2-nav">
            <NavbarBrand href="#">
              <Image src={logo2} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Work</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Services <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem>Separated link</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>One more separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#">Freebies</NavLink>
                </NavItem>
                <NavItem>
                  <a className="btn btn-info" href="#">
                    Hire Me
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div> */}
    </div>
  );
};

export default HeaderComponent;
