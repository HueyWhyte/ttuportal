import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { clearMessage } from ".././redux/actions/message";

const MessageContainer = styled.div`
  width: 100%;
  display: ${(props) => (props.code !== "" ? "flex" : "none")};
  position: fixed;
  bottom: 20px;
`;

const MessageContent = styled.div`
  background-color: ${(props) =>
    props.code === 401 ? "#ff0000cf" : "#008000cf"};
  border-radius: 12px;
  padding: 7px 12px;
  transition: ${(props) => (props.code !== "" ? "ease-in" : "ease-out")};
  transition-duration: 5s;

  margin-left: auto;
  margin-right: auto;

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

  componentDidMount() {
    setTimeout(() => {
      this.props.clearMessage();
    }, 3000);
  }

  render() {
    return (
      <MessageContainer>
        <MessageContent code={this.props.code}>
          <p>{this.props.message}</p>
        </MessageContent>
      </MessageContainer>
    );
  }
}

export default connect(null, { clearMessage })(ErrorBox);
