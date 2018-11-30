import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../App.css';
import {Link} from 'react-router-dom';


class Footer extends Component {

  //need to fixed link underline when each tab is clicked
    state = {
      value: 0,
    };

    handleChange=(event, value) => {
      this.setState({value});
    }

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
          <Tab label="Home" component={Link} to="/"/>
          <Tab label="New Entry" component={Link} to="NewEntryForm"/>          
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