const database = require('../../database');
const ProductEntity = require('./Product').ProductEntity;

const ProductRepository = database.getRepository(ProductEntity).extend({
    async findByName(name) {
        return await this.findOne({where: {name}});
    },

    //Get all the products with their category and brand
    async findAndCountWithRelations() {
        return await this.findAndCount({relations: ['category', 'brand']});
    }
})

module.exports = ProductRepository;