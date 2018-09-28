# MyReads Project

This is a project for Udacity's React Fundamentals course. It provides CSS, HTML markup, and backend server. I completed the project by writing the React code to make the project interactive.

I started the project with the starter code that can be found in [starter repository](https://github.com/udacity/reactnd-project-myreads-starter). This project is hard for React beginner like me, I need to do some digging online to finish the project. Really thanks to online resources posted by students: [FEND Resources](https://sites.google.com/udacity.com/gwgdevscholarship/fend)

## To Install and Launch Project

* download the project from [github repository](https://github.com/sukpia/reactnd-project-myreads-starter)
* change directory to the downloaded folder
* install all project dependencies with `npm install`
* launch the project with `npm start`
* the project requires react-router-dom for BrowseRouter, Link, and Route components

## Required App Functionality - completed all

### Main Page:
* Shows 3 shelves for books: Currently Reading, Want to Read, and Read.
* Each book is shown on the correct shelf, along with its title and author(s).
* Shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
* When a browser is refreshed, the same information is displayed on the page.

### Search Page:
* Has a search input field.
* The search page behaves correctly:
  - As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s). You can use throttle/debounce but are not required to do so.
  - Search results are not shown when all of the text is deleted out of the search input box.
  - Invalid queries are handled and prior search results are not shown.
  - The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
  - The user is able to search for multiple words, such as “artificial intelligence.”
* Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
  - If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
* When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

### Routing:
* The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
* The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

### Code Functionality:
* Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
* Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
* The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

## Extra Functionality - not implemented yet

1. Rating the Books
2. The ability of Book moves Books from one category to another category

## Backend Server

This project provides a backend server in file [`BooksAPI.js`](src/BooksAPI.js). The available methods are:

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
