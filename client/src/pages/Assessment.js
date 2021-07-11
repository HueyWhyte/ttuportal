import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { loadStudent } from "../redux/actions/auth";
import { accessLecturer } from "../redux/actions/assessment";
import { Container, Button } from ".././components/components";
import ErrorBox from "../components/ErrorBox";

const AssessmentTable = styled.table`
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  /* display: flex;
  flex-direction: column; */

  > table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
  }

  > td {
    display: flex;
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
    one: 3,
    two: 3,
    three: 3,
    four: 3,
    five: 3,
    six: 3,
  };

  handleRangeValue = (e) => {
    e.preventDefault();
    let { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onAssess = () => {
    let { course, one, two, three, four, five, six } = this.state;
    let data = { course, one, two, three, four, five, six };
    console.log(data);
    this.props.accessLecturer(data);
  };

  render() {
    let { student } = this.props.auth;
    let { course, one, two, three, four, five, six } = this.state;
    let { message, code } = this.props.message;

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
            width: "80%",
            padding: 5,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
          }}
          value={course}
          onChange={(e) => this.handleRangeValue(e)}
        >
          {student.program?.courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.code} - {course.title} - {course.lecturer.lastname}{" "}
              {course.lecturer.firstname}
            </option>
          ))}
        </select>

        <AssessmentTable>
          <thead>
            <tr>
              <th>Statements </th>
              <th>Scores </th>
            </tr>
          </thead>

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
                  min={0}
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
                    entire session
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
                  min={0}
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
                    matter and communicated effectively and efficiently
                  </li>
                  <li>
                    Was responsive to students’ concerns (expressions, opinions
                    and questions)
                  </li>
                  <li>
                    Used class time to fully promote learning and encourage
                    problem solving
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
                  min={0}
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
                    class activities etc.)
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
                  min={0}
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
                  <li>Gave adequate assignments/quizzes (minimum of 2)</li>
                  <li>Gave adequate practical assignment</li>
                  <li>
                    Demonstrated/exhibited competencies of the practice section
                    to students.
                  </li>
                  <li>
                    Marked assignments, quizzes, mid semester examination and
                    practicals were returned to students on time
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
                  min={0}
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
                    reading materials/books
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
                  min={0}
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

        {message !== "" ? <ErrorBox code={code} message={message} /> : null}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    message: state.message,
  };
};

export default connect(mapStateToProps, { loadStudent, accessLecturer })(
  Assessment
);
