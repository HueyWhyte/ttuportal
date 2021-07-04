import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  Container,
  ClassMateImg,
  NewsCard,
  NewsDetails,
} from ".././components/components";

import { getAllNews } from "../redux/actions/news";

class AllNews extends Component {
  componentDidMount() {
    this.props.getAllNews();
  }

  render() {
    return (
      <Container>
        <h1 style={{ textAlign: "center" }}>Campus News</h1>

        <div
          style={{
            marginTop: 50,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {this.props.news?.map((news) => (
            <Link key={news._id} to={`/news/${news._id}`}>
              <NewsCard>
                <ClassMateImg
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 220,
                    borderRadius: 12,
                    border: "none",
                  }}
                  src={news.image}
                  alt=""
                />
                <NewsDetails>
                  <p className="reporter">
                    {news.reporter?.lastname} {news.reporter?.firstname}
                  </p>
                  <p className="title">{news.title}</p>
                  <p className="timestamp">
                    {new Date(news.timestamp).toString().slice(0, 21)}
                  </p>
                </NewsDetails>
              </NewsCard>
            </Link>
          ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.allNews,
  };
};

export default connect(mapStateToProps, { getAllNews })(AllNews);
