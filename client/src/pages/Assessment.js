import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { loadStudent } from "../redux/actions/auth";
import {
  accessLecturer,
  getMyAssessments,
  deleteAssessment,
} from "../redux/actions/assessment";
import { Container, Button } from ".././components/components";

const AssessmentTable = styled.table`
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  > table,
  tr,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    border-spacing: 0;
  }

  > input {
    width: inherit;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
class Assessment extends Component {
  state = {
    course: "",
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    crsErr: false,
  };

  componentDidMount() {
    this.props.getMyAssessments();
  }

  handleRangeValue = (e) => {
    e.preventDefault();
    let { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onAssess = () => {
    let { course, one, two, three, four, five, six } = this.state;
    let data = { course, one, two, three, four, five, six };

    if (course === "") {
      this.setState({ crsErr: true });
    } else {
      this.props.accessLecturer(data);

      this.setState({
        course: "",
        one: 1,
        two: 1,
        three: 1,
        four: 1,
        five: 1,
        six: 1,
      });
    }
  };

  render() {
    let { student } = this.props.auth;
    let { course, one, two, three, four, five, six } = this.state;
    let { assessments } = this.props.assessment;

    return (
      <Container>
        <h1 style={{ textAlign: "center" }}>Assess Lecturer</h1>

        <p style={{ textAlign: "center", marginTop: 12, marginBottom: 12 }}>
          (1-Extremely Poor), (2-Very Poor), (3-Poor), (4-Satisfactory),
          (5-Good), (6-Very Good), (7-Excellent)
        </p>
        <select
          name="course"
          id="course"
          style={{
            padding: 5,
            width: "80%",
            marginBottom: 20,
            marginLeft: "auto",
            marginRight: "auto",
            borderColor: this.state.crsErr ? "red" : "none",
          }}
          value={course}
          onChange={(e) => this.handleRangeValue(e)}
        >
          <option value=""></option>
          {student?.program?.courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.code} - {course.title} - {course?.lecturer.lastname}{" "}
              {course?.lecturer.firstname}
            </option>
          ))}
        </select>

        <AssessmentTable>
          <tbody>
            <tr>
              <td>
                <b>Course Content</b>
                <br />
                The Lecturer(s) provided a comprehensive course manual (course
                outline, course description, objectives & learning outcomes and
                personal details).
              </td>
              <td>
                <input
                  type="range"
                  name="one"
                  id="one"
                  max={7}
                  min={1}
                  value={one}
                  onChange={(e) => this.handleRangeValue(e)}
                />
                <p>{one}</p>
              </td>
            </tr>
            <tr>
              <td>
                <b>Attendance</b>
                <br />
                <ol>
                  <li>
                    Lecturer(s) was punctual, regular and stayed through the
                    entire session.
                  </li>
                  <li>
                    The Lecturer(s) started lecturers in the week that it was
                    supposed to begin and ended the week that it was supposed to
                    end.
                  </li>
                </ol>
              </td>
              <td>
                <input
                  type="range"
                  name="two"
                  id="two"
                  max={7}
                  min={1}
                  value={two}
                  onChange={(e) => this.handleRangeValue(e)}
                />
                <p>{two}</p>
              </td>
            </tr>
            <tr>
              <td>
                <b>Delivery of Lecture</b>

                <ol>
                  <li>
                    Demonstrated knowledge, skill and competency on the subject
                    matter and communicated effectively and efficiently.
                  </li>
                  <li>
                    Was responsive to students’ concerns (expressions, opinions
                    and questions).
                  </li>
                  <li>
                    Used class time to fully promote learning and encourage
                    problem solving.
                  </li>
                  <li>
                    Created good / friendly atmosphere and proper effective
                    class management.
                  </li>
                </ol>
              </td>
              <td>
                <input
                  type="range"
                  name="three"
                  id="three"
                  max={7}
                  min={1}
                  value={three}
                  onChange={(e) => this.handleRangeValue(e)}
                />
                <p>{three}</p>
              </td>
            </tr>

            <tr>
              <td>
                <b>Course Instructions and Ethics</b>

                <ol>
                  <li>
                    Expected time for students to receive feedback on
                    assignments, quizzes and practicals are stated /established.
                  </li>
                  <li>
                    Expectations of students’ responsibilities are stated (e.g.,
                    Attending classes regularly, on time and participating in
                    class activities etc).
                  </li>
                  <li>The course grading scale is disclosed to students.</li>
                  <li>
                    Expectation of students regarding assignments, quizzes,
                    presentations, practicals, projects etc are clearly
                    communicated.
                  </li>
                  <li>
                    Lecturer’s policies on late submission of assignments,
                    quizzes, practical etc are explained.
                  </li>
                </ol>
              </td>
              <td>
                <input
                  type="range"
                  name="four"
                  id="four"
                  max={7}
                  min={1}
                  value={four}
                  onChange={(e) => this.handleRangeValue(e)}
                />
                <p>{four}</p>
              </td>
            </tr>

            <tr>
              <td>
                <b>Assessment and Grading</b>

                <ol>
                  <li>Gave adequate assignments/quizzes (minimum of 2).</li>
                  <li>Gave adequate practical assignment.</li>
                  <li>
                    Demonstrated/exhibited competencies of the practice section
                    to students.
                  </li>
                  <li>
                    Marked assignments, quizzes, mid semester examination and
                    practicals were returned to students on time.
                  </li>
                  <li>
                    Assignments, quizzes, mid semester examination and
                    practicals were discussed.
                  </li>
                </ol>
              </td>
              <td>
                <input
                  type="range"
                  name="five"
                  id="five"
                  max={7}
                  min={1}
                  value={five}
                  onChange={(e) => this.handleRangeValue(e)}
                />
                <p>{five}</p>
              </td>
            </tr>

            <tr>
              <td>
                <b>Handout/Course Materials</b>

                <ol>
                  <li>
                    The Lecturer(s) provided students with adequate and current
                    reading materials/books.
                  </li>
                  <li>
                    The Lecturer(s) made available soft copies (online) of
                    course notes/ demonstrational manuals for use by students.
                  </li>
                </ol>
              </td>
              <td>
                <input
                  type="range"
                  name="six"
                  id="six"
                  max={7}
                  min={1}
                  value={six}
                  onChange={(e) => this.handleRangeValue(e)}
                />
                <p>{six}</p>
              </td>
            </tr>
          </tbody>
        </AssessmentTable>

        <Button primary onClick={() => this.onAssess()}>
          Submit
        </Button>

        <section style={{ marginTop: 40, marginBottom: 20 }}>
          {assessments.map((assessment) => (
            <div
              key={assessment._id}
              style={{
                margin: 3,
                padding: 4,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <p style={{ flex: 2 }}>
                {assessment?.course.code} - {assessment?.course.title} -{" "}
                {assessment?.course?.lecturer.lastname}{" "}
                {assessment?.course?.lecturer.firstname}
              </p>

              <p style={{ display: "flex", flex: 1 }}>
                {assessment?.one}, {assessment?.two}, {assessment?.three},{" "}
                {assessment?.four}, {assessment?.five}, {assessment?.six}
              </p>

              <p
                style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => this.props.deleteAssessment(assessment._id)}
              >
                Delete
              </p>
            </div>
          ))}
        </section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    assessment: state.assessment,
  };
};

export default connect(mapStateToProps, {
  loadStudent,
  accessLecturer,
  getMyAssessments,
  deleteAssessment,
})(Assessment);
