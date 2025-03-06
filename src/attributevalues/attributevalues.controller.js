const router = require('express').Router();
const attributeValuesService = require('./attributevalues.service');

router.get('/', async (req, res) => {
    try {
        const attributeValues = await attributeValuesService.getAll();
        res.status(200).json(attributeValues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        console.log("Get attribute value by id");
        const attributeValue = await attributeValuesService.getById(req.params.id);
        if (!attributeValue) {
            return res.status(404).json({ message: 'Attribute Value not found' });
        }
        res.status(200).json(attributeValue);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/create', async (req, res) => {
    try {
        const attributeValue = await attributeValuesService.create(req.body);
        res.status(201).json(attributeValue);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const attributeValue = await attributeValuesService.update(req.params.id, req.body);
        if (!attributeValue) {
            return res.status(404).json({ message: 'Attribute Value not found' });
        }
        res.status(200).json(attributeValue);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const attributeValue = await attributeValuesService.delete(req.params.id);
        if (!attributeValue) {
            return res.status(404).json({ message: 'Attribute Value not found' });
        }
        res.status(200).json(attributeValue);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;