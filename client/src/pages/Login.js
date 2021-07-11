import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import {
  Container,
  ExamP,
  TextFieldCon,
  Button,
} from "../components/components";
import { login } from "../redux/actions/auth";

class Login extends Component {
  state = {
    indexNumber: "",
    password: "",
    message: "",
    inumErr: false,
    pswdErr: false,
  };

  handleTextChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  loginUser = () => {
    let { indexNumber, password } = this.state;

    if (indexNumber === "" || indexNumber.length < 5) {
      this.setState({ inumErr: true });
    } else {
      if (password === " " || password.length < 5) {
        this.setState({ pswdErr: true });
      } else {
        let body = {
          indexNumber,
          password,
        };
        this.props.login(body);
      }
    }
  };

  render() {
    let { isAuthenticated } = this.props.auth;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Container style={{ alignItems: "center" }}>
        <img
          src="https://i.ibb.co/6vkfQT0/banner.png"
          alt="logo"
          style={{ width: 350 }}
        />

        <ExamP>
          Alumni? Login with your index number. Exclude the slashes in your
          index number. Eg. PD/MCS/19/022 becomes PDMCS19022
        </ExamP>

        <TextFieldCon>
          <label htmlFor="email">Email</label>
          <input
            style={{ borderColor: this.state.inumErr ? "red" : "none" }}
            onChange={this.handleTextChange}
            value={this.state.indexNumber}
            type="text"
            name="indexNumber"
            id="email"
            placeholder="071872727"
          />
        </TextFieldCon>

        <TextFieldCon>
          <label htmlFor="password">Password</label>
          <input
            style={{ borderColor: this.state.pswdErr ? "red" : "none" }}
            onChange={this.handleTextChange}
            value={this.state.password}
            type="password"
            name="password"
            id="password"
          />
        </TextFieldCon>

        <TextFieldCon
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input
            style={{ width: 20, height: 20, marginRight: 12 }}
            type="checkbox"
            name="more"
            id="more"
          />
          <p>Trust tis computer for 30 days</p>
        </TextFieldCon>

        <Button primary onClick={this.loginUser}>
          Login
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(Login);
