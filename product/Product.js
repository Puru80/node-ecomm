import {EntitySchema} from "typeorm";

class Product {
    constructor(name) {
        this.name = name;
    }
}

const ProductEntity = new EntitySchema({
    name: "Product",
    tableName: "products",
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
        category: {
            target: "Category",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        },
        brand: {
            target: "Brand",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        },
        packaging: {
            target: "Packaging",
            type: "one-to-many"
        }
    }
})

module.exports = {Product, ProductEntity};