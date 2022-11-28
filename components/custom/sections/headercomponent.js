/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
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
} from 'reactstrap';
import Image from 'next/image';
import logo from '../../../assets/images/logos/logo.png';
import { site } from '../../../constants/const';
import ForumIcon from '@mui/icons-material/Forum';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TranslateIcon from '@mui/icons-material/Translate';
import Link from 'next/link';
import { useLocale } from '../../../locales/useLocale';
import BookIcon from '@mui/icons-material/Book';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import EmailIcon from '@mui/icons-material/Email';

const HeaderComponent = localePath => {
    const [isOpen, setIsOpen] = useState(false);
    const [ready, setReady] = useState(false);
    const { t, locale } = useLocale();
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setReady(true);
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggle = () => setIsOpen(!isOpen);

    const routerPush = route => {
        router.push(route);
    };

    if (!ready) return <></>;

    return (
        <div id="section h-100">
            <div className="header1 po-relative">
                <Container>
                    <Navbar className="navbar-expand-lg h1-nav">
                        <NavbarBrand href="/">
                            <Image
                                src={logo}
                                alt="wrapkit"
                                width="36"
                                height="36"
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle}>
                            <span className="ti-menu"></span>
                        </NavbarToggler>
                        <Collapse isOpen={isOpen} navbar id="header1">
                            <Nav navbar className="ml-auto mt-2 mt-lg-0">
                                <NavItem
                                    onClick={() => {
                                        routerPush('/deepai');
                                    }}
                                >
                                    <NavLink>DeepAI</NavLink>
                                </NavItem>
                                <NavItem
                                    onClick={() => {
                                        routerPush('/deepmagazine');
                                    }}
                                >
                                    <NavLink>DeepMagazine</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href={site.deepLab}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        DeepLab
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        {t.index.header.others}{' '}
                                        <i className="fa fa-angle-down m-l-5"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="b-none animated fadeInUp">
                                        <DropdownItem
                                            href={site.community}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ForumIcon />
                                            {t.index.header.community}
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            href={site.ec}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ShoppingCartIcon />
                                            {t.index.header.shop}
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            href={site.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <TwitterIcon />
                                            Twitter
                                        </DropdownItem>
                                        <DropdownItem
                                            href={site.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <InstagramIcon />
                                            Instagram
                                        </DropdownItem>
                                        <DropdownItem
                                            href={site.tiktok}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <MusicNoteIcon />
                                            TikTok
                                        </DropdownItem>
                                        <DropdownItem
                                            href={site.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <YouTubeIcon />
                                            YouTube
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                routerPush('/contact');
                                            }}
                                        >
                                            <EmailIcon />
                                            {t.index.header.contact}
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link
                                        href={localePath}
                                        locale={locale === 'ja' ? 'en' : 'ja'}
                                        passHref
                                    >
                                        <NavLink>
                                            <TranslateIcon />
                                        </NavLink>
                                    </Link>
                                </NavItem>
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

            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'DeepAI'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {t.dialog.ai.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        {t.dialog.ai.disagree}
                    </Button>
                    <Button
                        onClick={() => {
                            routerPush;
                        }}
                    >
                        {t.dialog.ai.agree}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default HeaderComponent;
