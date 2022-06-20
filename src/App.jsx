import { set } from "lodash-es";
import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";
import DetailPanel from "./components/DetailsPanel";

const App = () => {
  // *1
  const [books, setBooks] = useState([]);
  //get selected book from list. Initial state is null as book is not selected
  const [selectedBook, setSelectedBook] = useState(null);
  //console.log("This message is going to load every time the component renders.");

  useEffect(() => {
    //*3
    const fetchData = async () => {
      try {
        //anything that comes next, after the await fetch, is suspended untill the return promise is complete
        const response = await fetch("https://book-club-json.herokuapp.com/books");
        //console.log("Here is what our fetch request returns", response);

        const books = await response.json();
        //console.log("Our json-ified response:", books);
        setBooks(books);
      } catch (errors) {
        console.log(errors);
      }
    };

    fetchData();
    // *2
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
  };

  console.log(selectedBook);
  console.log("the books array in our state: ", books);
  //books prop for the bookscontainer component and pass books value from the state variable
  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} />
      {/* *4 */}
      {selectedBook && <DetailPanel book={selectedBook} />};
    </>
  );
};

export default App;

/* *1
~We're going to create a new state variable. 
~This variable is going to store the API response as an array.
~We're going to call it books and the function to update it is going to be called setBooks and 
~the default is going to be an empty array.  */

/* 
*2
~ define a dependency array as a second argument in the useEffect function
~ going to pass in an empty array
~ Our effect doesn't depend on any props or state values since our data's coming from an external source (API), 
so it doesn't ever need to rerun
~ The effect is only going to run once, fetch our data and save it to the state's books value once
~ If we don't add an empty dependency array now, this function is going to get stuck in an infinite loop 
because it's going to rerun when the state is updated and then update the state 
which will then cause the same set of actions to happen over and over again.
 */

/* *3
~The async functions return promises, and they allow us to use the await keyword inside of it. 
~Together they remove the need for us to explicitly write promise chains, 
~await expressions make promise returning functions suspend executions until the return promise is completed
 */

//use effect function with no async await:
/* useEffect(() => {
  const fetchData = () => {
    fetch("https://book-club-json.herokuapp.com/books")
      .then((response) => {
        console.log("Here is what our fetch request returns", response);
        //.json() will turn the JSON object into a javascript object
        return response.json();
      })
      .then((books) => {
        console.log("Our json-ified response:", books);
        return setBooks(books);
      });
  };
        //response.ok returns a boolean value based off the response success
        //will only call the response.json() function on the repsonse object & setbooks function to
        //update the books array, if the response.ok returns true
  fetchData();
  // *2
}, []); */

/* *4
We get an error here if we just run DetailPanel component with no validation.
selectedBook is set to null by default, so the component would not be able to render. we will use this bool expression
to check if a book has been selected. If selectedBook = true (&&), render the DetailPanel component
if not do not render the DetailPanel component */
