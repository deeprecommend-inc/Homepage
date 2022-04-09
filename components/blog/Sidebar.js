import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { site } from '../../constants/const';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import qiitaApi from '../../api/qiita';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { blogDetailSlice } from "../../store/blogDetail";

const social = [
    // { name: 'GitHub', icon: GitHubIcon, url: site.github },
    { name: 'Twitter', icon: TwitterIcon, url: site.twitter },
    { name: 'YouTube', icon: YouTubeIcon, url: site.youtube },
    { name: 'Instagram', icon: InstagramIcon, url: site.instagram },
    { name: 'TikTok', icon: MusicNoteIcon, url: site.tiktok },
]

function Sidebar(props) {
  const [archives, setArchives] = useState([]);
  const { description, title } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
        const data = await qiitaApi.get();
        setArchives(data);
    }

    init();
  }, []);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     const scrollTop = window.pageYOffset
  //     console.log('SCROLL', {scrollTop, slider})
  //     slider.current.style.color = 'red'
  //   };
  // }, [window.pageYOffset]);

  const toDetail = (blog) => {
    dispatch(
      blogDetailSlice.actions.setBlogDetail(blog)
    )
    
    setTimeout(() => {
      router.push('/lab' + '/' + blog.id);
    }, 200)
  }

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.slice(0, 9).map((archive) => (
        <Link
          display="block"
          variant="body1"
          onClick={() => {
            toDetail(archive)}
          }
          key={archive.id}
          sx={{ mb: 1 }}
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network.url}
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

export default Sidebar;
