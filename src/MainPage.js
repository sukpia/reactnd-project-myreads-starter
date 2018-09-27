import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class MainPage extends Component {
	changeShelf = (event, book) => {
		// create a copy of the existing books array
	    let newBooks = [...this.props.books];
	    // find the index where the book title is the same as the selected book
	    let index = newBooks.findIndex(el => el.title === book.title);
	    // set the new shelf for the selected book
	    newBooks[index].shelf = event.target.value;
	    // change the state for the books
	    this.setState({ newBooks });
	    // update the external data in backend server
	    BooksAPI.update(book, event.target.value);
	}

	render() {
		const { books } = this.props
		return (
			<div className="list-books">
				<div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	            	<div>
	            		<div className="bookshelf">
					        <h2 className="bookshelf-title">Currently Reading</h2>
					        <div className="bookshelf-books">
					          <ol className="books-grid">
					            {books.filter(book => book.shelf === "currentlyReading").map((book) => (
					              <li key={book.id}>
					                <Book book={book} onChangeShelf={this.changeShelf}/>
					              </li>
					            ))}
					          </ol>
					        </div>
				      	</div>
				      	<div className="bookshelf">
					        <h2 className="bookshelf-title">Want to Read</h2>
					        <div className="bookshelf-books">
					          <ol className="books-grid">
					            {books.filter(book => book.shelf === "wantToRead").map((book) => (
					              <li key={book.id}>
					                <Book book={book} onChangeShelf={this.changeShelf}/>
					              </li>
					            ))}
					          </ol>
					        </div>
				      	</div>
				      	<div className="bookshelf">
					        <h2 className="bookshelf-title">Read</h2>
					        <div className="bookshelf-books">
					          <ol className="books-grid">
					            {books.filter(book => book.shelf === "read").map((book) => (
					              <li key={book.id}>
					                <Book book={book} onChangeShelf={this.changeShelf}/>
					              </li>
					            ))}
					          </ol>
					        </div>
				      	</div>
				      	<div className="open-search">
			              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
			            </div>
	            	</div>
	            </div>
			</div>
		)
	}
}

export default MainPage