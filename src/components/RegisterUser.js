import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  textField: {
    padding: "10px",
    height: "35px"
  }
});

class RegisterUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = ({ target: { name, value } }) => {
    console.log(value);
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("clicked");
    const form = e.target;
    
    const data = new FormData(form);
    console.log(form);
    console.log(this.state)

    fetch("http://localhost:3002/users/register", {
    
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(this.state)
    })
      .then(function(data) {
        console.log("request success", data);
      })
      .catch(function(error) {
        console.log("request failure.", error);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="register" style={{ minHeight: "100vh" }}>
        <Paper
          style={{
            width: "25%",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10px"
          }}
        >
          <h3 class="text-center">Account Register</h3>
          <Grid
            container
            display="flex"
            spacing={0}
            alignItems="center"
            justify="center"
          >
            <form
              onSubmit={this.handleSubmit}
              //   action="/users/register"
              //   method="post"
            >
              <Grid item>
                <TextField
                  onChange={this.handleChange}
                  variant="outlined"
                  className={classes.textField}
                  type="text"
                  name="firstName"
                  label="First Name"
                  required
                />
                <TextField
                  onChange={this.handleChange}
                  variant="outlined"
                  className={classes.textField}
                  type="text"
                  name="lastName"
                  label="Last Name"
                  required
                />
              </Grid>
              <TextField
                onChange={this.handleChange}
                variant="outlined"
                className={classes.textField}
                type="email"
                name="email"
                label="Email"
                required
              />
              <TextField
                onChange={this.handleChange}
                variant="outlined"
                className={classes.textField}
                type="password"
                name="password"
                password="password"
                label="Password"
                required
              />
              <TextField
                onChange={this.handleChange}
                variant="outlined"
                className={classes.textField}
                type="password"
                name="password2"
                password2="password2"
                label="Confirm Password"
                required
              />
              <br />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(RegisterUser);
