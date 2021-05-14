import React from "react";
import Book from "./Book";

function Shelfs(props) {
  let currentShelfName = "";
  //switch the title
  switch (props.title) {
    case "Currently Reading":
      currentShelfName = "currentlyReading";
      break;
    case "Want To Read":
      currentShelfName = "wantToRead";
      break;
    case "Read":
      currentShelfName = "read";
      break;
    default:
      currentShelfName = "";
  }
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.books
                .filter((book) => book.shelf === currentShelfName)
                .map((book) => (
                  <li key={book.id}>
                    <Book shelfChange={props.shelfChange} book={book} />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shelfs;
