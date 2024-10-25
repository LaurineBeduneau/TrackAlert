const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Inscription
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Utilisateur déjà existant' });
        }

        user = new User({
            username,
            email,
            password: await bcrypt.hash(password, 10),
        });

        await user.save();

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ msg: 'Erreur lors de l\'inscription' });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            console.log('Utilisateur non trouvé')
            return res.status(400).json({ msg: 'Utilisateur non trouvé' });
        }

        console.log('Utilisateur trouvé', user);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Mot de passe incorrect' });
        }

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        console.log('Connexion réussie, token généré');
        res.json({ token });
    } catch (error) {
        console.error('Erreur de connexion:',error)
        res.status(500).json({ msg: 'Erreur lors de la connexion' });
    }
};

module.exports = { registerUser, loginUser };