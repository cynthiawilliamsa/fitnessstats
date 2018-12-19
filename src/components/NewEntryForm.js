import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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
    // console.log(e.target.value)
    this.setState({gender: e.target.value});
  }
  handleAgeChange = (e) => {
    // console.log(e.target.value)
    this.setState({age: e.target.value});
  }
  handleHeightChange = (e) => {
    // console.log(e.target.value)
    this.setState({height: e.target.value});
  }
  handleWeightChange =(e) => {
    // console.log(e.target.value)
    this.setState({weight: e.target.value});
  }
  handleBodyFatChange = (e) => {
    // console.log(e.target.value)
    this.setState({bodyFat: e.target.value});    
  }
  handleBicepRChange = (e) => {
    // console.log(e.target.value);
    this.setState({bicepR: e.target.value});
  }
  handleChestChange = (e) => {
    // console.log(e.target.value);
    this.setState({chest: e.target.value});
  }
  handleLeanMassChange = (e) => {
    // console.log(e.target.value);
    this.setState({leanMass: e.target.value});
  }
  handleWaistChange = (e) => {
    // console.log(e.target.value);
    this.setState({waist: e.target.value});
  }
  handleThighRChange = (e) => {
    // console.log(e.target.value);
    this.setState({thighR: e.target.value})
  }
  handleBicepLChange = (e) => {
    // console.log(e.target.value);
    this.setState({bicepL: e.target.value});
  }
  handleHipsChange = (e)=> {
    // console.log(e.target.value);
    this.setState({hips: e.target.value});
  }
  handleThighLChange = (e) => {
    // console.log(e.target.value);
    this.setState({thighL: e.target.value});
  }
  handleSubmit = (e)=> {
    //prevents refresh
    e.preventDefault();
    //JSON object for fetch send to server  
    fetch('http://localhost:3002/newentry', {  
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gender: e.target.elements.gender.value,
        age: e.target.elements.age.value,
        height: e.target.elements.height.value,
        weight: e.target.elements.weight.value,
        bodyFat: e.target.elements.bodyFat.value,
        leanMass: e.target.elements.leanMass.value,
        bicepR: e.target.elements.bicepR.value,
        chest: e.target.elements.chest.value,
        waist: e.target.elements.waist.value,
        thighR: e.target.elements.thighR.value,
        bicepL: e.target.elements.bicepL.value,
        neck: e.target.elements.neck.value,
        hips: e.target.elements.hips.value,
        thighL: e.target.elements.thighL.value
    })
  })
  .then(function (data) {  
    console.log('Request success: ', data);  
  })  
  .catch(function (error) {  
    console.log('Request failure: ', error);  
  });       

  // console.log(newEntry);
}

  render (){  

  const {classes} = this.props
  // const host = process.env.LOCAL_ENV || ""
  // const endpoint=`${host}/newentry`
   return( 
    <div className={classes.root}>
    <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleHeightChange}
                className={classes.textField}
                label="Height"
                name="height"
                variant="outlined"
              />
              <TextField
                onChange ={this.handleWeightChange}
                className={classes.textField}
                label="Weight"
                name="weight"
                variant="outlined"
              />           
            </Grid>
            <Grid item xs={12} sm={6}>           
              <TextField
                onChange = {this.handleBodyFatChange}
                className={classes.textField}
                label="Body Fat"
                name="bodyFat"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange = {this.handleLeanMassChange}
                label="Lean Mass"
                name="leanMass"
                variant="outlined"
              />            
            </Grid>        
            <Grid item xs={6} sm={3}>                    
              <TextField
                className={classes.textField}
                onChange={this.handleBicepRChange}
                label="Bicep R"
                name="bicepR"        
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={3}>            
              <TextField
                className={classes.textField}
                onChange={this.handleChestChange}
                label="Chest"
                name="chest"            
                variant="outlined"
              />        
            </Grid>
            <Grid item xs={6} sm={3}>           
              <TextField
                className={classes.textField}
                onChange = {this.handleWaistChange}
                label="Waist"
                name="waist"
                variant="outlined"
              />           
            </Grid>
            <Grid item xs={6} sm={3}>            
              <TextField
                className={classes.textField}
                onChange = {this.handleThighRChange}
                label="Thigh R"
                name="thighR"
                variant="outlined"
              />           
            </Grid>
            <Grid item xs={6} sm={3}>           
              <TextField
                className={classes.textField}
                onChange = {this.handleBicepLChange}
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
                onChange = {this.handleHipsChange}
                label="Hips"
                name="hips"            
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                className={classes.textField}
                onChange ={this.handleThighLChange}
                label="Thigh L"
                name="thighL"
                variant="outlined"
              />
            </Grid>        
          <button 
            type="submit" 
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