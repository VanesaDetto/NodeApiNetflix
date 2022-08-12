const RomanticasRoutes = require("express").Router();
const {
  getAllRomanticas,
  getRomanticaByID,
  createRomantica,
  updateRomantica,
  deleteRomantica,
} = require("./romantica.controller");

RomanticasRoutes.get("/getAll", getAllRomanticas);
RomanticasRoutes.get("/getByID/:id", getRomanticaByID);
RomanticasRoutes.post("/create", createRomantica);
RomanticasRoutes.patch("/patch:id", updateRomantica);
RomanticasRoutes.delete("/delete:id", deleteRomantica);

module.exports = RomanticasRoutes;
