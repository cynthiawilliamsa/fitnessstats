import React, { Component } from "react";
import "../App.css";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class Progress extends Component {
  state = {
    stats: {},
    loading: true,
    open: false
  };

  componentWillMount() {
    fetch("http://localhost:3002/newentry")
      .then(res => res.json())
      .then(data => {
        //create var to hold all stats sorted newest to oldest
        const allStats = data.sort((a, b) => {
          return b.date > a.date;
        });
        // console.log(allStats);
        this.setState({
          ...this.state,
          stats: allStats,
          loading: false
        });
      })
      .catch(err => console.log(err));

    // setTimeout(()=> this.setState({
    //   ...this.state,
    //   loading: false
    // }), 1000)
  }

  handleOpen = e => {
    e.preventDefault();
  
    const selected = this.state.stats[e.target.id];
    this.setState({ open: true, selected: selected });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    if (this.state.loading) {
      return <LoadingStats />;
    } else {
      return (
        <div>
          <ProgressModal
            open={this.state.open}
            close={this.handleClose}
            classes={classes}
            selected={this.state.selected}
          />
          <ProgressStats stats={this.state.stats} open={this.handleOpen} />
        </div>
      );
    }
  }
}

const LoadingStats = () => {
  return (
    <div className="loading-container">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

const ProgressStats = props => {
  //convert object to array for mapping multipe child components
  const listItems = props.stats.map((item, index) => {
    return (
      <li key={index} style={{ listStyle: "none" }}>
        <a
          id={index}
          href="/progress"
          onClick={props.open}
          style={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {item.date}
        </a>
      </li>
    );
  });
  console.log(props.stats);

  return (
    <div className="Progress">
      <h2 style={{ textAlign: "center", margin: "0", color: "white" }}>
        Check out your progress, Julie!
      </h2>
      <div
        style={{
          width: "300px",
          paddingTop: "2em",
          paddingBottom: "2em",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          display: "block"
        }}
      >
        <Paper
          style={{ background: "#1CB5E0", padding: "1em", marginBottom: "1em" }}
        >
          <h3 style={{ textAlign: "center", color: "white" }}>
            Click Date to view detail.
          </h3>

          <ul>{listItems}</ul>
        </Paper>
      </div>
    </div>
  );
};
const ProgressModal = props => {
  //when href clicked modal shows corresponding entry stats
  const { classes, selected } = props;

  return (
    <Modal open={props.open}>
      <div style={getModalStyle()} className={classes.paper}>
        <Typography variant="h6" id="modal-title">
          {selected ? (
            <div>
              {selected.date} <br />
              {selected.age} <p/>
            </div>
          ) : (
            ""
          )}
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button onClick={props.close}>Close</Button>{" "}
      </div>
    </Modal>
  );
};

export default withStyles(styles)(Progress);

