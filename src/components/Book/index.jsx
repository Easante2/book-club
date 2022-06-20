import React from "react";
import { Container, Cover, Title, Author } from "./styles";

//look at api request to check what the return json attributes are and apply to structure component
const Book = ({ book, pickBook }) => (
  <Container
    onClick={() => {
      pickBook(book);
    }}
  >
    <Cover alt={`Book cover for  ${book.title} by ${book.author}`} src={book.image} />
    <figcaption>
      <Title>{book.title}</Title>
      <Author>by {book.author}</Author>
    </figcaption>
  </Container>
);

export default Book;
