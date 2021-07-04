import React, { Component } from "react";
import { connect } from "react-redux";
import { IoIosShare, IoIosEye, IoIosChatbubbles } from "react-icons/io";

import {
  Container,
  NewsHeader,
  NewsBody,
  Newsmeta,
} from ".././components/components";

import { getNews } from ".././redux/actions/news";

class News extends Component {
  componentDidMount() {
    this.props.getNews(this.props.match.params.id);
  }

  render() {
    let news = this.props.news;

    return (
      <Container>
        <NewsHeader>
          <img
            loading="lazy"
            src={news.image}
            alt=""
            srcSet=""
            style={{
              width: "100%",
              borderRadius: 20,
            }}
          />

          <div style={{ margin: "12px 12px 12px auto" }}>
            <IoIosShare color="grey" size={20} style={{ marginRight: 8 }} />
            <IoIosEye color="grey" size={20} style={{ marginRight: 8 }} />
            <IoIosChatbubbles
              color="grey"
              size={20}
              style={{ marginRight: 5 }}
            />
          </div>

          <Newsmeta>
            <h1>{news.title}</h1>

            <p>
              by{" "}
              <b>
                {news.reporter?.lastname} {news.reporter?.firstname}
              </b>
            </p>
            <p style={{ fontSize: 11 }}>
              <i> {new Date(news.timestamp).toString().slice(0, 21)}</i>
            </p>
          </Newsmeta>
        </NewsHeader>

        <NewsBody>{news?.body}</NewsBody>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
  };
};

export default connect(mapStateToProps, { getNews })(News);
