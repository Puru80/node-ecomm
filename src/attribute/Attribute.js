const EntitySchema = require('typeorm').EntitySchema;

class Attribute {
    constructor(name) {
        this.name = name;
    }
}

const AttributeEntity = new EntitySchema({
    name: "Attribute",
    tableName: "attributes",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
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
        categories: {
            target: "Category",
            type: "many-to-many",
            joinTable: true,
        },
        attributeValues: {
            target: "AttributeValue",
            type: "one-to-many",
            inverseSide: "attribute",
            loaded: true,
            eager: true,
            joinColumns: ["id"],
        }
    }
})

module.exports = {Attribute, AttributeEntity};