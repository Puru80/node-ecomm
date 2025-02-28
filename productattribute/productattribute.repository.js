const database = require('../database');
const ProductAttribute = require('./ProductAttribute').ProductAttributeEntity;

const ProductAttributeRepository = database.getRepository(ProductAttribute).extend({
    async getAllProductAttributes() {
        return await this.find();
    },

    async getProductAttributeById(id) {
        return await this.findOneBy({ id });
    },

    async createProductAttribute(productAttribute) {
        return await this.save(productAttribute);
    },

    async updateProductAttribute(id, productAttribute) {
        return await this.update(id, productAttribute);
    },

    async deleteProductAttribute(id) {
        return await this.delete(id);
    }
});

module.exports = ProductAttributeRepository;