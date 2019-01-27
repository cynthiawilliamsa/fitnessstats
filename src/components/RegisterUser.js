import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";

class RegisterUser extends Component {
    render() {
        return(
            <div className = "register">
                <Paper>
                    <h3 class="text-center">Account Register</h3>
                    <form action='/users/register' method="post">
                        <TextField type="text" name="name" value="name" required/>
                        <TextField type="email" name="email" value="email" required/>
                        <TextField type="password"name="password" password="password" required/>             
                        <TextField type="password" name="password2" password2="password2"required/>
                        <Button type="submit" class="btn btn-primary">Submit</Button>
                    </form>             
                </Paper>
            </div>
        );
    }
}

export default RegisterUser;
