const db = require('../initializeFirebase')

async function getBookDetails(bookId) {
  //Collecting all books data from the DB
  const booksRef = db.collection('books').where('bookId', '==', bookId)
  const booksData = await booksRef.get()

  //Declaring response data for the client
  var responseData

  booksData.forEach((obj) => {
    responseData = obj.data()
  })

  //Send back the collected data to the client
  return responseData
}

module.exports = { getBookDetails }
