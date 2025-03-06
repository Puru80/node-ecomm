const express = require('express');
const router = express.Router();
const CategoryService = require('./category.service');

router.post('/create', async (req, res) => {
    try {
        const {name, description} = req.body;
        const categoryService = new CategoryService();
        const category = await categoryService.create(name, description);
        res.send(category);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message});
    }
});

router.get('/get', async (req, res) => {
    try {
        const categoryService = new CategoryService();
        const categories = await categoryService.getAll();
        res.send({categories});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error getting categories'});
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const categoryService = new CategoryService();
        const category = await categoryService.getById(id);
        res.send(category);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error getting category'});
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {name, description} = req.body;
        const categoryService = new CategoryService();
        const category = await categoryService.update(id, name, description);
        res.send(category);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error updating category'});
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const categoryService = new CategoryService();
        const category = await categoryService.delete(id);
        res.send(category);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Error deleting category'});
    }
});

module.exports = router;
