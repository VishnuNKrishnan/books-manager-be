const db = require('../initializeFirebase')

async function authenticateUser(username, password) {
  //Collecting all books data from the DB
  const booksRef = db.collection('users')
  const booksData = await booksRef.where('username', '==', username).get()

  //Declaring response data for the client
  var responseData = { authenticated: false }

  //Adding books data to the object
  booksData.forEach((obj) => {
    responseData = obj.data()
  })

  //Send back the collected data to the client
  if (responseData.password == password) {
    responseData.authenticated = true
    console.log(responseData)
    return responseData
  } else {
    console.log(responseData)
    return responseData
  }
}

module.exports = { authenticateUser }
