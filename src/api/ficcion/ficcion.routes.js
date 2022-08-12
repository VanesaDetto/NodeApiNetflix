const FiccionesRoutes = require("express").Router();
const {
  getAllFicciones,
  getFiccionByID,
  createFiccion,
  updateFiccion,
  deleteFiccion,
} = require("./ficcion.controller");

FiccionesRoutes.get("/getAll", getAllFicciones);
FiccionesRoutes.get("/getByID/:id", getFiccionByID);
FiccionesRoutes.post("/create", createFiccion);
FiccionesRoutes.patch("/patch:id", updateFiccion);
FiccionesRoutes.delete("/delete:id", deleteFiccion);

module.exports = FiccionesRoutes;
