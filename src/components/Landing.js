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
  //automatically called before initial render
  //change for handle and config of state and prep for first render
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

    //***keeping for reference***used setTimeout mimic fetch call during function/component buildout.
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
      //accessing stats/object by using spread for functional component below to render 
            {...this.state.currentStats}
      />;
    }
  }
}


const LoadingStats = () => {
  return <div className='loading-container'><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
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
          <Table style={{color: "white", marginLeft: "auto", marginRight: "auto" }}>
            <TableBody>
              <TableRow>
                <TableCell style={{color: "white"}}>Height</TableCell>
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
                <TableCell>Lean Mass</TableCell>
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
