import React, { Component } from "react";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "../App.css";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Footer extends Component {
  //need to fixed link underline when each tab is clicked
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {classes} = this.props;
    return (
      <div className="Footer">
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor=""
            textColor="primary"
            centered
          >
            {/* <Tab label="New Entries" /> */}
            <Tab label="Home" component={Link} to="/" />
            <Tab label="New Entry" component={Link} to="newentryform" />
            <Tab label="Progress" component={Link} to="progress" />
          </Tabs>
        </Paper>
      </div>
    );
  }
}
Footer.proptypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
