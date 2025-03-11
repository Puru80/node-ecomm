const UnitEntity = require('./Unit').UnitEntity;
const database = require('../../database');

const UnitRepository = database.getRepository(UnitEntity).extend({
    async getAllUnits() {
        return await this.find({
            relations: {
                packaging: true
            }
        });
    }
});

module.exports = UnitRepository;