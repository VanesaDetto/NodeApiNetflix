const Romantica = require("./romantica.model");
const { setError } = require("../../helpers/error");

const getAllRomanticas = async (req, res, next) => {
  try {
    const romanticas = await Romantica.find();
    return res.json({
      status: 200,
      message: "Recover all romanticas",
      data: { romanticas },
    });
  } catch (error) {
    return next(setError(500, "Failed all Romanticas"));
  }
};

const getRomanticaByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const romantica = await Romantica.findById(id);
    if (!romantica) return next(setError(404, "Romantica not found"));
    return res.json({
      status: 200,
      message: "Recover romantica by ID",
      data: { romantica },
    });
  } catch (error) {
    return next(setError(500, "Failed Romantica by ID"));
  }
};

const createRomantica = async (req, res, next) => {
  try {
    const RomanticaToSave = new Romantica(req.body);
    const romanticaDB = await RomanticaToSave.save();
    return res.json({
      status: 201,
      message: "Create romantica",
      data: { romanticaDB },
    });
  } catch (error) {
    return next(setError(500, "Failed create Romantica"));
  }
};

const updateRomantica = async (req, res, next) => {
  try {
    const { id } = req.params;
    const romantica = new Romantica(req.body);
    romantica._id = id;
    const updatedRomantica = await Romantica.findByIdAndUpdate(id, romantica);
    if (!updatedRomantica) return next(setError(404, "Romantica not found"));
    return res.json({
      status: 201,
      message: "Updated romantica",
      data: { updatedRomantica },
    });
  } catch (error) {
    return next(setError(500, "Failed updated romantica"));
  }
};

const deleteRomantica = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRomantica = await Romantica.findByIdAndDelete(id);
    if (!deletedRomantica) return next(setError(404, "Romantica not found"));
    return res.json({
      status: 200,
      message: "deleted romantica",
      data: { deletedRomantica },
    });
  } catch (error) {
    return next(setError(500, "Failed deleted romantica"));
  }
};

module.exports = {
  getAllRomanticas,
  getRomanticaByID,
  createRomantica,
  updateRomantica,
  deleteRomantica,
};
