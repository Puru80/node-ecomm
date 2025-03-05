const ProductVariantRepository = require('./productVariant.repository');
const {ProductVariant} = require('./ProductVariant');
const AttributeService = require('../attribute/attribute.service');

class ProductVariantService {
    async getProductVariantsByProductIdAndAttributeId(productId, attributeId) {
        return await ProductVariantRepository.findByProductIdAndAttributeId(productId, attributeId);
    }

    async findById(id) {
        return await ProductVariantRepository.findOneBy({id});
    }

    async getAll() {
        return await ProductVariantRepository.getAllProductVariants();
    }

    async createProductVariant(productId, attributeId) {
        let productVariant = new ProductVariant();

        productVariant.product = productId;
        productVariant.attribute = await new AttributeService().findByIds(attributeId);

        if (!productVariant.product || !productVariant.attribute) {
            throw new Error("Product and Attribute are required");
        }

        if (await ProductVariantRepository.findByProductId(productId)) {
            throw new Error("Product Variant already exists");
        }

        return await ProductVariantRepository.saveProductVariant(productVariant);
    }

    async getProductVariantList(id) {
        const productVariantList = [];
        const attributeValues = {};

        let productVariant = await ProductVariantRepository.findByProductId(id);
        console.log(productVariant)

        if (!productVariant) {
            throw new Error("Product Variant not found");
        }

        // Extract attribute values
        productVariant.attribute.forEach((attribute) => {
            attributeValues[attribute.name] = attribute.attributeValues.map((value) => value.value);
        });

        // Generate product variants
        const attributeNames = Object.keys(attributeValues);
        const variantCombinations = this.getCombinations(attributeValues);

        variantCombinations.forEach((combination) => {
            const productVariantRes = {
                product: productVariant.product.name,
                brand: productVariant.product.brand.name,
            };

            attributeNames.forEach((attributeName, index) => {
                productVariantRes[attributeName] = combination[index];
            });

            productVariantList.push(productVariantRes);
        });

        return productVariantList;
    }

    async updateProductVariant(id, product, attribute) {
        let existingProductVariant = await ProductVariantRepository.findByProductId(product);
        if (!existingProductVariant) {
            throw new Error("Product Variant not found");
        }

        existingProductVariant.attribute = await new AttributeService().findByIds(attribute);

        return await ProductVariantRepository.saveProductVariant(existingProductVariant);
    }

    async deleteProductVariant(id) {
        return await ProductVariantRepository.delete(id);
    }

    getCombinations(attributeValues) {
        const attributeNames = Object.keys(attributeValues);
        const combinations = [];

        function generateCombinations(currentCombination, attributeNameIndex) {
            if (attributeNameIndex === attributeNames.length) {
                combinations.push([...currentCombination]);
                return;
            }

            const attributeName = attributeNames[attributeNameIndex];
            const values = attributeValues[attributeName];

            values.forEach((value) => {
                currentCombination.push(value);
                generateCombinations(currentCombination, attributeNameIndex + 1);
                currentCombination.pop();
            });
        }

        generateCombinations([], 0);
        return combinations;
    }
}

module.exports = ProductVariantService;