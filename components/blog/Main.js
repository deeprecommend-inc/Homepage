import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Main(props) {
  const { detail, title } = props;
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
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
      <Markdown className="markdown">
        {detail || ''}
      </Markdown>
    </Grid>
  );
}

export default Main;
