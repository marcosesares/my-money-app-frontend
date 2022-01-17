import "./auth.css";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, signup } from "./authActions";

import Row from "../common/layout/row";
import Grid from "../common/layout/grid";
import Messages from "../common/messages/messages";
import Input from "../common/form/inputAuth";
import { MY, MONEY } from "../common/constants/constants";
import {
  WELCOME,
  REGISTER_OPTION,
  LOGIN_OPTION,
} from "../common/constants/messageConstants";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode });
  }

  onSubmit(values) {
    const { login, signup } = this.props;
    this.state.loginMode ? login(values) : signup(values);
  }

  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="login-box">
        <div className="login-logo">
          <b> {MY}</b> {MONEY}
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">{WELCOME}</p>
          <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
            <Field
              component={Input}
              type="input"
              name="name"
              placeholder="Name"
              icon="user"
              hide={loginMode}
            />
            <Field
              component={Input}
              type="email"
              name="email"
              placeholder="Email"
              icon="envelope"
            />
            <Field
              component={Input}
              type="password"
              name="password"
              placeholder="Password"
              icon="lock"
            />
            <Field
              component={Input}
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              icon="lock"
              hide={loginMode}
            />
            <Row>
              <Grid cols="4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  {loginMode ? "Login" : "Register"}
                </button>
              </Grid>
            </Row>
          </form>
          <br />
          <button
            type="button"
            className="link-button"
            onClick={() => this.changeMode()}
          >
            {loginMode ? REGISTER_OPTION : LOGIN_OPTION}
          </button>
        </div>
        <Messages />
      </div>
    );
  }
}

Auth = reduxForm({ form: "authForm" })(Auth);
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
