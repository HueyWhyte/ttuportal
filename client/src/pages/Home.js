import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosBook } from "react-icons/io";

import {
  Container,
  MinInfo,
  CoursesContainer,
  Table,
  MyClass,
  Button,
  ClassMateImg,
} from "../components/components";

import StudentInfo from "../components/StudentInfo";
import { loadStudent, registerCourses } from "../redux/actions/auth";

const date = new Date();
let day = date.getDay();

class Home extends Component {
  componentDidMount() {}

  render() {
    let { student } = this.props.auth;

    return (
      <Container>
        <StudentInfo student={student} />

        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <MinInfo>
            <p>Hall Dues: 0</p>
            <p>Faculty Dues: 0</p>
            <p>Resit: 0</p>
            <p>Graduation: 0</p>
          </MinInfo>

          <MinInfo>
            <p>Profile Updated: Yes</p>
            <p>Registered: Yes</p>
            <p>Assesment: No</p>
            <p>Penalty: No penalty</p>
          </MinInfo>

          <MinInfo>
            <p>Opening b/c: Ghc0</p>
            <p>Fees 2020/2021: GHc2316.31</p>
            <p>Total Bill: GHc2316.31</p>
            <p>Paid: GHc2316.31</p>
            <p>Outstanding b/c: GHc 0</p>
          </MinInfo>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* <MinInfo>
            <p style={{ margin: "6px 0 15px 0", fontWeight: "bold" }}>TEST</p>
          </MinInfo> */}

          <MinInfo>
            <p style={{ margin: "6px 0 15px 0", fontWeight: "bold" }}>
              TODAY'S CLASS
            </p>
            <div>
              {student.program?.courses
                .filter((item) => item.day === day)
                .map((myclass) => (
                  <MyClass key={myclass.code}>
                    <IoIosBook
                      color="#1b337f"
                      size={20}
                      style={{ marginRight: 5 }}
                    />
                    <p>{myclass.title}</p>

                    <p
                      style={{
                        marginLeft: "auto",
                        fontWeight: "normal",
                        fontSize: 13,
                      }}
                    >
                      {myclass.duration}
                    </p>
                  </MyClass>
                ))}
            </div>
          </MinInfo>
        </section>

        <CoursesContainer>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Courses for 2020/2021 Academic year 1 semester
          </p>
          {/* <Button
            // onClick={() => this.props.registerCourses()}
            primary
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: 160,
            }}
          >
            REGISTER
          </Button> */}
          <div
            style={{
              overflow: "auto",
              overflowY: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Course</th>
                  <th>Credit Hours</th>
                  <th>Lecturer</th>
                </tr>
              </thead>
              {student.program?.courses.map((course) => (
                <tbody key={course._id}>
                  <tr>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.creditHours}</td>
                    <td>
                      <Link
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                        }}
                        to={`/lecturer/${course.lecturer._id}`}
                      >
                        <ClassMateImg
                          src="https://cdn.pixabay.com/photo/2016/11/10/12/33/model-1814200_960_720.jpg"
                          alt=""
                          style={{ border: "none", marginRight: 12 }}
                        />
                        {course.lecturer.lastname} {course.lecturer.firstname}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </CoursesContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loadStudent, registerCourses })(Home);
