import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  componentDidMount() {}

  render() {
    let { isAuthenticated, isLoading } = this.props.auth;
    let Component = this.props.component;

    return (
      <Route
        render={() => {
          if (isLoading) {
            return <h1 style={{ margin: "auto" }}>Loading...</h1>;
          } else if (isAuthenticated) {
            return <Component {...this.props} />;
          } else {
            return <Redirect to="/login" {...this.props} />;
          }
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
