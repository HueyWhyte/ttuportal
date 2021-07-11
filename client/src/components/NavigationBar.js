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
  toggleSiveNav = () => {
    document.getElementById("side_nav").style =
      "display: flex; left: 0; transition: all; transition-duration: 0.5s;";
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
        >
          Home
        </NavLink>

        <NavLink
          exact={true}
          to="/results"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
          Results
        </NavLink>

        {/* 
        <Link
          to="#"
          className="nav_btn"
          // exact={true}
          // activeClassName="nav_btn_active"
        >
          Attachment form
        </Link> */}

        <NavLink
          exact={true}
          to="/assessment"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
          Assess Lecturer
        </NavLink>

        <NavLink
          exact={true}
          to="/profile"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
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
        </NavLink>

        <Link
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
        </Link>

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
