import React, { Component } from "react";
import "../App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

//write test
//implement code
//refactor

class Landing extends Component {
  state = {
    currentStats: {},
    loading: true
  };

  componentWillMount() {
    fetch("http://localhost:3002/newentry")
      .then(res => res.json())
      .then(data => {
        //create var to hold most recent stats entry
        const newest =
          data[
            Object.keys(data)
              .sort()
              .pop()
          ];
        console.log(newest);
        this.setState({
          //spread operator in this case is reflective of entire state
          //setting stat state to newest which is the data we are using on this page
          ...this.state,
          currentStats: newest,
          loading: false
        });
      })
      .catch(err => console.log(err));

    //used setTimeout mimic fetch call during function/component buildout.
    // setTimeout(()=> this.setState({
    //     //spread operator in this case is reflective of entire state
    //     ...this.state,
    //     loading: false
    // }), 1000);
  } 

  render() {
    if (this.state.loading) {
      return <LoadingStats />;
    } else {
      return <CurrentStats
      //accessing stat for functional component below to render 
            {...this.state.currentStats}
      />;
    }
  }
}


const LoadingStats = () => {
  return <div>Loading</div>;
};

const CurrentStats = ({height, weight, bodyFat, leanMass}) => {
  return (
    <div className="Landing">
      <h2 style={{ textAlign: "center", margin: "0", color: "white" }}>
        Hello, Julie!
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
            Current Stats:
          </h3>
          <Table style={{ marginLeft: "4%", marginRight: "auto" }}>
            <TableBody>
              <TableRow>
                <TableCell>Height</TableCell>
                <TableCell>{height} in</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>{weight} in</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hip-to-Waist Ratio</TableCell>
                <TableCell>.9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Body Fat</TableCell>
                <TableCell>{bodyFat} %</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lean Weight</TableCell>
                <TableCell>{leanMass} lb</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
};
export default Landing;
