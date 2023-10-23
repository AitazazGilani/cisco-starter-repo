import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const SiteBanner = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Sextant Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SiteBanner;
