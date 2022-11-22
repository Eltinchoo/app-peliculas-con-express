//? En este archivo vamos a utilizar todo lo relacionado al REQ y RES

const moviesControllers = require('./movies.controllers')


const getAllMovies = (req, res) => {
    
    //* primero ejecutamos nuestro controlador y lo guardamos en una variable
    const data = moviesControllers.findAllMovies()
    
    //* luego mostramos el resultado despues de haber ejecutado el findAllMovies()
    res.status(200).json(data)
}

const getMovieByID = (req, res) => {
    //* obtenemos el id por parametros
    const id = req.params.id

    //* pasamos como parametro el id a la funcion findMivieByID
    const data = moviesControllers.findMovieByID(id)

    //* manejamos datos y errores
    //* si esta ok se muestra la info
    if(data){
        res.status(200).json(data)

        //* si hay un error manejamos el error
    } else {
        res.status(404).json({message: 'invalid id'})
    }
}

const postAMovie = (req, res) => {
    const {title, year, director, genre} = req.body

    if(title && year && director && genre){
        const data = moviesControllers.createMovie({title, year, director, genre})
        //* pasamos el status 202 para crear algo nuevo en caso que sea exitoso el post
        res.status(201).json(data)

    } else {
    res.status(400).json({message: 'invalid data', fields: {title: 'String', year: 'Number', director: ' String', genre:'String'}})
    }
} 

module.exports = {
    getAllMovies,
    getMovieByID,
    postAMovie
}
