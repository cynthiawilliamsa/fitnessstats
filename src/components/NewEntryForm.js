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
      //error associated with this field
      genderError: "",
      age: "",
      ageError: "",
      height: "",
      heightError: "",
      weight: "",
      weightError: "",
      bodyFat: "",
      bodyFatError: "",
      leanMass: "",
      leanMassError: "",
      bicepR: "",
      bicepRError: "",
      bicepL: "",
      bicepLError: "",
      chest: "",
      chestError: "",
      neck: "",
      neckError: "",
      waist: "",
      waistError: "",
      hips: "",
      hipsError: "",
      thighR: "",
      thighRError: "",
      thighL: "",
      thighLError: "",
  }
  handleChange = prop => e => {  
    console.log(this.state.age)
    
    let isError = false;
    const errors = {
      genderError: "",
      ageError: "",
      weightError: "",
      heightError: "", 
      bodyFatError: "",
      leanMassError: "",
      bicepRError: "", 
      chestError: "",
      waistError: "",
      thighRError: "",
      bicepLError: "",
      neckError: "",
      hipsError: "",
      thighLError: "",
    };
    if(this.state.age.length > 2) {
      isError = true;
      errors.ageError = 'age must be entered and less than 2 characters.'
      console.log(errors.ageError);
    }
    this.setState({[prop]: e.target.value }); 
    // this.setState({
    //   ...this.state,
    //   ...errors
    // {someptop1,somepro2,somehinelse: value}
    // });

    return isError;
  } 
  
  // validate = () =>{
  //   let isError = false;
  //   const errors = {
  //     genderError: "",
  //     ageError: "",
  //     weightError: "",
  //     heightError: "", 
  //     bodyFatError: "",
  //     leanMassError: "",
  //     bicepRError: "", 
  //     chestError: "",
  //     waistError: "",
  //     thighRError: "",
  //     bicepLError: "",
  //     neckError: "",
  //     hipsError: "",
  //     thighLError: "",
  //   };
  //   if(this.state.age.length > 2) {
  //     isError = true;
  //     errors.ageError = 'age must be entered and less than 2 characters.'
  //     console.log(errors.ageError);
  //   }

  //   this.setState({
  //     ...this.state,
  //     ...errors
  //   });

  //   return isError;
  // }

  handleSubmit = (e)=> {
    //prevents refresh
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      //enable submit
      const button = document.getElementById('button');
      button.disabled = false;
      //clear form
      this.setState({
        gender: "",
      //error associated with this field
      genderError: "",
      age: "",
      ageError: "",
      height: "",
      heightError: "",
      weight: "",
      weightError: "",
      bodyFat: "",
      bodyFatError: "",
      leanMass: "",
      leanMassError: "",
      bicepR: "",
      bicepRError: "",
      bicepL: "",
      bicepLError: "",
      chest: "",
      chestError: "",
      neck: "",
      neckError: "",
      waist: "",
      waistError: "",
      hips: "",
      hipsError: "",
      thighR: "",
      thighRError: "",
      thighL: "",
      thighLError: "",
      });
     
    }
    //JSON object for fetch send to server  
    fetch('http://localhost:3002/newentry', {  
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // gender: e.target.elements.gender.value,
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
                // helperText={this.state.ageError}
                className={classes.textField}
                label="Age"
                name="age"
                error={this.state.ageError.length > 0} 
                helperText={this.state.ageError || ""}           
                variant="outlined"
                value={this.state.age}
              />                  
          </Grid>
            <Grid item xs={12} sm={6}>                 
              <TextField 
                onChange={this.handleChange('height')}
                // helperText={this.state.heightError}
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
                // helperText={this.state.weightError}
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
                helperText={this.state.bodyFatError}
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
                helperText={this.state.leanMassError}
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
                helperText={this.state.bicepRError}
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
                helperText={this.state.chestError}
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
                helperText={this.state.waistError}
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
                helperText={this.state.thighRError}
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
                helperText={this.state.bicepLError}
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
                helperText={this.state.neckError}
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
                helperText={this.state.hipsError}
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
                helperText={this.state.thighLError}
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