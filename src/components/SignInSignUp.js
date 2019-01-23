import React, { Component } from "react";
import "whatwg-fetch";

class SignInSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: "",
      signUpError: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
      signUpEmail: "",
      signUpPassword: ""
    };
    this.onTextBoxChangeSignInEmail = this.onTextBoxChangeSignInEmail.bind(
      this
    );
    this.onTextBoxChangeSignUpEmail = this.onTextBoxChangeSignUpEmail.bind(
      this
    );
    this.onTextBoxChangeSignInPassword = this.onTextBoxChangeSignInPassword.bind(
      this
    );
    this.onTextBoxChangeSignUpPassword = this.onTextBoxChangeSignUpPassword.bind(
      this
    );
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
  onTextBoxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    });
  }
  onTextBoxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    });
  }
  onTextBoxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }
  onTextBoxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    });
  }
  onSignUp() {
    //grab state
    const { signUpEmail, signUpPassword } = this.state;
    this.setState({
      isLoading: true
    });

    //Post request to backend
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: "",
            signUpPassword: ""
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }
      });
  }
  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpError
    } = this.state;
    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    if (!token) {
      return (
        <div>
          <div>
            {signInError ? <p>{signInError}</p> : null}
            <p>Sign In</p>
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
            />
            <br />
            <button>Sign In</button>
          </div>
          <br />
          <br />
          <div>
            {signUpError ? <p>{signUpError}</p> : null}
            <p>Sign Up</p>
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
            />
            <br />
            <button onClick={this.onSignUp}>Sign Up</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <p>Signed in</p>
      </div>
    );
  }
}

export default SignInSignUp;
