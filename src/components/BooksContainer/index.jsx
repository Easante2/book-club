import React, { useRef, useEffect, useState } from "react";
import { debounce } from "lodash-es";
import { Container, H2, BooksList } from "./styles.js";
import Book from "../Book";

const BooksContainer = ({ books, pickBook, isPanelOpen, title }) => {
  const [scroll, setScroll] = useState(0);
  const prevPanelState = useRef(false);

  // *1
  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY);
    }, 100);

    if (!isPanelOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPanelOpen]);

  //*2
  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll);
    }

    prevPanelState.current = isPanelOpen;
  }, [isPanelOpen, prevPanelState, scroll]);

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
      <BooksList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook}></Book>
        ))}
      </BooksList>
    </Container>
  );
};

export default BooksContainer;

// **1
// we want to call setScroll to capture the browsers Y coordinate scroll position,
// but we only want that to happen after 100 milliseconds has passed
// **1.1
// we're going to add, isPanelOpen to the dependency array as a second argument.
// This way, useEffect is only going to run when isPanelOpen's value changes
// **1.2
// The clean up function runs before the component is removed from the UI. In our case,
// we want to remove any existing scroll event handlers before our useEffect function gets rerun.

// *2
// We don't want to scroll horizontally, so we set the value to 0
