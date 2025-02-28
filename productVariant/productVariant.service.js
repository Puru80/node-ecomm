const ProductVariantRepository = require('./productVariant.repository');

class ProductVariantService {
    async getProductVariantsByProductIdAndAttributeId(productId, attributeId) {
        return await ProductVariantRepository.findByProductIdAndAttributeId(productId, attributeId);
    }

    async createProductVariant(productVariant) {

        return await ProductVariantRepository.save(productVariant);
    }

    async updateProductVariant(productVariant) {
        return await ProductVariantRepository.save(productVariant);
    }

    async deleteProductVariant(id) {
        return await ProductVariantRepository.delete(id);
    }

}

module.exports = ProductVariantService;