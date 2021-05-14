import React from "react";
import Shelfs from "../components/Shelfs";
import { Link } from "react-router-dom";
function MainPage(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Shelfs
        title="Currently Reading"
        books={props.books}
        shelfChange={props.shelfChange}
      />
      <Shelfs
        title="Want To Read"
        books={props.books}
        shelfChange={props.shelfChange}
      />
      <Shelfs
        title="Read"
        books={props.books}
        shelfChange={props.shelfChange}
      />
      <div className="open-search">
        <Link to="/search"> Add a book</Link>
      </div>
    </div>
  );
}

export default MainPage;
