const db = require('../initializeFirebase')
const { uuid } = require('uuidv4')

//Function to add new book to DB
async function createNewBook(bookDetailsObject) {
  //To inform client device the status of the request
  var responseForClient = {
    success: false,
    message: (message = `'${bookDetailsObject.title}' could not be added to the library. Please try again later.`),
  }

  //Creat a new ID for the book
  const bookId = uuid()

  //Add the ID to the bookObject received from the client
  var bookDetails = bookDetailsObject
  bookDetails.bookId = bookId

  //Add book to DB
  if (db.collection('books').doc(bookId).set(bookDetails)) {
    responseForClient.success = true
    responseForClient.bookId = bookId
    responseForClient.message = `'${bookDetailsObject.title}' was added to the library!`
  }
  return responseForClient
}

module.exports = { createNewBook }
