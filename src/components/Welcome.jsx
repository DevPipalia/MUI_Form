import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function WelcomePage() {
  return (
    <Container
      maxWidth="xs"
      style={{
        background: '#F25B55',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '50px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Hello, World
      </Typography>
    </Container>
  );
}

export default WelcomePage;
