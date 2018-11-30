import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl"

const styles = theme => ({
  root: {
    flexGrow: 1,
    background:  "#a8e063"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },  
  textField: {
    background:"#1CB5E0"
  }

  
});

function NewEntryForm(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24} style={{width:"80%", marginLeft:"auto", marginRight:"auto"}}>
        <Grid item xs={12}>
          <Paper className={classes.paper}> 
          <FormControl style={{display:"flex", flexDiretion: "Row"}}>     
          
          <TextField 
            className={classes.textField}
            label="Gender"
            name="Gender"
            variant="outlined"
          //  value={this.state.gender
          />        
          <TextField
          className={classes.textField}
          label="Age"
           name="Age"
          //  value={this.state.gender
          variant="outlined"
          />
           </FormControl>
          </Paper>         
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>          
          <TextField 
          label="Height"
           name="Height"
          //  value={this.state.gender
          variant="outlined"
          />
          <TextField
          label="weight"
           name="weight"
           floatingLabelText="weight"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <TextField
          label="Body Fat"
           name="Body Fat"
          //  value={this.state.gender
          variant="outlined"
          />
          <TextField
          label="Lean Mass"
           name="Lean Mass"
           floatingLabelText="Lean Mass"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>        
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>         
          <TextField
          label="Bicep L"
          name="Bicep L"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <TextField
          label="Chest"
           name="Chest"
          //  value={this.state.gender
          variant="outlined"
          />        
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <TextField
          label="Waist"
           name="Waist"
           floatingLabelText="Waist"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
           <TextField
           label="Thigh R"
           name="Thigh R"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <TextField
          label="Bicep L"
           name="Bicep L"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <TextField
          label="Neck"
           name="Neck"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <TextField
          label="Hips"
           name="Hips"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <TextField
          label="Thigh L"
           name="Thigh L"
          //  value={this.state.gender
          variant="outlined"
          />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

NewEntryForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewEntryForm);



// class NewEntryForm extends Component {
//     render() {
//       return (
//         <div className="NewEntry" height="700" marginLeft="auto" marginRight="auto">
//           <h2 style={{textAlign: 'center', margin: '0', color: "black"}}>Let's Enter your new stats, Cynthia!</h2>


         
        {/* <Grid container spacing={16}>
        <FormGroup style={{width: "100%", marginLeft: "auto", marginRight: 'auto', padding: '2em'}}>
        <Grid container justify="center" item xs={12}>
        <FormLabel>Gender</FormLabel>
          <TextField/>
          <FormLabel>Age</FormLabel>
          <TextField/>  
          </Grid> 
          <Grid container justify="center" item xs={12} sm={6}>      
          <FormLabel>Height</FormLabel>
          <TextField/>          
          <FormLabel>Height</FormLabel>
          <TextField/>
          </Grid> 
          <FormLabel>Weight</FormLabel>
          <TextField/>
          <FormLabel>Body Fat</FormLabel>
          <TextField/>
          <FormLabel>Arms</FormLabel>
          <TextField/>
          <FormLabel>Chest</FormLabel>
          <TextField/>
          <FormLabel>Waist</FormLabel>
          <TextField/>
          <FormLabel>Hips</FormLabel>
          <TextField/>
          <FormLabel>Thighs</FormLabel>
          <TextField/>
        </FormGroup>
        </Grid> */}
  //     </div> 
  //     );
  //   }
  // }
  
  // export default NewEntryForm;