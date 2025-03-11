const EntitySchema = require('typeorm').EntitySchema;

class Unit{
    constructor(name) {
        this.name = name;
    }
}

const UnitEntity = new EntitySchema({
    name: "Unit",
    tableName: "units",
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
            default: () => "CURRENT_TIMESTAMP"
        },
        updatedAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
        }
    },
    relations: {
        packaging: {
            target: "Packaging",
            type: "one-to-many",
            inverseSide: "unit"
        }
    }
})

module.exports = {Unit, UnitEntity};