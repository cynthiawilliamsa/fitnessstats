import React, { Component } from "react";
import "../App.css";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Progress extends Component {
  state = {
    stats: {},
    loading: true,
    open:false
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

  handleOpen = (e) => {
    e.preventDefault();
    if(this.state.open){
      this.setState({ open: true });  
      return <ProgressModal/>
       
    }    
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    if (this.state.loading) {
      return <LoadingStats />;
    } else {
      return <ProgressStats stats={this.state.stats} />;
    }
  }
}

const LoadingStats = () => {
  return <div className='loading-container'><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>;
};

const ProgressStats = props => {
  //convert object to array for mapping multipe child components
  const listItems = props.stats.map(item => {
    return (
      <li style={{ listStyle: "none" }}>{item.date}
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

          <ul><a href="/progress" style={{color: "white", fontWeight: 'bold', textDecoration:"none", marginLeft: 'auto', marginRight: 'auto'}}>{listItems}</a></ul>
        </Paper>
      </div>
    </div>
  );
};
const ProgressModal = props => {
  //when href clicked modal shows corresponding entry stats
  return (
    <Modal
      open={this.state.open}
      onClose={this.handleClose}
      >
    <Button>Close</Button></Modal>
  );
}
 

export default Progress;
