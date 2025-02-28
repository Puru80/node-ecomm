const database = require('../database');
const {Attribute} = require('./Attribute');

const AttributeRepository = database.getRepository(Attribute).extend({
    findByName: async (name) => {
        return await AttributeRepository.findOne({
            where: {
                name: name
            }
        });
    }
});

module.exports = AttributeRepository;