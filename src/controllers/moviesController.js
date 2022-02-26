const res = require("express/lib/response");
const movies = require("../model/movies.json")

const getAll = (request, response) => {
    response.status(200).send(movies)
};

const createMovie = (request, response) => {
    // lógica para criação desse filme dentro da lista
    console.log(request.body.title)

    // acessar as informações que vem da requisão
    let requestedTitle = request.body.title 
    let requestedGenre = request.body.title 

    let newMovie = {
        "title": requestedTitle
    }

    response.status(200).send("Ainda não foi criado")
}

module.exports = {
    getAll,
    createMovie
}