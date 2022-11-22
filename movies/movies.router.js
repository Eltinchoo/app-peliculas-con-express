//? En este archivo vamos a tener las rutas y sus respectivos verbos


//* primero importamos express y accedemos a router importandolo accediendo como si fuera una propiedad y lo ejecutamos
const router = require('express').Router()

const moviesServices = require('./movies.services')
router.get('/movies', moviesServices.getAllMovies)
router.post('/movies', moviesServices.postAMovie)
router.get('/movies/:id', moviesServices.getAllMovies)

module.exports = router