const db = require('../initializeFirebase')

async function getAllBooksData() {
  //Collecting all books data from the DB
  const booksRef = db.collection('books')
  const booksData = await booksRef.get()

  //Declaring response data for the client
  var responseData = []

  //Adding books data to the object
  booksData.forEach((obj) => {
    responseData.push(obj.data())
  })

  //Send back the collected data to the client
  console.log(responseData)
  return responseData
}

module.exports = { getAllBooksData }
