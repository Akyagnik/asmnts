// src/App.js
import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import CommandBar from './components/CommandBar';
import Home from './pages/Home';
import People from './pages/People';
import Settings from './pages/Settings';



function App() {
  return (
    <Routes>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <CommandBar />
          <Routes>
            <Route exact path="/" components={<Home />}></Route>
            <Route path="/people" components={<People />}></Route>
            <Route path="/settings" components={<Settings />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </Routes>
  );
}

export default App;
