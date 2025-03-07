const UnitRepository = require('./unit.repository');
const Unit = require('./Unit').Unit;

class UnitService {
    async getAll() {
        return await UnitRepository.getAllUnits();
    }

    async findById(id) {
        return await UnitRepository.findOneBy({id});
    }

    async createUnit(name) {
        const unit = new Unit();
        unit.name = name;

        return await UnitRepository.save(unit);
    }

    async updateUnit(id, name) {
        const unit = await this.findById(id);
        if (!unit) {
            return null;
        }

        unit.name = name;

        return await UnitRepository.save(unit);
    }

    async deleteUnit(id) {
        const unit = await this.findById(id);
        if (!unit) {
            return null;
        }

        return await UnitRepository.remove(unit);
    }
}

module.exports = new UnitService();
