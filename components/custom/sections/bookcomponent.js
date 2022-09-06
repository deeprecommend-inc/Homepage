/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Container,
    Card,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLocalStorage } from '../../../utils/asyncLocalStorage';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputAdornment,
    TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { bookCategories, books } from '../../../constants/const';
import Link from 'next/link';
import { useLocale } from '../../../locales/useLocale';
import SimpleBar from 'simplebar-react';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';

const BookCol = ({ book }) => {
    const { t } = useLocale();
    const router = useRouter();
    const dispatch = useDispatch();
    const [ready, setReady] = useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) return <></>;

    return (
        <>
            <Col
                lg="4"
                md="6"
                onClick={() => {
                    setOpenDialog(true);
                }}
            >
                <Card>
                    <img
                        className="card-img-top"
                        src={book.img}
                        alt="no image"
                    />
                    <h5 className="font-medium m-t-30">{book.title}</h5>
                </Card>
            </Col>

            <Dialog
                open={openDialog}
                onClose={() => {
                    setOpenDialog(false);
                }}
                maxWidth="xs"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t.deepbook.lineDialog.title}
                </DialogTitle>
                <DialogContent>
                    <img src="/line_qr.jpg"></img>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setOpenDialog(false);
                        }}
                    >
                        {t.deepbook.lineDialog.close}
                    </Button>
                    <Button
                        onClick={() => {
                            setOpenDialog(false);
                        }}
                        autoFocus
                    >
                        <a
                            href="https://line.me/ti/p/y7xddvw79c"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t.deepbook.lineDialog.add}
                        </a>
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

const BookComponent = ({ title }) => {
    const { t } = useLocale();
    const [booksState, setBooksState] = useState([]);

    useEffect(() => {
        setBooksState(books);
    }, []);

    const search = async e => {
        const value = e.target.value;
        const regexp = new RegExp(value, 'i');
        const result = books.filter(book => book.title.match(regexp));
        setBooksState(result);
    };

    const filterByCategory = category => {
        const result = books.filter(book => book.categories.includes(category));
        setBooksState(result);
    };

    return (
        <div>
            <div className="book-home2 spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" className="text-center">
                            <h2 className="title">{title}</h2>
                            <TextField
                                type="search"
                                variant="standard"
                                onInput={e => {
                                    search(e);
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <SimpleBar
                                style={{
                                    maxHeight: '35vh',
                                }}
                                className="header1 po-relative"
                            >
                                <Container>
                                    <Navbar className="navbar-expand-lg h1-nav">
                                        <Nav
                                            navbar
                                            className="mx-auto mt-2 mt-lg-40"
                                        >
                                            {bookCategories.map(category => {
                                                return (
                                                    <NavItem
                                                        key={category}
                                                        onClick={() =>
                                                            filterByCategory(
                                                                category,
                                                            )
                                                        }
                                                    >
                                                        <a className="nav-link">
                                                            {
                                                                t.bookCategory[
                                                                    category
                                                                ]
                                                            }
                                                        </a>
                                                    </NavItem>
                                                );
                                            })}
                                        </Nav>
                                    </Navbar>
                                </Container>
                            </SimpleBar>
                        </Col>
                    </Row>
                    <Row className="m-t-40 justify-content-center">
                        {booksState.map(book => {
                            return <BookCol key={book.id} book={book} />;
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BookComponent;
