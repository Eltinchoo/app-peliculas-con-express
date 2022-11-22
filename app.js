const express = require('express')

//* dentro de este movieRouter contiene todas las peticiones
const moviesRouter = require('./movies/movies.router')

const port = 9000
const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.json({
      message: 'Ok'  
    })
})

//* Importamos el router y con quedaría todo los archivos a nuestro app
app.use ('/', moviesRouter)


app.listen(port, () => {
    console.log('server corriendo ok');
})