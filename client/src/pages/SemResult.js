import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Table } from "../components/components";
import { getResults } from "../redux/actions/result";

const gradepoints = [
  {
    grade: "A+",
    point: "5.0",
  },
  {
    grade: "A",
    point: "4.5",
  },
  {
    grade: "B+",
    point: "4.0",
  },
  {
    grade: "B",
    point: "3.5",
  },
  {
    grade: "C+",
    point: "3.0",
  },
  {
    grade: "C",
    point: "2.5",
  },
  {
    grade: "D+",
    point: "2.0",
  },
  {
    grade: "D",
    point: "1.5",
  },
  {
    grade: "F",
    point: "0",
  },
];

class SemResult extends Component {
  componentDidMount() {
    this.props.getResults();
  }

  render() {
    let { student } = this.props.auth;
    let results = this.props.results;

    return (
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: 15 }}>Results</h1>

        <section>
          <p>Index Number: {student.indexNumber}</p>
          <p>
            Name: {student.firstname} {student.lastname}
          </p>
          <p>{student.program?.title}</p>
        </section>

        <section style={{ marginTop: 20 }}>
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            HND and BTech
          </p>
          <Table style={{}}>
            <thead>
              <tr>
                <th>Grade</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              {gradepoints.map((grade) => (
                <tr key={grade.grade}>
                  <td>{grade.grade}</td>
                  <td>{grade.point}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>

        <div
          style={{
            display: "flex",
            width: "97%",
            justifyContent: "space-between",
            padding: 5,
            fontWeight: "bold",
            fontSize: 19,
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p style={{ flex: 4 }}>Title</p>
          {/* <p style={{ flex: 1 }}>Code</p> */}
          <p style={{ flex: 1 }}>Credit Hours</p>
          <p style={{ flex: 1 }}>Score (%)</p>
        </div>
        <section style={{ marginBottom: 50 }}>
          {results?.map((result) => (
            <div
              key={result._id}
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "#e1e1e1",
                justifyContent: "space-between",
                padding: "5px 0",
                marginBottom: 1,
              }}
            >
              <p style={{ flex: 4, marginLeft: 5 }}>{result.course?.title}</p>
              {/* <p style={{ flex: 2 }}>{result.code}</p> */}
              <p style={{ flex: 1 }}>{result.course?.creditHours}</p>
              <p style={{ flex: 1 }}>{result.score}</p>
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
    results: state.result.results,
  };
};

export default connect(mapStateToProps, { getResults })(SemResult);
