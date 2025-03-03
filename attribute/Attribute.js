const EntitySchema = require('typeorm').EntitySchema;

class Attribute {
    constructor(name) {
        this.name = name;
    }
}

const AttributeEntity = new EntitySchema({
    name: "attribute",
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
        description: {
            type: "text"
        }
    },
    relations: {
        product: {
            target: "Category",
            type: "one-to-many",
            inverseSide: "Attribute"
        }
    }
})

module.exports = {Attribute, AttributeEntity};