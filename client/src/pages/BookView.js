import React from "react";
import { connect } from "react-redux";
import { getBook } from ".././redux/actions/book";

import { Container } from ".././components/components";

function BookView() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Book Title</h1>
    </Container>
  );
}

const mapStateToProp = (state) => {
  return {};
};

export default connect(mapStateToProp, { getBook })(BookView);
