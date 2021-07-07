import React, { Component } from "react";
import { Link } from "react-router-dom";

import { BookCard, Container } from "../components/components";

const books = [
  {
    _id: 0,
    title: "Animal Farm",
    author: "suhas fub",
    description:
      "asfa gfui jhyvuy fasjkhf auhfuias fhauis fuoagsuf iuasgf iasg fui;sagfi asfiugasui fugas fu",
  },
  {
    _id: 1,
    title: "Pride and Prejudice",
    author: "Emily Smith",
    description:
      "asfa gfui  ksafbui asfuabs fuagsfu asgf asuifgausi fuigas fiausgfou asfuig",
  },
  {
    _id: 2,
    title: "The One",
    author: "Jon Stones",
    description: "asfa gfui ",
  },
  {
    _id: 3,
    title: "A Series of Unfortunate Events",
    author: "Ekua Mansah",
    description: "asfa gfui ",
  },
  {
    _id: 4,
    title: "asdasfassa",
    author: "Silas PK",
    description: "asfa gfui ",
  },
];
export default class Library extends Component {
  render() {
    return (
      <Container>
        <h1>Library</h1>

        <section
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {books.map((book) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              key={book._id}
              to={`/library/book/${book._id}`}
            >
              <BookCard>
                <img
                  src={require("../assets/img/banner.png")}
                  alt=""
                  style={{ width: 100, height: 100 }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h4>{book.title}</h4>
                  <p style={{ marginTop: 6 }}>{book.description}</p>

                  <p style={{ marginTop: 6, fontSize: 13, marginLeft: "auto" }}>
                    <i>{book.author}</i>
                  </p>
                </div>
              </BookCard>
            </Link>
          ))}
        </section>
      </Container>
    );
  }
}
