import React from 'react';
import { Typography, Container } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to the IPTV Dashboard
      </Typography>
      <Typography variant="body1">
        Use the navigation to manage your campaigns and view analytics.
      </Typography>
    </Container>
  );
}

export default Home;
