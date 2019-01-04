import React, { Component } from "react";
import "../App.css";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function getModalStyle() {
  const top = 20;
  const left = 40;

  return {
    top: `${top}%`,
    left: `${left}%`
  };
}

const styles = theme => ({
  paper: {
    position: "relative",
    width: theme.spacing.unit * 80,
    textAlign: 'center',
    align: 'center',
    backgroundColor: "#1CB5E0",
    boxShadow: theme.shadows[5],
    outline: "none",
    color:'white',
    borderRadius: '5px',
    dispaly:'block'
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
      <h2 style={{ textAlign: "center", margin: '0', color: "white", paddingTop: '1em' }}>
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
          <h3 style={{ textAlign: "center", color: "white", marginTop: '5px' }}>
            Click Date to view detail.
          </h3>

          <ul style={{textAlign:'center'}}>{listItems}</ul>
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
      <Table style={getModalStyle()} className={classes.paper}>
        <TableBody variant="h6" id="modal-title" style={{marginLeft: '5px', marginRight:'auto', padding: '1em'}}>
          {selected ? (
            <div>
            <h3 style={{marginBottom: '2px', textAlign: 'center'}}>Entry Date</h3>
              <h4 style={{margin: '0', textAlign: 'center'}}>{selected.date}</h4>                       
            <TableRow >
              <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Gender</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.gender}</TableCell>
             <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Age</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.age}</TableCell>
            </TableRow> 
            <TableRow>
             <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Height</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.height} in</TableCell>
              <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Weight</TableCell>
              <TableCell style={{color: "white",  letterSpacing: '1px'}}>{selected.weight} lbs</TableCell>
            </TableRow> 
            <TableRow>
             <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Body Fat</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.bodyFat} %</TableCell>
              <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Lean Mass</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.leanMass} lbs</TableCell>
            </TableRow> 
            <TableRow>
             <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Bicep R/L</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.bicepR} in/{selected.bicepL} in</TableCell>
              <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Thigh R/L</TableCell>
              <TableCell style={{color: "white",  letterSpacing: '1px'}}>{selected.thighR} in/{selected.thighL} in</TableCell>
            </TableRow> 
            <TableRow>
             <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Chest</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.chest} in</TableCell>
              <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Hips</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.hips} in</TableCell>
            </TableRow> 
            <TableRow>
             <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Waist</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.waist} in</TableCell>
              <TableCell style={{color: "white", fontWeight: "bold", letterSpacing: '1px'}}>Neck</TableCell>
              <TableCell style={{color: "white", letterSpacing: '1px'}}>{selected.neck} in</TableCell>
            </TableRow> 
            </div>
          ) : (
            ""
          )}
        </TableBody>
        
        <Button onClick={props.close} style = {{color: 'white'}}>Close</Button>
      </Table>
    </Modal>
  );
};

export default withStyles(styles)(Progress);

