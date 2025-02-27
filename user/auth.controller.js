const express = require('express');
const router = express.Router();
const AuthService = require('./auth.service');

router.post('/register', async (req, res) => {
    try {
        console.log("Registering user");
        const {email, password} = req.body;
        const authService = new AuthService();
        const user = await authService.register(email, password);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error registering user'});
    }
});

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const authService = new AuthService();
        const response = await authService.login(email, password);
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error logging in user'});
    }
});

module.exports = router;