const express = require('express')
const bookRouter = require('./routes/bookRouter')

const app = express()

app.use('/books',bookRouter)


app.listen(4001, ()=>{
    console.log("Server running on 4001")
})