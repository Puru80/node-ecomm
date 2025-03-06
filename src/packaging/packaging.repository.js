const database = require('../../database');
const PackagingEntity = require('./Packaging').PackagingEntity;

const PackagingRepository = database.getRepository(PackagingEntity).extend({
    async findByName(name) {
        return await this.findOne({where: {name}});
    }
});

module.exports = PackagingRepository;