import React from "react";

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${
              props.book.imageLinks ? props.book.imageLinks.thumbnail : ""
            }")`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={props.book.shelf !== undefined ? props.book.shelf : "none"}
            className="shelfChange"
            onChange={(e) => props.shelfChange(e, props.book)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book.authors &&
        props.book.authors.map((author) => (
          <div className="book-authors" key={author}>
            {author}
          </div>
        ))}
    </div>
  );
}

export default Book;
