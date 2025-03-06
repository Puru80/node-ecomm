const EntitySchema = require("typeorm").EntitySchema;

class Packaging {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const PackagingEntity = new EntitySchema({
    name: "Packaging",
    target: Packaging,
    tableName: "packages",
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
        },
        created_at: {
            type: "timestamp",
            createDate: true
        },
        updated_at: {
            type: "timestamp",
            updateDate: true
        }
    }
})

module.exports = {Packaging, PackagingEntity};