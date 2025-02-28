const productAttributeRepository = require('./productattribute.repository');

class ProductAttributeService {
    async getAllProductAttributes() {
        return await productAttributeRepository.getAllProductAttributes();
    }

    async getProductAttributeById(id) {
        return await productAttributeRepository.getProductAttributeById(id);
    }

    async createProductAttribute(productAttribute) {
        return await productAttributeRepository.createProductAttribute(productAttribute);
    }

    async updateProductAttribute(id, productAttribute) {
        return await productAttributeRepository.updateProductAttribute(id, productAttribute);
    }

    async deleteProductAttribute(id) {
        return await productAttributeRepository.deleteProductAttribute(id);
    }
}