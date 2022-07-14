const express = require('express')
const app = express()
const server = require('http').createServer(app)
require('dotenv').config()

//Middlewares
const cors = require('cors')
app.use(cors())
app.use(express.json({ limit: 100000 }))

//Importing required request handlers
const getAllBooksData = require('./requestHandlers/getAllBooks')
const createNewBook = require('./requestHandlers/createNewBook')
const deleteBook = require('./requestHandlers/deleteBook')
const getBookDetails = require('./requestHandlers/getBookDetails')
const editBookDetails = require('./requestHandlers/editBookDetails')
const authenticateUser = require('./requestHandlers/authenticateUser')

const port = process.env.PORT || 3001
app.listen(port, () =>
  console.log(`Vehicle tracking server activated.\nListening at :${port}...`),
)

//API Endpoint to get all books from the DB.
app.get('/api/getAllBooks', async (request, response) => {
  console.log(`\n${Date()} \n`)
  console.log(`New request for ALL BOOKS received...\n`)
  const responseForClient = await getAllBooksData.getAllBooksData()
  response.json(responseForClient)
  response.end()
})

//API Endpoint to create a new book on the DB.
app.post('/api/createNewBook', async (request, response) => {
  console.log(`\n${Date()} \n`)
  console.log(`New request to CREATE A NEW BOOK received...\n`)
  const responseForClient = await createNewBook.createNewBook(request.body)
  response.json(responseForClient)
  response.end()
})

//API Endpoint to delete a book from the DB.
app.post('/api/deleteBook', async (request, response) => {
  console.log(`\n${Date()} \n`)
  console.log(`New request to DELETE A BOOK received...\n`)
  const responseForClient = await deleteBook.deleteBook(request.body.bookId)
  response.json(responseForClient)
  response.end()
})

//API Endpoint to get details of a book from the DB.
app.post('/api/getBookDetails', async (request, response) => {
  console.log(`\n${Date()} \n`)
  console.log(`New request to GET A BOOK'S DETAILS received...\n`)
  const responseForClient = await getBookDetails.getBookDetails(
    request.body.bookId,
  )
  response.json(responseForClient)
  response.end()
})

//API Endpoint to edit the details of a book from the DB.
app.post('/api/editBookDetails', async (request, response) => {
  console.log(`\n${Date()} \n`)
  console.log(`New request to EDIT A BOOK'S DETAILS received...\n`)
  console.log(request.body)
  const responseForClient = await editBookDetails.editBookDetails(request.body)
  response.json(responseForClient)
  response.end()
})

//API Endpoint to AUTHENTICATE USER.
app.post('/api/authenticateUser', async (request, response) => {
  console.log(`\n${Date()} \n`)
  console.log(`New request to AUTHENTICATE USER received...\n`)
  console.log(request.body)
  const responseForClient = await authenticateUser.authenticateUser(
    request.body.username,
    request.body.password,
  )
  response.json(responseForClient)
  response.end()
})
