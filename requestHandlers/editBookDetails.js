const db = require('../initializeFirebase')

//Function to edit Book details on DB
async function editBookDetails(bookDetailsObject) {
  //To inform client device the status of the request
  var responseForClient = {
    success: false,
    message: (message = `'${bookDetailsObject.title}' could not be edited. Please try again later.`),
  }

  //Add book to DB
  if (
    db
      .collection('books')
      .doc(bookDetailsObject.bookId)
      .update(bookDetailsObject)
  ) {
    responseForClient.success = true
    responseForClient.bookId = bookDetailsObject.bookId
    responseForClient.message = `'${bookDetailsObject.title}' was edited!`
  }
  return responseForClient
}

module.exports = { editBookDetails }
