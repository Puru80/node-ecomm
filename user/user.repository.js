const database = require("../database");
const UserEntity = require("./User").UserEntity;

const UserRepository = database.getRepository(UserEntity)
    .extend({
        async findByEmail(email) {
            return await this.findOne({ where: { email } });
        }
    });

module.exports = UserRepository;