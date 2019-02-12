import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    paper: {
        position: "relative",
        marginTop: "8%",
        display: "flex",
        width: theme.spacing.unit * 60,
        textAlign: 'center',
        boxShadow: theme.shadows[5],
        outline: "none",
        color:'black',
        borderRadius: '5px',
        padding: "10px",
        marginLeft: "auto",
        marginRight: "auto"
      },
  textField: {
    padding: "10px",
    height: "35px"
  }
});

class LoginUser extends Component {
  state = {   
    email: "",
    password: ""    
  };

  handleChange = ({ target: { name, value } }) => {
    console.log(value);
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  resetForm = () => {
      document.getElementById("form").reset();
  }

  handleSubmit = e => {
    e.preventDefault();
    //fetch creats JSON object and sends to server.
    fetch("/users/login", {
    
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
      //clear state after form data sent to server
      this.setState({          
          email: "",
          password: ""
      });

      //clear form
      this.resetForm();
  };


  render() {
    const { classes } = this.props;
    return (
      <div className="login">
        <Paper 
            className={classes.paper}
        >
          
          <Grid
            container
            display="flex"
            spacing={0}
            alignItems="center"
            justify="center"
          >
          <h3 class="text-center">Account Login</h3>
          
            <form
              onSubmit={this.handleSubmit}
              id="form"
            >
             
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

export default withStyles(styles)(LoginUser);