const EntitySchema = require("typeorm").EntitySchema;

class Category {
    constructor(name, description, created_at, updated_at) {
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

CategoryEntity = new EntitySchema({
    name: "Category",
    tableName: "categories",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            unique: true
        },
        description: {
            type: "text",
            nullable: true
        },
        created_at: {
            type: "timestamp",
            createDate: true
        },
        updated_at: {
            type: "timestamp",
            updateDate: true
        }
    }, relations: {
        brand: {
            target: "Brand",
            type: "one-to-many",
            inverseSide: "category"
        }
    }
})

module.exports = {Category, CategoryEntity};
