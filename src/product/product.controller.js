const express = require('express');
const router = express.Router();
const ProductService = require('./product.service');

router.post('/create', async (req, res) => {
    try {
        const {name, category, brand} = req.body;
        const productService = new ProductService();
        const product = await productService.create(name, category, brand);
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message});
    }
});

router.get('/get', async (req, res) => {
    try {
        const productService = new ProductService();
        const products = await productService.getAll();
        res.send({products});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error getting products'});
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const productService = new ProductService();
        const product = await productService.getById(id);
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error getting product'});
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {name, category, brand} = req.body;
        const productService = new ProductService();
        const product = await productService.update(id, name, category, brand);
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error updating product'});
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const productService = new ProductService();
        const product = await productService.delete(id);
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error deleting product'});
    }
});

module.exports = router;