import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <AppBar position="static">
        <Toolbar>
          <h1>Fitness Stats Tracker</h1>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default Header;