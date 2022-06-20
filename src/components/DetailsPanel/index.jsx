import React from "react";

const DetailPanel = ({ book }) => (
  <article>
    <figure>
      <img src={book.image} alt="" />
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
    </figure>

    <p>{book.description}</p>
    <p>
      <em>Published in {book.published}</em>
    </p>
  </article>
);

export default DetailPanel;
