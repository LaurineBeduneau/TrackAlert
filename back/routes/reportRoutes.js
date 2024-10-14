const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
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
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const reports = await Report.find().populate('userId', 'username');
        res.json(reports);
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la récupération des signalements' });
    }
});

module.exports = router;