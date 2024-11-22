const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { createReport, getTamReports } = require('../controllers/reportController');

router.post('/', authMiddleware, createReport);

router.get('/', authMiddleware, async (req, res) => {
    try {
        const reports = await Report.find().populate('userId', 'username');
        res.json(reports);
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la récupération des signalements' });
    }
});

router.get('/tam', authMiddleware, getTamReports);

module.exports = router;