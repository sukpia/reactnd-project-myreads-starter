
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
	state = {
		query: '',
		searchedBooks: []
	}


	updateQuery = (query) => {
		this.setState({ query: query })
		this.updateSearchedBooks(query);
	}

	updateSearchedBooks = (query) => {
		if (query) {
			BooksAPI.search(query).then((searchedBooks) => {
				if (searchedBooks.error) {
					// if there is search error, set searchedBooks to empty array to prevent rendering error
					this.setState({ searchedBooks: []})
				} else {
					this.setState({ searchedBooks })
				}
			})
		} else {
			this.setState({ searchedBooks: [] });
		}
	}

	render() {
		const { query, searchedBooks } = this.state
		const { books, onChangeShelf } = this.props
		
		// console.log(this.state.searchedBooks)

		return (
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link className="close-search" to="/">Close</Link>
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
	                	value = {query}
	                	onChange={(event) => this.updateQuery(event.target.value) }/>

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{
	              		searchedBooks.map((searchedBook) => {
	              			let shelf = "none";
	              			// need to set a dynamic shelf so the current shelf status is displayed on Search Page
	              			books.map((book) => (
	              				book.id === searchedBook.id ? shelf = book.shelf : ''
	              			))
		              		return (
		              			<li key={searchedBook.id}>
		              				<Book book={searchedBook} onChangeShelf={onChangeShelf} displayShelf={shelf}/>
		              			</li>
		              		)
	              		})
	              	}
	              </ol>
	            </div>
          	</div>
		)
	}
}

export default SearchPage