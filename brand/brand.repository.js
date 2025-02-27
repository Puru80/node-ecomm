const database = require('../database');
const BrandEntity = require('./Brand').BrandEntity;

const BrandRepository = database.getRepository(BrandEntity).extend({
    async findByName(name) {
        return await this.findOne({ where: { name } });
    }
})

module.exports = BrandRepository;