import React, { Component } from "react";
import { connect } from "react-redux";

import { getClassMates } from "../redux/actions/auth";
import { Container, ClassMateImg, MateCard } from "../components/components";

export class ClassMates extends Component {
  componentDidMount() {
    this.props.getClassMates();
  }

  render() {
    return (
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: 50 }}>Classmates</h1>

        <section style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.mates.map((mate) => (
            <MateCard key={mate.indexNumber}>
              <ClassMateImg
                loading="lazy"
                style={{ width: 65, height: 65, border: "1px solid #e1e1e1" }}
                src={mate.image}
                alt=""
              />
              <div style={{ marginLeft: 8 }}>
                <p style={{ fontWeight: "bold" }}>
                  {mate.lastname} {mate.firstname}
                </p>
                <p>{mate.indexNumber}</p>
                <p>{mate.phone}</p>
                <p>{mate.email}</p>
              </div>
            </MateCard>
          ))}
        </section>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    class: state.auth.student.program,
    mates: state.auth.mates,
  };
};

export default connect(mapStateToProps, { getClassMates })(ClassMates);
