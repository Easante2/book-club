import { set } from "lodash-es";
import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";
import DetailPanel from "./components/DetailsPanel";
import { Transition } from "react-transition-group";

const App = () => {
  // *1
  const [books, setBooks] = useState([]);
  //get selected book from list. Initial state is null as book is not selected
  const [selectedBook, setSelectedBook] = useState(null);
  //console.log("This message is going to load every time the component renders.");
  const [showPanel, setShowPanel] = useState(false);

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
    setShowPanel(true);
  };

  const closePanel = () => {
    //*5
    setShowPanel(false);
  };

  console.log(selectedBook);
  console.log("the books array in our state: ", books);
  //books prop for the bookscontainer component and pass books value from the state variable
  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={showPanel} />
      {/* *6 */}
      <Transition in={showPanel} timeout={300}>
        {/* *4 */}
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />};
      </Transition>
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
~ We're going to define state as an argument and then we're going to move the detail panel component
~ so that it's now inside the function body and we're going to create a prop for it called state */

/* *5
~ And instead of setting the selected book to null, we're just going to set the set show panel function value back to false. 
~ This is because if we remove the book while the panel is still closing, 
~ it's going to be sort of an awkward animation because you're going to see the book disappear */

/* *6
~ Transition component doesn't alter the behavior of the component itself and it only tracks the enter and exit states for the component
~ Add an in prop. This is what's going to toggle the transition state. 
~ When the in props value evaluates to true, then the detail panel will begin its enter stage
~ Timeout = duration of transition
 */
