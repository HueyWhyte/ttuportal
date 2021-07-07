import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, NewsForm } from ".././components/components";
import { newNews } from ".././redux/actions/news";

class AddNews extends Component {
  state = {
    title: "",
    body: "",
    image: "",
  };

  handleTextInput = (e) => {
    e.preventDefault();
    let { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onNewsSubmit = () => {
    let { title, body, image } = this.state;
    let data = {
      title,
      body,
      image,
    };

    console.log(data);
    // this.props.newNews(data);
  };

  render() {
    return (
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>Add News</h1>

        <NewsForm>
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => this.handleTextInput(e)}
            value={this.state.title}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
          />

          <label htmlFor="image">Image</label>
          <input
            onChange={(e) => this.handleTextInput(e)}
            value={this.state.image}
            type="text"
            name="image"
            id="image"
            placeholder="Image Url"
          />

          <label htmlFor="body">Body</label>
          <textarea
            onChange={(e) => this.handleTextInput(e)}
            value={this.state.body}
            name="body"
            id="body"
            cols="80"
            rows="15"
          ></textarea>

          <p className="button" onClick={() => this.onNewsSubmit()}>
            POST
          </p>
        </NewsForm>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

export default connect(mapStateToProps, { newNews })(AddNews);
