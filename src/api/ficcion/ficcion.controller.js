const Ficcion = require("./ficcion.model");
const { setError } = require("../../helpers/error");

const getAllFicciones = async (req, res, next) => {
  try {
    const ficciones = await Ficcion.find();
    return res.json({
      status: 200,
      message: "Recover all ficciones",
      data: { ficciones },
    });
  } catch (error) {
    return next(setError(500, "Failed all Ficciones"));
  }
};

const getFiccionByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ficcion = await Ficcion.findById(id);
    if (!ficcion) return next(setError(404, "Ficcion not found"));
    return res.json({
      status: 200,
      message: "Recover ficcion by ID",
      data: { ficcion },
    });
  } catch (error) {
    return next(setError(500, "Failed Ficcion by ID"));
  }
};

const createFiccion = async (req, res, next) => {
  try {
    const FiccionToSave = new Ficcion(req.body);
    const ficcionDB = await FiccionToSave.save();
    return res.json({
      status: 201,
      message: "Create ficcion",
      data: { ficcionDB },
    });
  } catch (error) {
    return next(setError(500, "Failed create Ficcion"));
  }
};

const updateFiccion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ficcion = new Ficcion(req.body);
    ficcion._id = id;
    const updatedFiccion = await Ficcion.findByIdAndUpdate(id, ficcion);
    if (!updatedFiccion) return next(setError(404, "Ficcion not found"));
    return res.json({
      status: 201,
      message: "Updated ficcion",
      data: { anime: updatedFiccion },
    });
  } catch (error) {
    return next(setError(500, "Failed updated ficcion"));
  }
};

const deleteFiccion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedFiccion = await Ficcion.findByIdAndDelete(id);
    if (!deletedFiccion) return next(setError(404, "Ficcion not found"));
    return res.json({
      status: 200,
      message: "deleted ficcion",
      data: { anime: deletedFiccion },
    });
  } catch (error) {
    return next(setError(500, "Failed deleted ficcion"));
  }
};

module.exports = {
  getAllFicciones,
  getFiccionByID,
  createFiccion,
  updateFiccion,
  deleteFiccion,
};
