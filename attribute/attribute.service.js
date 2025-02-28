const AttributeRepository = require('./attribute.repository');
const { Attribute } = require('./Attribute');
const trace_events = require("node:trace_events");

class AttributeService {
    async createAttribute(name, description) {
        const attribute = new Attribute(name, description);
        return await AttributeRepository.save([attribute], { reload: false });
    }

    async getAllAttributes() {
        return await AttributeRepository.find();
    }

    async getAttributeById(id) {
        return await AttributeRepository.findOneBy({ id: id });
    }

    async updateAttribute(id, name, description) {
        const attribute = await this.getAttributeById(id);
        if (attribute) {
            attribute.name = name;
            attribute.description = description;
            return await AttributeRepository.save([attribute], { reload: false });
        }
        return null;
    }

    async deleteAttribute(id) {
        const attribute = await this.getAttributeById(id);
        if (attribute) {
            return await AttributeRepository.remove(attribute);
        }
        return null;
    }
}

module.exports = AttributeService;