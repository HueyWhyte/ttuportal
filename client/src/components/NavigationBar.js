import React, { Component } from "react";
import { IoIosMenu } from "react-icons/io";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { logout } from "../redux/actions/auth";
import {
  NavContainer,
  SideNavBtn,
  ProfileImageSmall,
} from ".././components/components";

class NavigationBar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  toggleSiveNav = () => {
    document.getElementById("side_nav").style =
      "display: flex; left: 0; transition: all; transition-duration: 0.5s;";
  };

  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
    // this.setState({ showMenu: true }, () => {
    //   document.addEventListener("click", this.closeMenu);
    // });
  };

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  render() {
    let { student } = this.props.auth;

    return (
      <NavContainer>
        <img
          src="https://i.ibb.co/6vkfQT0/banner.png"
          alt=""
          style={{ marginRight: 10, marginLeft: 8, width: 100 }}
        />

        <NavLink
          exact={true}
          to="/"
          className="nav_btn"
          activeClassName="nav_btn_active"
          style={{ marginLeft: "auto" }}
        >
          Home
        </NavLink>

        <NavLink
          exact={true}
          to="/assessment"
          className="nav_btn"
          activeClassName="nav_btn_active"
          style={{ marginLeft: 15, marginRight: 9 }}
        >
          Assess Lecturer
        </NavLink>

        <div onClick={this.showMenu}>
          <ProfileImageSmall>
            <img
              src={student?.image}
              alt=""
              style={{
                marginRight: 5,
                height: 32,
                width: 32,
                borderRadius: 30,
              }}
            />
            <p>{student?.indexNumber}</p>
          </ProfileImageSmall>
        </div>

        {this.state.showMenu ? (
          <div
            style={{
              width: 150,
              height: 120,
              position: "fixed",
              top: 50,
              right: 10,
              backgroundColor: "white",
              borderRadius: 12,
              padding: 6,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 0px 10px 0px #bbb6b6",
            }}
          >
            <Link
              exact={true}
              to="/addnews"
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: 12,
                padding: 6,
                textAlign: "center",
                textDecoration: "none",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: 5,
              }}
            >
              Add News
            </Link>
            <Link
              exact={true}
              to="/results"
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: 12,
                padding: 6,
                textAlign: "center",
                textDecoration: "none",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: 5,
              }}
            >
              Results
            </Link>
            <p
              onClick={() => this.props.logout()}
              to="#"
              style={{
                backgroundColor: "red",
                borderRadius: 12,
                color: "white",
                padding: 6,
                textAlign: "center",
                textDecoration: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Logout
            </p>
          </div>
        ) : null}

        <SideNavBtn onClick={this.toggleSiveNav}>
          <IoIosMenu size={30} />
        </SideNavBtn>
      </NavContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(NavigationBar);
