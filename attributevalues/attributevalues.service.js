const attributeValueRepository = require('./attributevalue.repository');

class AttributeValuesService {
    async getAll() {
        return await attributeValueRepository.getAll();
    }

    async getById(id) {
        return await attributeValueRepository.getById(id);
    }

    async create(attributeValue) {
        return attributeValueRepository.create(attributeValue);
    }

    async update(id, attributeValue) {
        return await attributeValueRepository.update(id, attributeValue);
    }

    async delete(id) {
        return await attributeValueRepository.delete(id);
    }
}

module.exports = new AttributeValuesService();