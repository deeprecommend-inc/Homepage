import React, { useEffect, useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useLocale } from '../../locales/useLocale';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { imgUrl, site } from '../../constants/const';
import Adsense from '../../components/Adsense';

const theme = createTheme();

const BlogContent = ({ detail }) => {
    const [ready, setReady] = useState();
    const router = useRouter();
    const { t, locale } = useLocale();

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) return <></>;

    return (
        <>
            <NextSeo
                title={detail.title}
                description={detail.body}
                canonical={location.url}
                openGraph={{
                    url: site.home,
                    title: t.index.head.title,
                    description: t.index.head.description,
                    type: 'website',
                    locale: locale,
                    images: [
                        {
                            url: imgUrl.deeprecommend,
                            width: 800,
                            height: 600,
                            alt: 'DeepRecommend',
                            type: 'image/png',
                        },
                        {
                            url: imgUrl.deeprecommend,
                            width: 900,
                            height: 800,
                            alt: 'DeepRecommend',
                            type: 'image/png',
                        },
                        { url: imgUrl.deeprecommend },
                    ],
                    site_name: 'DeepRecommend',
                }}
                twitter={{
                    handle: '@DeepRecommend',
                    site: '@DeepRecommend',
                    cardType: 'summary',
                }}
            />
            <ArticleJsonLd
                url={location.url}
                title={detail.title}
                images="/sugimoto.jpg"
                datePublished={new Date()}
                dateModified={new Date()}
                authorName={t.teams.sugimoto.head.title}
                publisherName="DeepRecommend"
                publisherLogo="/new_logo.png"
                description={detail.body}
            />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ marginBottom: '24px' }}>
                    <main>
                        <MainFeaturedPost
                            detail={{
                                title: detail.title,
                                description:
                                    detail.body
                                        ?.replace(/\n/, '')
                                        .slice(0, 50) + '...',
                                image: 'https://source.unsplash.com/random',
                                imageText: 'main image description',
                            }}
                        />
                        <Grid id="main" container spacing={5} sx={{ mt: 3 }}>
                            <Main title={detail.title} detail={detail.body} />
                            <Sidebar
                                title={'DeepLab'}
                                description="Sharing technical information from three pillars: Web, AI and Quantum Computing"
                            />
                        </Grid>
                        <Adsense />
                    </main>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default BlogContent;
