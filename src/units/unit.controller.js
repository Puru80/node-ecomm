const UnitService = require('./unit.service');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const units = await UnitService.getAll();
        res.status(200).json(units);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const unit = await UnitService.findById(req.params.id);
        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
        res.status(200).json(unit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, packaging } = req.body;
        const unit = await UnitService.createUnit(name, packaging);
        res.status(201).json(unit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, packaging } = req.body;
        const unit = await UnitService.updateUnit(req.params.id, name, packaging);
        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
        res.status(200).json(unit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const unit = await UnitService.deleteUnit(req.params.id);
        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;