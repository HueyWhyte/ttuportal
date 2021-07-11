import React from "react";
import { connect } from "react-redux";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import pdffile from ".././assets/books/book.pdf";

import { getBook } from ".././redux/actions/book";
import { Container } from ".././components/components";

function BookView() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Container>
      {/* <h1 style={{ textAlign: "center" }}>Book Title</h1> */}

      {/* <section> </section> */}

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer
          fileUrl="https://drive.google.com/file/d/1__0yws8raTXa_leioKw-7Ok5yWKt2w-J/view?usp=sharing"
          plugins={[defaultLayoutPluginInstance]}
        />
        ;
      </Worker>
    </Container>
  );
}

const mapStateToProp = (state) => {
  return {};
};

export default connect(mapStateToProp, { getBook })(BookView);
