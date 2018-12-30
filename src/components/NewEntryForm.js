import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import {
  ageValidation,
  heightValidation,
  weightValidation,
  bodyFatValidation,
  leanMassValidation,
  bicepRValidation,
  chestValidation,
  waistValidation
} from "./formValidation";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "#a8e063"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  textField: {
    padding: "4px",
    height: "40px"
  },
  menu: {
    width: "80%"
  },
  margin: {
    margin: theme.spacing.unit
  }
});

const genders = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  }
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
    thighLError: ""
  };
  handleChange = ({ target: { name, value } }) => {
    let errors = {};
    switch (name) {
      case "age":
        errors = ageValidation(value, errors);
        break;
      case "height":
        errors = heightValidation(value, errors);
        break;
      case "weight":
        errors = weightValidation(value, errors);
        break;
      case "bodyFat":
        errors = bodyFatValidation(value, errors);
        break;
      case "leanMass":
        errors = leanMassValidation(value, errors);
        break;
      case "bicepR":
        errors = bicepRValidation(value, errors);
        break;
      case "chest":
        errors = chestValidation(value, errors);
        break;
      case "waist":
        errors = waistValidation(value,errors);
        break;
      default:
        console.log("hi");
        break;
    }

    this.setState({
      ...this.state,
      ...errors,
      [name]: value
    });
  };

  handleSubmit = e => {
    //prevents refresh
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      //enable submit
      const button = document.getElementById("button");
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
        thighLError: ""
      });
    }
    //JSON object for fetch send to server
    fetch("http://localhost:3002/newentry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
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
      .then(function(data) {
        console.log("Request success: ", data);
      })
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };
  render() {
    const { classes } = this.props;
    // const host = process.env.LOCAL_ENV || ""
    // const endpoint=`${host}/newentry`
    return (
      <div className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Paper className={classes.paper}>
            <h2>Enter Stats Below and Submit to Save:</h2>
            <Grid
              container
              spacing={24}
              style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
            >
              <Grid item xs={12}>
                <TextField
                  id="gender selection"
                  select
                  // label="Gender"
                  className={classes.textField}
                  value={this.state.gender}
                  onChange={this.handleChange}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu
                    }
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
                  onChange={this.handleChange}
                  className={classes.textField}
                  label="Age"
                  name="age"
                  error={this.state.ageError.length > 0}
                  helperText={this.state.ageError || ""}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={this.handleChange}
                  className={classes.textField}
                  label="Height"
                  name="height"
                  variant="outlined"
                  error={this.state.heightError.length > 0}
                  helperText={this.state.heightError || ""}
                  InputProps={{
                    maxLength: 3,
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
                <TextField
                  onChange={this.handleChange}
                  className={classes.textField}
                  label="Weight"
                  name="weight"
                  variant="outlined"
                  error={this.state.weightError.length > 0}
                  helperText={this.state.weightError || ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">lb</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={this.handleChange}
                  className={classes.textField}
                  label="Body Fat"
                  name="bodyFat"
                  variant="outlined"
                  error={this.state.bodyFatError.length > 0}
                  helperText={this.state.bodyFatError || ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}
                  label="Lean Mass"
                  name="leanMass"
                  variant="outlined"
                  helperText={this.state.leanMassError || ""}
                  error={this.state.leanMassError.length > 0}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">lb</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}
                  label="Bicep R"
                  name="bicepR"
                  variant="outlined"
                  helperText={this.state.bicepRError || ""}
                  error={this.state.bicepRError.length > 0}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}                 
                  label="Chest"
                  name="chest"
                  variant="outlined"
                  helperText={this.state.chestError || ""}
                  error={this.state.chestError.length > 0}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}
                  label="Waist"
                  name="waist"
                  variant="outlined"
                  helperText={this.state.waistError || ""}
                  error={this.state.waistError.length > 0}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}
                  helperText={this.state.thighRError}
                  label="Thigh R"
                  name="thighR"
                  variant="outlined"
                  value={this.state.thighR}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}
                  helperText={this.state.bicepLError}
                  label="Bicep L"
                  name="bicepL"
                  variant="outlined"
                  value={this.state.bicepL}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}
                  helperText={this.state.neckError}
                  label="Neck"
                  name="neck"
                  variant="outlined"
                  value={this.state.neck}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}
                  helperText={this.state.hipsError}
                  label="Hips"
                  name="hips"
                  variant="outlined"
                  value={this.state.hips}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  className={classes.textField}
                  onChange={this.handleChange}
                  helperText={this.state.thighLError}
                  label="Thigh L"
                  name="thighL"
                  variant="outlined"
                  value={this.state.thighL}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <button type="submit">Submit</button>
            </Grid>
          </Paper>
        </form>
      </div>
    );
  }
}

NewEntryForm.propTypes = {
  classes: PropTypes.object.isRequired
};
console.log();

export default withStyles(styles)(NewEntryForm);
