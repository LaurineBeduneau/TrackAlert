const { fetchTAMData } = require("../services/tamService");

async function getTAMData(req, res) {
  try {
    const data = await fetchTAMData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des données TAM" });
  }
}

module.exports = { getTAMData };
