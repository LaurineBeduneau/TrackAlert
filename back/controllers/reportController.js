const Report = require('../models/Report');

const createReport = async (req, res) =>{
    const {location} = req.body;

    const report = new Report({
        userId: req.user.id,
        location,
    });

    try {
        await report.save();
        res.status(201).json({message: 'Signalement créé'});
    } catch(error) {
        res.status(400).json({error: 'Erreur lors de la création du signalement'})
    }
};

module.exports = {createReport};