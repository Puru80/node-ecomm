const database = require('../database');
const AttributeValue = require('./AttributeValues').AttributeValueEntity;

const AttributeValueRepository = database.getRepository(AttributeValue).extend({
    async getAll() {
        return await this.findAndCount(
            { relations: { attribute: true } }
        );
    },

    async getById(id) {
        return await this.findOne({
            where: {
                id: id
            }, relations: { attribute: true }
        });
    },

    async findBy(value, attributeId) {
        return await this.findOneBy({ value, attribute: { id: attributeId } });
    },

    async create(attributeValue) {
        return await this.save(attributeValue);
    },

    async updateAttributeValue(id, attributeValue) {
        await this.update(id, attributeValue);
        return await this.getById(id);
    },

    async deleteAttributeValue(id) {
        const attributeValue = await this.getById(id);
        await this.delete(id);
        return attributeValue;
    }
});

module.exports = AttributeValueRepository;