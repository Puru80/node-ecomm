const ProductRepository = require('./product.repository');
const {Product} = require("./Product");

class ProductService {
    async create(name, category, brand) {
        const existingProduct = await ProductRepository.findByName(name);
        if (existingProduct) {
            throw new Error('Product already exists');
        }

        const newProduct = new Product();
        newProduct.name = name;
        newProduct.category = category;
        newProduct.brand = brand;

        await ProductRepository.save([newProduct], {reload: false});

        return newProduct;
    }

    async getAll() {
        return await ProductRepository.findAndCountWithRelations();
    }

    async getById(id) {
        return await ProductRepository.findOneById(id);
    }

    async update(id, name, category, brand) {
        const product = await ProductRepository.findOneById(id);
        if (!product) {
            throw new Error('Product not found');
        }

        product.name = name;
        product.category = category;
        product.brand = brand;

        await ProductRepository.save([product], {reload: false});

        return product;
    }

    async delete(id) {
        const product = await ProductRepository.findOneById(id);
        if (!product) {
            throw new Error('Product not found');
        }

        await ProductRepository.remove([product]);

        return product;
    }
}

module.exports = ProductService;