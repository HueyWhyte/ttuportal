import React, { Component } from "react";
import { Document, Page } from "react-pdf";

export default class BookView extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    // const { pageNumber, numPages } = this.state;
    return (
      <div>
        <h1>BookView</h1>

        <Document
          file="https://www.penguin.com/static/pdf/teachersguides/animalfarm.pdf"
          // onLoadSuccess={this.onDocumentLoadSuccess.bind()}
        >
          <Page />
        </Document>
      </div>
    );
  }
}
