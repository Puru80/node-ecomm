const attributeValueRepository = require('./attributevalue.repository');
const {AttributeValue} = require('./AttributeValues');

class AttributeValuesService {
    async getAll() {
        return await attributeValueRepository.getAll();
    }

    async getById(id) {
        return await attributeValueRepository.getById(id);
    }

    async create(requestBody) {
        let value = requestBody.value;
        let attributeId = requestBody.attribute;

        if (await attributeValueRepository.findBy(value, attributeId)) {
            throw new Error('Attribute value already exists');
        }

        const attributeValue = new AttributeValue(value);
        attributeValue.attribute = attributeId;

        return attributeValueRepository.create(attributeValue);
    }

    async update(id, requestBody) {
        let value = requestBody.value;
        let attributeId = requestBody.attribute;

        let attributeValue = await attributeValueRepository.getById(id);
        if (!attributeValue) {
            throw new Error('Attribute value not found');
        }

        attributeValue.value = value;
        attributeValue.attribute = attributeId;

        return await attributeValueRepository.updateAttributeValue(id, attributeValue);
    }

    async delete(id) {
        return await attributeValueRepository.deleteAttributeValue(id);
    }
}

module.exports = new AttributeValuesService();