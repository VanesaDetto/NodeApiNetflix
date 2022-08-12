const Anime = require("./anime.model");
const { setError } = require("../../helpers/error");

const getAllAanimes = async (req, res, next) => {
  try {
    const animes = await Anime.find();
    return res.json({
      status: 200,
      message: "Recover all animes",
      data: { animes },
    });
  } catch (error) {
    return next(setError(500, "Failed all Animes"));
  }
};

const getAnimeByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const anime = await Anime.findById(id);
    if (!anime) return next(setError(404, "Anime not found"));
    return res.json({
      status: 200,
      message: "Recover anime by ID",
      data: { anime },
    });
  } catch (error) {
    return next(setError(500, "Failed Anime by ID"));
  }
};

const createAnime = async (req, res, next) => {
  try {
    const AnimeToSave = new Anime(req.body);
    const animeDB = await AnimeToSave.save();
    return res.json({
      status: 201,
      message: "Create anime",
      data: { animeDB },
    });
  } catch (error) {
    return next(setError(500, "Failed create Anime"));
  }
};

const updateAnime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const anime = new Anime(req.body);
    anime._id = id;
    const updatedAnime = await Anime.findByIdAndUpdate(id, anime);
    if (!updatedAnime) return next(setError(404, "Anime not found"));
    return res.json({
      status: 201,
      message: "Updated anime",
      data: { anime: updatedAnime },
    });
  } catch (error) {
    return next(setError(500, "Failed updated anime"));
  }
};

const deleteAnime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAnime = await Anime.findByIdAndDelete(id);
    if (!deletedAnime) return next(setError(404, "Anime not found"));
    return res.json({
      status: 200,
      message: "deleted anime",
      data: { anime: deletedAnime },
    });
  } catch (error) {
    return next(setError(500, "Failed deleted anime"));
  }
};

module.exports = {
  getAllAanimes,
  getAnimeByID,
  createAnime,
  updateAnime,
  deleteAnime,
};
