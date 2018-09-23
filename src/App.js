import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PageTitle from './PageTitle'
import ListCurrentlyReading from './ListCurrentlyReading'
import ListWantToRead from './ListWantToRead'
import ListRead from './ListRead'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <div className="list-books">
            <PageTitle />
            <div className="list-books-content">
              <div>
                <ListCurrentlyReading
                  books={this.state.books}
                />
                <ListWantToRead
                  books={this.state.books}
                />
                <ListRead
                  books={this.state.books}
                />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp