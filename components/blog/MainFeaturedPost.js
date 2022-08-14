import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

function MainFeaturedPost(props) {
    const { detail } = props;
    const router = useRouter();

    const backToBlockList = () => {
        router.push('/lab');
    };

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${detail.image})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {
                <img
                    style={{ display: 'none' }}
                    src={detail.image}
                    alt={detail.imageText}
                />
            }
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <IconButton
                            sx={{ marginBottom: '24px' }}
                            onClick={backToBlockList}
                        >
                            <ArrowBackIosIcon className="text-white" />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h3"
                            color="inherit"
                            gutterBottom
                        >
                            {detail.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {detail.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MainFeaturedPost;
