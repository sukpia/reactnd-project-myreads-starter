import React, { Component } from 'react'

class ListBooks extends Component {
	render() {
		console.log(this.props)
		const { books } = this.props
		return (
			<div className="bookshelf">
              <h2 className="bookshelf-title">All Books</h2>
              <div className="bookshelf-books">
	              <ol className="books-grid">
	              	{books.map((book) => (
	              		<li key={book.title}>
	              			<div className="book">
	              				<div className="book-top">
	              					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
	              				</div>
	              				<div className="book-title">{book.title}</div>
	          					<div className="book-authors">{book.authors}</div>
	              			</div>
	              		</li>
	              	))}
	              </ol>
              </div>
            </div>
		)
	}
}

export default ListBooks