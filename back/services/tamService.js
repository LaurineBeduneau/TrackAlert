const axios = require('axios');
const csvtojson = require('csvtojson');

const TAM_DATA_ENDPOINT = "http://data.montpellier3m.fr/sites/default/files/ressources/TAM_MMM_TpsReel.csv";

const getTamData = async () => {
  try {
    const response = await axios.get(TAM_DATA_ENDPOINT);
    const tamData = await csvtojson().fromString(response.data);
    return tamData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données TAM:', error);
    throw error;
  }
};

module.exports = { getTamData };