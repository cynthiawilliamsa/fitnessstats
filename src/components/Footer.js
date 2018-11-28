import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../App.css';
import {Link} from 'react-router-dom';


class Footer extends Component {
    render() {
      return (
        <div className="Footer">
          <Paper>
        <Tabs
          value={0}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {/* <Tab label="New Entries" /> */}
          <Tab label="New Entry" component={Link} to="NewFormEntry"/>          
          <Tab label="Progress" component={Link} to="Progress"/>
          {/* <Tab label="RHR" component={Link} to="RHR"/> */}
          {/* <Tab label="Nutrition"/> */}
        </Tabs>
      </Paper>
      
        </div>
      );
    }
  }
  
  export default Footer;