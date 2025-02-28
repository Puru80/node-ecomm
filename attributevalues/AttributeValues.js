const EntitySchema = require('typeorm').EntitySchema;

class AttributeValue {
    constructor(value) {
        this.value = value;
    }
}

const AttributeValueEntity = new EntitySchema({
    name: "AttributeValue",
    tableName: "attribute_values",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        value: {
            type: "varchar"
        }
    },
    relations: {
        attribute: {
            target: "Attribute",
            type: "many-to-one",
            inverseSide: "AttributeValue"
        }
    }
});

module.exports = {AttributeValue, AttributeValueEntity};