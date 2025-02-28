const EntitySchema = require('typeorm').EntitySchema;

class Attribute {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const AttributeEntity = new EntitySchema({
    name: "attribute",
    tableName: "attribute",
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