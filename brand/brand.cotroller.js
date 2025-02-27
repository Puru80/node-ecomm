const express = require('express');
const router = express.Router();
const BrandService = require('./brand.service');

router.post('/create', async (req, res) => {
    try {
        const {name, description} = req.body;
        const brandService = new BrandService();
        const brand = await brandService.create(name, description);
        res.send(brand);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message});
    }
});

router.get('/get', async (req, res) => {
    try {
        const brandService = new BrandService();
        const brands = await brandService.getAll();
        res.send({brands});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error getting brands'});
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const brandService = new BrandService();
        const brand = await brandService.getById(id);
        res.send(brand);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error getting brand'});
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {name, description} = req.body;
        const brandService = new BrandService();
        const brand = await brandService.update(id, name, description);
        res.send(brand);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error updating brand'});
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const brandService = new BrandService();
        const brand = await brandService.delete(id);
        res.send(brand);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error deleting brand'});
    }
});