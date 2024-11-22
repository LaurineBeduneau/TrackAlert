const Report = require('../models/Report');
const { getTamData } = require('../services/tamService');

const createReport = async (req, res) => {
    const { location } = req.body;
    const report = new Report({
        userId: req.user.id,
        location,
    });

    try {
        await report.save();
        res.status(201).json({ message: 'Signalement créé' });
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la création du signalement' });
    }
};

const getTamReports = async (req, res) => {
    try {
        const tamData = await getTamData();
        res.status(200).json(tamData);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données TAM' });
    }
};

module.exports = { createReport, getTamReports };