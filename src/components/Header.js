import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <AppBar position="static">
        <Toolbar>
          Fitness Stats App
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default Header;