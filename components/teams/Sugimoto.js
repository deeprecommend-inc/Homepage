import React, { useEffect, useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../blog/Sidebar';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useLocale } from '../../locales/useLocale';
import { NextSeo } from 'next-seo';
import { site } from '../../constants/const';
import Adsense from '../../components/Adsense';
import MainFeaturedPost from '../blog/MainFeaturedPost';
import Main from '../blog/Main';

const theme = createTheme();

const Sugimoto = () => {
    const [ready, setReady] = useState();
    const router = useRouter();
    const { t, locale } = useLocale();

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) return <></>;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ marginBottom: '24px' }}>
                <main>
                    <MainFeaturedPost
                        detail={{
                            title: '',
                            description: '',
                            image: '/sugi.png',
                            imageText: 'main image description',
                        }}
                    />
                    <Grid id="main" container spacing={5} sx={{ mt: 3 }}>
                        <Main title={''} detail={''} />
                        <Sidebar
                            title={'DeepLab'}
                            description="Sharing technical information from three pillars: Web, AI and Quantum Computing"
                        />
                    </Grid>
                    <Adsense />
                </main>
            </Container>
        </ThemeProvider>
    );
};

export default Sugimoto;
