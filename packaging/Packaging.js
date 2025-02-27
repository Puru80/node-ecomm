const EntitySchema = require("typeorm").EntitySchema;

class Brand {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

BrandSchema = new EntitySchema({
    name: "Brand",
    tableName: "brands",
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
    }
})