const UnitRepository = require('./unit.repository');
const Unit = require('./Unit').Unit;
const packagingService = require('../packaging/packaging.service');

class UnitService {
    async getAll() {
        return await UnitRepository.getAllUnits();
    }

    async findById(id) {
        return await UnitRepository.findOneBy({id});
    }

    async createUnit(name, packaging) {
        const unit = new Unit();
        unit.name = name;
        unit.packaging = await new packagingService().findByIds(packaging);

        return await UnitRepository.save(unit);
    }

    async updateUnit(id, name, packaging) {
        const unit = await this.findById(id);
        if (!unit) {
            throw new Error('Unit not Found');
        }

        unit.name = name;
        unit.packaging = await new packagingService().findByIds(packaging);

        return await UnitRepository.save(unit);
    }

    async deleteUnit(id) {
        const unit = await this.findById(id);
        if (!unit) {
            throw new Error('Unit not Found');
        }

        return await UnitRepository.remove(unit);
    }
}

module.exports = new UnitService();
