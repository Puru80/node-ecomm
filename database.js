const DataSource = require('typeorm').DataSource;

const {BrandEntity} = require("./src/brand/Brand");
const {ProductEntity} = require("./src/product/Product");
const {PackagingEntity} = require("./src/packaging/Packaging");
const {AttributeValueEntity} = require("./src/attributevalues/AttributeValues");
const {AttributeEntity} = require("./src/attribute/Attribute");
const {ProductAttributeEntity} = require("./src/productattribute/ProductAttribute");
const {ProductVariantEntity} = require("./src/productVariant/ProductVariant");
const CategoryEntity = require("./src/category/Category").CategoryEntity;
const UserEntity = require('./src/user/User').UserEntity;

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