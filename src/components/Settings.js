// src/components/Settings.js
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Settings = () => {
  const [theme, setTheme] = useState('light');

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Theme</InputLabel>
      <Select value={theme} onChange={handleChange}>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Settings;
