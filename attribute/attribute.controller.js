const router = require('express').Router();
const AttributeService = require('./attribute.service');

const attributeService = new AttributeService();

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    try {
        const attribute = await attributeService.createAttribute(name, description);
        res.status(201).json(attribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const attributes = await attributeService.getAllAttributes();
        res.status(200).json(attributes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const attribute = await attributeService.getAttributeById(id);
        if (attribute) {
            res.status(200).json(attribute);
        } else {
            res.status(404).json({ message: 'Attribute not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const attribute = await attributeService.updateAttribute(id, name, description);
        if (attribute) {
            res.status(200).json(attribute);
        } else {
            res.status(404).json({ message: 'Attribute not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const attribute = await attributeService.deleteAttribute(id);
        if (attribute) {
            res.status(200).json(attribute);
        } else {
            res.status(404).json({ message: 'Attribute not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;