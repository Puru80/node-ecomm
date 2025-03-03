const router = require('express').Router();
const AttributeService = require('./attribute.service');

router.post('/', async (req, res) => {
    const { name, category } = req.body;
    try {
        const attributeService = new AttributeService();
        const attribute = await attributeService.createAttribute(name, category);
        res.status(201).json(attribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const attributeService = new AttributeService();
        const attributes = await attributeService.getAllAttributes();
        res.status(200).json(attributes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const attributeService = new AttributeService();
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
    const { name, categories } = req.body;
    try {
        const attributeService = new AttributeService();
        const attribute = await attributeService.updateAttribute(id, name, categories);
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
        let attributeService = new AttributeService();
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