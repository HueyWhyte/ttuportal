import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  ClassMateImg,
  NewsCard,
  NewsDetails,
} from ".././components/components";

const news = [
  {
    _id: 0,
    title: "Lecturers on Strike!",
    timestamp: "12-04-2021",
    reporter: { name: "Grace Amankwa" },
  },
  {
    _id: 1,
    title: "Student goes haywire",
    timestamp: "12-04-2021",
    reporter: { name: "Emmanuel Sam" },
  },
  {
    _id: 2,
    title: "SRC Skills Fair continues",
    timestamp: "12-04-2021",
    reporter: { name: "Kwamina Otabil" },
  },
  {
    _id: 3,
    title: "Lectures make beans, LOL :) ",
    timestamp: "12-04-2021",
    reporter: { name: "Stacy Smith" },
  },
  {
    _id: 4,
    title: "New School portal now open",
    timestamp: "12-04-2021",
    reporter: { name: "Emily Xas" },
  },
  {
    _id: 5,
    title: "Games week around the corner",
    timestamp: "12-04-2021",
    reporter: { name: "Grace Mensah" },
  },
];

export default class AllNews extends Component {
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
          {news.map((news) => (
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
                  src="https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_960_720.jpg"
                  alt=""
                />
                <NewsDetails>
                  <p className="reporter">{news.reporter.name}</p>
                  <p className="title">{news.title}</p>
                  <p className="timestamp">{news.timestamp}</p>
                </NewsDetails>
              </NewsCard>
            </Link>
          ))}
        </div>
      </Container>
    );
  }
}
