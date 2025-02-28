const router = require('express').Router();
const ProductAttributeService = require('./productAttribute.service');

const productAttributeService = new ProductAttributeService();

router.get('/', async (req, res) => {
    try {
        const productAttributes = await productAttributeService.getAllProductAttributes();
        res.status(200).json(productAttributes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const productAttribute = await productAttributeService.getProductAttributeById(req.params.id);
        if (!productAttribute) {
            return res.status(404).json({ message: 'Product Attribute not found' });
        }
        res.status(200).json(productAttribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const productAttribute = await productAttributeService.createProductAttribute(req.body);
        res.status(201).json(productAttribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const productAttribute = await productAttributeService.updateProductAttribute(req.params.id, req.body);
        if (!productAttribute) {
            return res.status(404).json({ message: 'Product Attribute not found' });
        }
        res.status(200).json(productAttribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await productAttributeService.deleteProductAttribute(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Product Attribute not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;