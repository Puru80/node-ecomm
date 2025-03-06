const database = require('../../database');
const {AttributeEntity} = require('./Attribute');

const AttributeRepository = database.getRepository(AttributeEntity).extend({

    async saveOne(attribute) {
        return await AttributeRepository.save(attribute);
    },

    findByName: async (name) => {
        return await AttributeRepository.findOne({
            where: {
                name: name
            }
        });
    },

    async findAllWithRelations() {
        return await AttributeRepository.findAndCount({
            relations: {
                categories: true
            }
        });
    },

    async findByIdWithRelations(id) {
        return await AttributeRepository.findOne({
            where: {
                id: Number(id)
            },
            relations: {
                categories: true
            }
        });
    }
});

module.exports = AttributeRepository;