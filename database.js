const DataSource = require('typeorm').DataSource;

const {BrandEntity} = require("./brand/Brand");
const {ProductEntity} = require("./product/Product");
const {PackagingEntity} = require("./packaging/Packaging");
const {AttributeValueEntity} = require("./attributevalues/AttributeValues");
const {AttributeEntity} = require("./attribute/Attribute");
const {ProductAttributeEntity} = require("./productattribute/ProductAttribute");
const {ProductVariantEntity} = require("./productvariant/ProductVariant");
const CategoryEntity = require("./category/Category").CategoryEntity;
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
        ProductAttributeEntity,
        ProductVariantEntity
    ],
})

database.initialize()
    .then(async () => {
        console.log("Database Connected");
    })
    .catch(error => console.log(error));

module.exports = database;