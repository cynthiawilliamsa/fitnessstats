import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
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
   },
   menu: {
     width: '80%'
   }, 
   margin: {
     margin: theme.spacing.unit,
   }
});

const genders = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

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
  handleChange = prop => event => {
    const changeProp = event.target.value;
    if(isNaN(changeProp) || changeProp >=3) {
      inputProps={{
        errorText=(`${[prop]} must be a number and less than 3.`)
      }}
    
    }
    this.setState({ [prop]: event.target.value });
  };

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
          id="gender selection"
          select
          // label="Gender"
          className={classes.textField}
          value={this.state.gender}
          onChange={this.handleChange('gender')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}          
          margin="normal"
          variant="outlined"
        >
          {genders.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
              <TextField
                onChange={this.handleChange('age')}
                className={classes.textField}
                label="Age"
                name="age"
                variant="outlined"
                value={this.state.age}
              />                  
          </Grid>
            <Grid item xs={12} sm={6}>                 
              <TextField 
                onChange={this.handleChange('height')}
                className={classes.textField}
                label="Height"
                name="height"
                variant="outlined"
                value={this.state.height}
                InputProps={{
                  maxLength: 3,
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                onChange ={this.handleChange('weight')}
                className={classes.textField}
                label="Weight"
                name="weight"
                variant="outlined"
                value={this.state.weight}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      lb
                    </InputAdornment>
                  ),
                }}
              />           
            </Grid>
            <Grid item xs={12} sm={6}>           
              <TextField
                onChange = {this.handleChange('bodyFat')}
                className={classes.textField}
                label="Body Fat"
                name="bodyFat"
                variant="outlined"
                value={this.state.bodyFat}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      %
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.textField}
                onChange = {this.handleChange('leanMass')}
                label="Lean Mass"
                name="leanMass"
                variant="outlined"
                value={this.state.leanMass}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      lb
                    </InputAdornment>
                  ),
                }}
              />            
            </Grid>        
            <Grid item xs={6} sm={3}>                    
              <TextField
                className={classes.textField}
                onChange={this.handleChange('bicepR')}
                label="Bicep R"
                name="bicepR"        
                variant="outlined"
                value={this.state.bicepR}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>            
              <TextField
                className={classes.textField}
                onChange={this.handleChange('chest')}
                label="Chest"
                name="chest"            
                variant="outlined"
                value={this.state.chest}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
              />        
            </Grid>
            <Grid item xs={6} sm={3}>           
              <TextField
                className={classes.textField}
                onChange = {this.handleChange('waist')}
                label="Waist"
                name="waist"
                variant="outlined"
                value={this.state.waist}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
              />           
            </Grid>
            <Grid item xs={6} sm={3}>            
              <TextField
                className={classes.textField}
                onChange = {this.handleChange('thighR')}
                label="Thigh R"
                name="thighR"
                variant="outlined"
                value={this.state.thighR}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
              />           
            </Grid>
            <Grid item xs={6} sm={3}>           
              <TextField
                className={classes.textField}
                onChange = {this.handleChange('bicepL')}
                label="Bicep L"
                name="bicepL"
                variant="outlined"
                value={this.state.bicepL}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>           
              <TextField
                className={classes.textField}
                onChange = {this.handleChange('neck')}
                label="Neck"
                name="neck"
                variant="outlined"
                value={this.state.neck}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>            
              <TextField
                className={classes.textField}
                onChange = {this.handleChange('hips')}
                label="Hips"
                name="hips"            
                variant="outlined"
                value={this.state.hips}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                className={classes.textField}
                onChange ={this.handleChange('thighL')}
                label="Thigh L"
                name="thighL"
                variant="outlined"
                value={this.state.thighL}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      in
                    </InputAdornment>
                  ),
                }}
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