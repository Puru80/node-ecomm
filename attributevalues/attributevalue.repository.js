const database = require('../database');
const { AttributeValue } = require('./AttributeValues');

const AttributeValueRepository = database.getRepository(AttributeValue).extend({
    async getAll() {
        return await this.find();
    },

    async getById(id) {
        return await this.findOneBy({ id });
    },

    async create(attributeValue) {
        return await this.save(attributeValue);
    },

    async update(id, attributeValue) {
        await this.update(id, attributeValue);
        return await this.getById(id);
    },

    async delete(id) {
        const attributeValue = await this.getById(id);
        await this.delete(id);
        return attributeValue;
    }
});

module.exports = AttributeValueRepository;