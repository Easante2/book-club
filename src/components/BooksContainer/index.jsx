import React from "react";
import { Container, H2, BooksList } from "./styles.js";
import Book from "../Book";

const BooksContainer = ({ books, pickBook }) => (
  <Container>
    <H2>All Books</H2>
    <BooksList>
      {books.map((book) => (
        <Book key={book.id} book={book} pickBook={pickBook}></Book>
      ))}
    </BooksList>
  </Container>
  //code
);

export default BooksContainer;
