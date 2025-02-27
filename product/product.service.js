const ProductRepository = require('./product.repository');
const {Product} = require("./Product").Product;

class ProductService {
    async create(name, description) {
        const existingProduct = await ProductRepository.findByName(name);
        if (existingProduct) {
            throw new Error('Product already exists');
        }

        const newProduct = new Product();
        newProduct.name = name;
        newProduct.description = description;

        await ProductRepository.save([newProduct], { reload: false });

        return newProduct;
    }

    async getAll() {
        return await ProductRepository.findAndCount();
    }

    async getById(id) {
        return await ProductRepository.findOne(id);
    }

    async update(id, name, description) {
        const product = await ProductRepository.findOne(id);
        if (!product) {
            throw new Error('Product not found');
        }

        product.name = name;
        product.description = description;
        await ProductRepository.save([product], { reload: false });

        return product;
    }

    async delete(id) {
        const product = await ProductRepository.findOne(id);
        if (!product) {
            throw new Error('Product not found');
        }

        await ProductRepository.remove([product]);

        return product;
    }
}

module.exports = ProductService;