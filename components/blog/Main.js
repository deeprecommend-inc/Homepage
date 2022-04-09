import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import * as marked from 'marked';

function Main(props) {
  const { detail, title } = props;
  const [ready, setReady] = useState(false);
  const [html, setHtml] = useState('')
  
  useEffect(() => {
    const parsed = marked.parse(detail);
    setHtml(parsed);
    setReady(true);
  }, [])

  if (!ready) return <></>

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <div dangerouslySetInnerHTML={{__html: html}} />
    </Grid>
  );
}

export default Main;
