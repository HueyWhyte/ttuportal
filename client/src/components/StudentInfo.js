import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  StudentInfoContainer,
  ProfileImage,
  ClassMateImg,
  LargeText,
} from "./components";
import { cgpaCalculator, cwaCalculator } from "../assets/gpaCalc";
import { getResults } from "../redux/actions/result";

class StudentInfo extends Component {
  componentDidMount() {
    this.props.getResults();
  }

  render() {
    let { student } = this.props;
    let results = this.props.results;

    return (
      <StudentInfoContainer>
        <section style={{ display: "flex", alignItems: "center" }}>
          <ProfileImage src={student.image} alt="" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <p style={{ fontSize: 23, fontWeight: "bold" }}>
              {student.firstname} {student.lastname}
            </p>
            <p style={{ color: "#e1e1e1", marginTop: 5, marginBottom: 5 }}>
              {student.program?.title}
            </p>

            <p>Level: 100</p>

            <section style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginRight: 8 }}>Classmates:</p>

              <div className="class_mates_con">
                <ClassMateImg
                  src="https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_960_720.jpg"
                  alt=""
                />
                <ClassMateImg
                  src="https://cdn.pixabay.com/photo/2016/11/10/12/33/model-1814200_960_720.jpg"
                  alt=""
                  style={{ marginLeft: -20 }}
                />
                <ClassMateImg
                  src="https://cdn.pixabay.com/photo/2021/02/22/16/34/portrait-6040876_960_720.jpg"
                  alt=""
                  style={{ marginLeft: -20 }}
                />
              </div>

              <Link to="/classmates" style={{ marginLeft: 12, color: "white" }}>
                more...
              </Link>
            </section>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flex: 1,
            margin: "0px 5px",
          }}
        >
          <LargeText>
            <h1 style={{ textShadow: "1px 1px 5px yellow" }}>
              {!results ? 0 : cgpaCalculator(results).toFixed(2)}
            </h1>
            <p>CGPA</p>
          </LargeText>

          <LargeText>
            <h1 style={{ textShadow: "1px 1px 5px pink" }}>
              {!results ? 0 : cwaCalculator(results).toFixed(2)}
            </h1>
            <p>CWA</p>
          </LargeText>
        </section>
      </StudentInfoContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.result.results,
  };
};

export default connect(mapStateToProps, { getResults })(StudentInfo);
