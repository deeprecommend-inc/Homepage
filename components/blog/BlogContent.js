import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const theme = createTheme();

const BlogContent = () => {
  const [ready, setReady] = useState();
  const router = useRouter();
  const detail = useSelector(state => state.blogDetail.blogDetail)

  useEffect(() => {
    setReady(true);
  }, [])

  useEffect(() => {
    console.log({detail})
  }, [detail])

  if (!ready) return <></>;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginBottom: '24px'}}>
        <main>
          <MainFeaturedPost detail={{
              title: detail.title,
              description: detail.body?.replace(/\n/, '').slice(0, 50) + '...',
              image: 'https://source.unsplash.com/random',
              imageText: 'main image description',
          }}/>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title={detail.title} detail={detail.body} />
            <Sidebar
              title={'DeepLab'}
              description='Sharing technical information from three pillars: Web, AI and Quantum Computing'
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default BlogContent;