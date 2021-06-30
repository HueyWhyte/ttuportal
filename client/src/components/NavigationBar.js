import React, { Component } from "react";
import { IoIosMenu } from "react-icons/io";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { device } from "../assets/screens";
import { logout } from "../redux/actions/auth";

const NavContainer = styled.nav`
  background-color: white;
  height: 45px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 10px 0px #bbb6b6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 200;

  > a {
    text-decoration: none;

    @media ${device.tablet} {
      display: none;
    }
  }

  > .nav_btn {
  }

  > .nav_btn_active {
    background-color: #1b337f;
    color: white;
    padding: 8px;
    border-radius: 8px 8px 0 0;
  }
`;

const SideNavBtn = styled.p`
  margin-right: 5px;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media ${device.tablet} {
    display: none;
  }
`;

class NavigationBar extends Component {
  toggleSiveNav = () => {
    document.getElementById("side_nav").style =
      "display: flex; left: 0; transition: all; transition-duration: 0.5s;";
  };

  render() {
    return (
      <NavContainer>
        <img
          src="https://i.ibb.co/6vkfQT0/banner.png"
          alt="sad"
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

        {/* <NavLink to="/transcript">Official Transcript</NavLink> */}

        <Link
          to="#"
          className="nav_btn"
          // exact={true}
          // activeClassName="nav_btn_active"
        >
          Attachment form
        </Link>

        <Link
          to="#"
          className="nav_btn"
          // exact={true}
          // activeClassName="nav_btn_active"
        >
          Assumption of duty
        </Link>

        <Link
          to="#"
          className="nav_btn"
          // exact={true}
          // activeClassName="nav_btn_active"
        >
          Assess Lecturer
        </Link>

        <NavLink
          exact={true}
          to="/profile"
          className="nav_btn"
          activeClassName="nav_btn_active"
        >
          <ProfileImage>
            <img
              src="https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_960_720.jpg"
              alt="sad"
              style={{
                marginRight: 5,
                height: 33,
                width: 33,
                borderRadius: 30,
              }}
            />
            <p>{this.props.auth.student.indexNumber}</p>
          </ProfileImage>
        </NavLink>

        <Link
          onClick={() => this.props.logout()}
          // onClick={this.toggleSiveNav}
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
