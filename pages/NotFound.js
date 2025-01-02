import React from 'react';
import { Typography, Container } from '@mui/material';

function NotFound() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>
    </Container>
  );
}

export default NotFound;
