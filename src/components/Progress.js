import React, { Component } from "react";
import "../App.css";
import Paper from "@material-ui/core/Paper";

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
        console.log(allStats);
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
      return <ProgressStats />;
    }
  }
}

const LoadingStats = () => {
  return <h2>Loading</h2>;
};

const ProgressStats = () => {
  return (
    <div className="Progress">
      <h2 style={{ textAlign: "center", margin: "0", color: "white" }}>
        Check out your progress, Julie!
      </h2>
    </div>
  );
};

export default Progress;
