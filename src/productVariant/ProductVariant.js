const EntitySchema = require('typeorm').EntitySchema;

class ProductVariant{
    constructor(id, createdAt, updatedAt, product, attribute) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.product = product;
        this.attribute = attribute;
    }
}

const ProductVariantEntity = new EntitySchema({
    name: "ProductVariant",
    tableName: "product_variants",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        createdAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP"
        },
        updatedAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
        }
    },
    relations: {
        product: {
            target: "Product",
            type: "many-to-one",
            joinColumn: true,
            eager: true
            // inverseSide: "productVariants"
        },
        attribute: {
            target: "Attribute",
            type: "many-to-many",
            joinTable: true,
            eager: true
            // inverseSide: "productVariants"
        }
    }
});

module.exports = {ProductVariant, ProductVariantEntity};