const express = require('express')
const router = express.Router()
const books = require('../books')

router.get('/',(req,res) =>{
    try {
        res.status(200).json(books)
    } catch (error) {
        res.status(404).json({error:"Book not found"})
    }
})

router.get('/:id',(req,res)=>{
    try {
        const bookID = parseInt(req.params.id)
        const book = books.find(b=>b.id===bookID)

        if(!book){
            res.status(404).json({error:"Books not found"})
        }res.status(200).json(book)
    } catch (error) {
        res.status(404).json({error:error})
    }

})

module.exports = router