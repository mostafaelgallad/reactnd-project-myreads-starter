import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";

import Book from "../components/Book";

class Search extends Component {
  state = {
    books: [],
  };
  render() {
    //get the query from the input and send it to the Api then set book state with the result
    const SearchHandle = async (e) => {
      let query = e.target.value;
      if (query.trim()) {
        let result = await search(query);
        this.setState({
          books: result,
        });
      }
    };
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(d) => SearchHandle(d)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {//check if the book state is undefined
            this.state.books !== undefined &&
              //check for the count inside book state
              this.state.books.length > 0 &&
              //render all the books
              this.state.books.map((book) => (
                <li key={book.id}>
                  <Book shelfChange={this.props.shelfChange} book={book} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
