import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="topbar" id="top" style={{ backgroundColor: '#121212', color: '#ffffff' }}>
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar" style={{ backgroundColor: '#121212' }}>
                        <NavbarToggler onClick={toggle}>
                            <span className="ti-menu" style={{ color: '#ffffff' }}></span>
                        </NavbarToggler>
                        <Collapse
                            isOpen={isOpen}
                            navbar
                            className="hover-dropdown ml-auto"
                            id="h6-info"
                        >
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Link href="/">
                                        <a
                                            className={
                                                router.pathname == '/'
                                                    ? 'text-white nav-link'
                                                    : 'nav-link'
                                            }
                                            style={{ color: router.pathname == '/' ? '#ffffff' : '#ffffff' }}
                                        >
                                            Custom Components
                                        </a>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/basic">
                                        <a
                                            className={
                                                router.pathname == '/basic'
                                                    ? 'text-white nav-link'
                                                    : 'nav-link'
                                            }
                                            style={{ color: router.pathname == '/basic' ? '#ffffff' : '#ffffff' }}
                                        >
                                            Basic-Components
                                        </a>
                                    </Link>
                                </NavItem>
                            </Nav>
                            {/* <div className="act-buttons">
                <NavLink
                  href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                  className="btn btn-light font-14"
                  target="_blank"
                >
                  Download Free
                </NavLink>
              </div> */}
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );
};

export default Header;
