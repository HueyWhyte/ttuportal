import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AllNews from "./pages/AllNews";
import AddNews from "./pages/AddNews";
import Library from "./pages/Library";
import BookView from "./pages/BookView";
import SemResult from "./pages/SemResult";
import ClassMates from "./pages/ClassMates";
import Assessment from "./pages/Assessment";

import SideNav from "./components/SideNav";
import { loadStudent } from "./redux/actions/auth";
import PrivateRoute from "./components/PrivateRoute";
import NavigationBar from "./components/NavigationBar";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 45px);
`;

class App extends Component {
  componentDidMount() {
    this.props.loadStudent();
  }

  render() {
    let { isAuthenticated } = this.props.auth;
    return (
      <Router>
        {isAuthenticated ? <NavigationBar /> : null}

        {isAuthenticated ? <SideNav /> : null}

        <Container>
          {/* <SideNav /> */}

          <Switch>
            <Route path="/news/:id" component={News} />

            <Route path="/news" component={AllNews} />

            <Route path="/addnews" component={AddNews} />

            <Route path="/library/book/:id" component={BookView} />

            <Route path="/library" component={Library} />

            <Route path="/assessment" component={Assessment} />

            <PrivateRoute path="/classmates" component={ClassMates} />

            <PrivateRoute path="/profile" component={Profile} />

            <PrivateRoute path="/results" component={SemResult} />

            <Route path="/login" component={Login} />

            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { loadStudent })(App);
