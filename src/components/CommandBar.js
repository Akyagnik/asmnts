// src/components/CommandBar.js
import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const CommandBar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit">
        <SearchIcon />
      </IconButton>
      <InputBase placeholder="Search..." />
    </Toolbar>
  </AppBar>
);

export default CommandBar;
