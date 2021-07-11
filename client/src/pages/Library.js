import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  BookCard,
  Container,
  BookMeta,
  BookImage,
  BooksContainer,
} from "../components/components";

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
        <h1 style={{ textAlign: "center" }}>Library</h1>

        <BooksContainer>
          {books.map((book) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              key={book._id}
              to={`/library/book/${book._id}`}
            >
              <BookCard>
                <BookImage
                  src="https://images.unsplash.com/photo-1516153553821-218745a8c4f4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <BookMeta>
                  <h4>{book.title}</h4>
                  <p style={{ marginTop: 6 }}>{book.description}</p>

                  <p
                    style={{
                      marginTop: "auto",
                      fontSize: 13,
                      marginLeft: "auto",
                    }}
                  >
                    <i>{book.author}</i>
                  </p>
                </BookMeta>
              </BookCard>
            </Link>
          ))}
        </BooksContainer>
      </Container>
    );
  }
}
