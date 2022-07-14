const db = require('../initializeFirebase')

//Function to delete existing book from DB
async function deleteBook(bookId) {
  console.log(bookId)
  //To send the refreshed list of books after deletion
  var responseForClient = []

  if (db.collection('books').doc(bookId).delete()) {
    //Collecting all books data from the DB
    const booksRef = db.collection('books')
    const booksData = await booksRef.get()

    //Adding books data to the object
    booksData.forEach((obj) => {
      responseForClient.push(obj.data())
    })
  }

  console.log(responseForClient)
  return responseForClient
}

module.exports = { deleteBook }
