const database = require('../database');
const ProductEntity = require('./product').ProductEntity;

const ProductRepository = database.getRepository(ProductEntity).extend({
    async findByName(name) {
        return await this.findOne({ where: { name } });
    }
})

module.exports = ProductRepository;