//? Este archivo va a manejar todo lo relacionado a la base de datos

const moviesDB = []

let id = 0

const findAllMovies = () => {
    //? Esta funcion debe de traer todas las peliculas de mi base de datos
    return moviesDB
}

const findMovieByID = (id) => {
    //? Esta funcion debe de traer la pelicula por su id de mi base de datos
    const movie = moviesDB.find( item => item.id == id)
    return movie
}

const createMovie = (obj) => {
    //? Esta funcion debe de crear una nueva pelicula en mi base de datos y retornar la pelicula creada
    const newMovie = {
        id: id++,
        title: obj.title,
        year: obj.year,
        director: obj.director,
        genre : obj.genre
    }
    moviesDB.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieByID,
    createMovie
}