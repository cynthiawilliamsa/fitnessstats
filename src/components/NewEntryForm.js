import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background:  "#a8e063"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",   
    
  },  
  textField: {
    padding: '4px',  
    height: "40px"  
   }  
});

class NewEntryForm extends Component {

  state = {
      gender: "",
      age: "",
      height: "",
      weight: "",
      bicepR: "",
      bicepL: "",
      chest: "",
      neck: "",
      waist: "",
      hips: "",
      thighR: "",
      thighL: ""
  }
  handleGenderChange = (e) => {
    console.log(e.target.value)
    this.setState({gender: e.target.value});
  }
  handleAgeChange = (e) => {
    console.log(e.target.value)
    this.setState({age: e.target.value});
  }
  handleSubmit = (e) => {
    console.log(this.state)
  }

  render (){  

  const {classes} = this.props

   return( 
    <div className={classes.root}>
    <form >
    <Paper className={classes.paper}> 
        <h2>Enter Stats Below and Submit to Save:</h2>
        <Grid container spacing={24} style={{width:"80%", marginLeft:"auto", marginRight:"auto"}}>
          <Grid item xs={12}>          
              <TextField 
                onChange={this.handleGenderChange}
                className={classes.textField}
                label="Gender"
                name="gender"
                variant="outlined"
                value={this.state.gender}                       
              />        
              <TextField
               onChange={this.handleAgeChange}
                className={classes.textField}
                label="Age"
                name="age"
                variant="outlined"
                value={this.state.age}
              />                  
          </Grid>
            <Grid item xs={12} sm={6}>                     
              <TextField 
                className={classes.textField}
                label="Height"
                name="height"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="weight"
                name="weight"
                variant="outlined"
              />           
            </Grid>
            <Grid item xs={12} sm={6}>           
              <TextField
              className={classes.textField}
              label="Body Fat"
              name="bodyFat"
              variant="outlined"
              />
              <TextField
              className={classes.textField}
              label="Lean Mass"
              name="leanMass"
              variant="outlined"
              />            
            </Grid>        
            <Grid item xs={6} sm={3}>
                    
              <TextField
              className={classes.textField}
              label="Bicep L"
              name="bicepL"        
              variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={3}>            
              <TextField
              className={classes.textField}
              label="Chest"
              name="chest"            
              variant="outlined"
              />        
            </Grid>
            <Grid item xs={6} sm={3}>           
              <TextField
              className={classes.textField}
              label="Waist"
              name="waist"
              variant="outlined"
              />           
            </Grid>
            <Grid item xs={6} sm={3}>            
              <TextField
              className={classes.textField}
              label="Thigh R"
              name="thighR"

              variant="outlined"
              />           
            </Grid>
            <Grid item xs={6} sm={3}>           
              <TextField
              className={classes.textField}
              label="Bicep L"
              name="bicepL"
              variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={3}>           
              <TextField
              className={classes.textField}
              label="Neck"
              name="neck"
              variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={3}>            
              <TextField
              className={classes.textField}
              label="Hips"
              name="hips"            
              variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
              className={classes.textField}
              label="Thigh L"
              name="thighL"
              variant="outlined"
              />
            </Grid>        
          <button
            style={{paddingTop:"1em", paddingBottom:"1em" }}
            size="medium"
            color="primary"
            variant="contained"
            value="Submit"
            onSubmit={this.handleSubmit()}            
            >Submit
          </button>       
      </Grid>
    </Paper>
    </form>
  </div>
  );    
  };
  }

NewEntryForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
console.log()

export default withStyles(styles)(NewEntryForm);