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
      return <ProgressStats
              stats={ this.state.stats}
         />;
    }
  }
}

const LoadingStats = () => {
  return <h2>Loading</h2>;
};

const ProgressStats = (props) => {
  //convert object to array for mapping multipe child components   
    const listItems = props.stats.map((item)=> {   
      return <li>{"Date:" + item.date + " id: " + item._id}</li>
    });
    console.log(props.stats)
    return (
      <ul>{listItems}</ul>
      );
    }     
export default Progress;
