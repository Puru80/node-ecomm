const database = require('../database');
const CategoryEntity = require('./Category').CategoryEntity;

const CategoryRepository = database.getRepository(CategoryEntity).extend({
    async findByName(name) {
        return await this.findOne({ where: { name } });
    }


})

module.exports = CategoryRepository;