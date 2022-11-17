const express = require('express')

const port = 9000
const app = express()

app.use(express.json())

const moviesDB = []
let id = 0

app.get('/', (req, res) => {
    res.json({
      message: 'Ok'  
    })
})

app.get('/movies', (req, res) => {
    res.status(200).json(moviesDB)
})

app.post('/movies', (req, res) => {
    const {title, year, director, genre} = req.body

    if(title && year && director && genre){
        const newMovie = {
            id: id++,
            title,
            year,
            director,
            genre
        }
        moviesDB.push(newMovie)
        res.status(200).json(newMovie)
    }else {
        res.status(400).json({message: 'invalid data'})
    }
})

app.get('/movies/:id', (req,res) => {
    const id = req.params.id
    const movies = moviesDB.find( movie => movie.id == id)

    if(movies){
        res.status(200).json(movies)
    }else {
        res.status(404).json({message: 'invalid ID'})
    }
})

app.listen(port, () => {
    console.log('server corriendo ok');
})