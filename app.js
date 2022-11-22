const express = require('express')

const port = 9000
const app = express()

app.use(express.json())

const moviesDB = []


app.get('/', (req, res) => {
    res.json({
      message: 'Ok'  
    })
})

app.use ('/', moviesRouter)


app.listen(port, () => {
    console.log('server corriendo ok');
})