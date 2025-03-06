const EntitySchema = require('typeorm').EntitySchema;

class ProductAttribute {
    constructor(product, attribute) {
        this.product = product;
        this.attribute = attribute;
    }
}

const ProductAttributeEntity = new EntitySchema({
    name: "ProductAttribute",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        createdAt: {
            type: "timestamp",
            createDate: true
        },
        updatedAt: {
            type: "timestamp",
            updateDate: true
        }
    },
    relations: {
        product: {
            target: "Product",
            type: "many-to-one",
            joinColumn: true,
            cascade: true
        },
        attribute: {
            target: "AttributeValue",
            type: "many-to-one",
            joinColumn: true,
            cascade: true
        }
    }
})

module.exports = {ProductAttribute, ProductAttributeEntity};