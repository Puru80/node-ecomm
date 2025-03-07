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
}
