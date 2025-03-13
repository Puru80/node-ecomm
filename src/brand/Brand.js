const {EntitySchema} = require("typeorm");

class Brand {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const BrandEntity = new EntitySchema({
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
    }, relations: {
        category: {
            target: "Category",
            type: "one-to-many",
            inverseSide: "brand"
        }
    }
})

module.exports = {Brand, BrandEntity};
