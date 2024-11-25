const axios = require('axios');
const csvtojson = require('csvtojson');
const protobuf = require('protobufjs');

const TAM_DATA_ENDPOINT = "http://data.montpellier3m.fr/sites/default/files/ressources/TAM_MMM_TpsReel.csv";

const root = protobuf.loadSync('back/proto/tam.proto');
const VehicleList = root.lookupType('tam.VehicleList');  // Accède au type VehicleList

const getTamData = async () => {
  try {
    const response = await axios.get(TAM_DATA_ENDPOINT);
    const tamData = await csvtojson().fromString(response.data);
    const message = VehicleList.create({ vehicles: tamData });
    const buffer = VehicleList.encode(message).finish();

    return buffer; 
  } catch (error) {
    console.error('Erreur lors de la récupération des données TAM:', error);
    throw error;
  }
};

module.exports = { getTamData };