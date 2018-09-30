/*
 * Got a lot of help from Maeva youtube video:
 * https://www.youtube.com/watch?v=i6L2jLHV9j8&feature=youtu.be
*/

import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  changeShelf = (book, shelf) => {
    // update the external data in backend server
    BooksAPI.update(book, shelf);

    // create a copy of the Main Page books array
    let tmpBooks = [...this.state.books];
    // find the index where the book title is the same as the selected book
    // let index = tmpBooks.findIndex(el => el.id === book.id);
    let found = tmpBooks.find((el) => el.id === book.id);
    // console.log(found);
    // if change shelf from main page
    if (found) {
      // set the new shelf for the selected book
      // tmpBooks[index].shelf = shelf;
      found.shelf = shelf
      // change the state for the Main Page books
      this.setState({ tmpBooks });
    } else { // else if change shelf from search page
      BooksAPI.getAll().then((books) => {
        this.setState({books});
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <MainPage 
              books={this.state.books}
              onChangeShelf={this.changeShelf}
            />
        )}/>
        <Route path="/search" render={({ history }) => (
          <SearchPage 
          books={this.state.books}
          onChangeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp