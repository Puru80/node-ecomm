const {BrandEntity} = require("./brand/Brand");
const {ProductEntity} = require("./product/Product");
const {PackagingEntity} = require("./packaging/Packaging");
const {AttributeValueEntity} = require("./attributevalues/AttributeValues");
const {AttributeEntity} = require("./attribute/Attribute");
const {ProductAttributeEntity} = require("./productattribute/ProductAttribute");
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
    entities: [UserEntity,
        CategoryEntity,
        BrandEntity,
        ProductEntity,
        PackagingEntity,
        AttributeEntity,
        AttributeValueEntity,
        ProductAttributeEntity
    ],
})

database.initialize()
    .then(async () => {
        console.log("Database Connected");
    })
    .catch(error => console.log(error));

module.exports = database;