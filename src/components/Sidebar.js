// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => (
  <List>
    <ListItem button component={Link} to="/">
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/people">
      <ListItemText primary="People" />
    </ListItem>
    <ListItem button component={Link} to="/settings">
      <ListItemText primary="Settings" />
    </ListItem>
  </List>
);

export default Sidebar;
