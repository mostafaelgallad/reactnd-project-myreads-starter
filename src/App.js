import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./Views/MainPage";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import {} from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data,
      });
    });
  }
  render() {
    //handle the change of the books shelfs and update the component state
    const shelfChange = async (e, book) => {
      let shelf = e.target.value;
      await BooksAPI.update(book, shelf);
      BooksAPI.getAll().then((data) => {
        this.setState({
          books: data,
        });
      });
    };

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} shelfChange={shelfChange} />
          )}
        />
        <Route
          path="/search"
          render={() => <Search shelfChange={shelfChange} />}
        />
      </div>
    );
  }
}

export default BooksApp;
