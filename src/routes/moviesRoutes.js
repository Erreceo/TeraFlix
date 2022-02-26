const express = require("express");
const router = express.Router();

const controllers = require("../controllers/moviesController");

router.get("/all", controllers.getAll);

router.post("/create", controllers.createMovie);

module.exports = router