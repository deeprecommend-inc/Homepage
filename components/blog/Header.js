import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import logo from "../../assets/images/logos/logo.png";
import Image from "next/image";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { useLocale } from '../../locales/useLocale';
import TranslateIcon from "@mui/icons-material/Translate";
import { useRouter } from 'next/router';

const NavChild = ({ href, name }) => {
  return (
    <NavItem>
      <NavLink
        href={href}
      >
        {name}
      </NavLink>
    </NavItem>
  )
}

function Header({ sections, title, localePath }) {
  const { t, locale } = useLocale();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) return <></>;

  return (
    <div id="section h-100">
      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="/" className="d-flex flex-row align-items-center">
              <Image src={logo} alt="wrapkit" width="64" height="64" />
              <h1 className="ml-3">DeepLab</h1>
            </NavbarBrand>
            <Collapse navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                {sections.map((section, i) => {
                    return <NavChild key={i} href={section.url} name={section.title} />
                })}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}

export default Header;
