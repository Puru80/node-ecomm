const AttributeRepository = require('./attribute.repository');
const {Attribute} = require('./Attribute');
const CategoryService = require('../category/category.service');

class AttributeService {
    async createAttribute(name, categoryIds) {
        const attribute = new Attribute(name);

        if (await AttributeRepository.findByName(name)) {
            throw new Error('Attribute already exists');
        }

        attribute.categories = await new CategoryService().findByIds(categoryIds);
        // console.log(attribute.categories);

        return await AttributeRepository.saveOne(attribute);
    }

    async getAllAttributes() {
        return await AttributeRepository.findAllWithRelations();
    }

    async getAttributeById(id) {
        return await AttributeRepository.findByIdWithRelations(id);
    }

    async updateAttribute(id, name, categories) {
        const attribute = await this.getAttributeById(id);
        if (attribute) {
            attribute.name = name;
            attribute.categories = await new CategoryService().findByIds(categories);

            return await AttributeRepository.save([attribute]);
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