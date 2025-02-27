const express = require('express');
const router = express.Router();
const PackagingService = require('./packaging.service');

router.post('/create', async (req, res) => {
    try {
        const {name, description} = req.body;
        const packagingService = new PackagingService();
        const packaging = await packagingService.createPackaging({name, description});
        res.send(packaging);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message});
    }
});

router.get('/get', async (req, res) => {
    try {
        const packagingService = new PackagingService();
        const packagings = await packagingService.getAllPackagings();
        res.send({packagings});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error getting packagings'});
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const packagingService = new PackagingService();
        const packaging = await packagingService.getPackaging(id);
        res.send(packaging);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error getting packaging'});
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {name, description} = req.body;
        const packagingService = new PackagingService();
        const packaging = await packagingService.updatePackaging(id, {name, description});
        res.send(packaging);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error updating packaging'});
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const packagingService = new PackagingService();
        const packaging = await packagingService.deletePackaging(id);
        res.send(packaging);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error deleting packaging'});
    }
});

module.exports = router;
