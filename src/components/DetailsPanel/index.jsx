import React, { useEffect, useRef } from "react";
import { Panel, P, Em, Close, CloseWrapper, BG } from "./styles";
import Book from "../Book";

const DetailPanel = ({ book, closePanel, state }) => {
  const panelEl = useRef(null);
  const prevBook = useRef(null);

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0;
    }
  }, [book, prevBook]);

  console.log(state);
  return (
    <>
      {/* *1 */}
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        {/* *2 */}
        {book && (
          <>
            <Book book={book} isLarge={true} />
            {/* *3 */}
            <P>{book.description}</P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  );
};

export default DetailPanel;

// *1
// Because we want the opaque backgorund <BG> to sit just before the Detail Panel
// we will need a new parent element to wrap everything in

/* *2
~ We're only going to render the book component and the following paragraph and emphasis component 
if there's a valid book object.

~ By using the logical and operator signified by the double ampersands, 
~ We ensure that nothing below the close wrapper component gets rendered before there's a valid selected book to display

~if a book has been selected. If book = true then (&&) render the Book component
if not do not render the Book component
*/

/* *3 
old code: 
       {/*     <figure>
      <img src={book.image} alt="" /> 
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
    </figure> } */
