const CategoryEntity = require("./category/Category").CategoryEntity;
const DataSource = require('typeorm').DataSource;
const UserEntity = require('./user/User').UserEntity;

const database = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: true,
    entities: [UserEntity, CategoryEntity],
})

database.initialize()
    .then(async () => {
        console.log("Database Connected");
    })
    .catch(error => console.log(error));

module.exports = database;