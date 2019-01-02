import React, { Component } from "react";
import "../App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class Progress extends Component {
  state = {
    stats: {},
    loading: true
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

  render() {
    if (this.state.loading) {
      return <LoadingStats />;
    } else {
      return <ProgressStats stats={this.state.stats} />;
    }
  }
}

const LoadingStats = () => {
  return <h2>Loading</h2>;
};

const ProgressStats = props => {
  //convert object to array for mapping multipe child components
  const listItems = props.stats.map(item => {
    return (
      <li style={{ listStyle: "none" }}>
        <a href="/progress"  style={{color: "white", fontWeight: 'bold', textDecoration:"none", marginLeft: 'auto', marginRight: 'auto'}}>{item.date}</a>
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
export default Progress;
