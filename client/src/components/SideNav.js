import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { IoIosCloseCircle, IoIosLogOut } from "react-icons/io";
import styled from "styled-components";

import { logout } from "../redux/actions/auth";

const NavContainer = styled.nav`
  display: flex;
  background-color: white;
  height: 100vh;
  width: 80vw;
  z-index: 200;
  position: fixed;
  top: 0;
  flex-direction: column;
  transition: all;
  transition-duration: 0.5s;
  left: -90vw;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 3px;
  box-shadow: 2px 0px 7px 2px rgba(0, 0, 0, 0.15);

  > .nav_btn {
    margin-bottom: 10px;
    margin-top: 20px;
    text-decoration: none;
  }

  > .nav_btn_active {
    background-color: #1b327f2d;
    color: #1b337f;
    padding: 8px;
    border-radius: 8px 0 0 8px;
    font-weight: bold;
  }
`;

class SideNav extends Component {
  toggleSiveNav = () => {
    document.getElementById("side_nav").style =
      "left: -150; transition: all; transition-duration: 0.5s;";
  };

  render() {
    let { student } = this.props.auth;

    return (
      <NavContainer id="side_nav">
        <IoIosCloseCircle
          onClick={this.toggleSiveNav}
          size={30}
          color="tomato"
          style={{ marginLeft: "auto", marginTop: 30 }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: 10,
            marginBottom: 30,
          }}
        >
          <img
            src={student?.image}
            alt=""
            style={{
              marginRight: 12,
              height: 40,
              width: 40,
              borderRadius: 30,
            }}
          />
          <NavLink
            onClick={this.toggleSiveNav}
            exact={true}
            to="/profile"
            style={{ color: "black", textDecoration: "none" }}
          >
            <p style={{ fontWeight: "bold" }}>
              {student?.firstname} {student?.lastname}
            </p>
            <p>{student?.indexNumber}</p>
          </NavLink>
        </div>

        <NavLink
          onClick={this.toggleSiveNav}
          exact={true}
          to="/"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
          Home
        </NavLink>

        <NavLink
          onClick={this.toggleSiveNav}
          exact={true}
          to="/results"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
          Results
        </NavLink>

        {/* <Link
          to="#"
          className="nav_btn"
          // onClick={this.toggleSiveNav}
          // activeClassName="nav_btn_active"
        >
          Attachment form
        </Link> */}

        <NavLink
          to="/assessment"
          className="nav_btn"
          onClick={this.toggleSiveNav}
          activeClassName="nav_btn_active"
        >
          Assess Lecturer
        </NavLink>

        <NavLink
          onClick={this.toggleSiveNav}
          exact={true}
          to="/news"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
          News
        </NavLink>

        <NavLink
          onClick={this.toggleSiveNav}
          exact={true}
          to="/addnews"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
          Add News
        </NavLink>

        <NavLink
          onClick={this.toggleSiveNav}
          exact={true}
          to="/library"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
          Library
        </NavLink>

        {this.props.auth.isAuthenticated ? null : (
          <Link
            onClick={this.toggleSiveNav}
            to="/login"
            className="nav_btn"
            // onClick={this.toggleSiveNav}
            // activeClassName="nav_btn_active"
            style={{ marginBottom: "auto" }}
          >
            Login
          </Link>
        )}

        <Link
          onClick={() => this.props.logout()}
          to="#"
          style={{
            marginTop: "auto",
            marginBottom: "20px",
            backgroundColor: "#ff000036",
            borderRadius: 12,
            color: "red",
            padding: "6px 12px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "bold",
            cursor: "pointer",
            marginRight: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoIosLogOut
            onClick={this.toggleSiveNav}
            size={28}
            style={{ marginRight: 10 }}
          />
          Logout
        </Link>
      </NavContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(SideNav);
