const AnimesRoutes = require("express").Router();
const {
  getAllAanimes,
  getAnimeByID,
  createAnime,
  updateAnime,
  deleteAnime,
} = require("./anime.controller");

AnimesRoutes.get("/getAll", getAllAanimes);
AnimesRoutes.get("/getByID/:id", getAnimeByID);
AnimesRoutes.post("/create", createAnime);
AnimesRoutes.patch("/patch:id", updateAnime);
AnimesRoutes.delete("/delete:id", deleteAnime);

module.exports = AnimesRoutes;
