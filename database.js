const DataSource = require('typeorm').DataSource;
const User = require('./user/User').UserEntity;

const database = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: true,
    entities: [User],
})

database.initialize()
    .then(async connection => {
        console.log("Database Connected");
    })
    .catch(error => console.log(error));

module.exports = database;