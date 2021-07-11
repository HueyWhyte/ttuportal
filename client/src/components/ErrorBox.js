import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { clearMessage } from ".././redux/actions/message";

const ErrorContainer = styled.div`
  background-color: ${(props) => (props.code === 401 ? "red" : "green")};
  border-radius: 12px;
  padding: 7px 12px;
  margin: 4px auto 4px auto;
  opacity: 0.7;

  > p {
    color: white;
    font-weight: bold;
  }
`;

class ErrorBox extends Component {
  state = {
    message: this.props.message,
    code: this.props.code,
  };

  render() {
    return (
      <ErrorContainer code={this.props.code}>
        <p>{this.props.message}</p>
      </ErrorContainer>
    );
  }
}

export default connect(null, { clearMessage })(ErrorBox);
