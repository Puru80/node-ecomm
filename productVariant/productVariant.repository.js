const ProductVariant = require('./ProductVariant').ProductVariant;
const database = require('../database');

const ProductVariantRepository = database.getRepository(ProductVariant).extend({
    async findByProductIdAndAttributeId(productId, attributeId) {
        return await this.createQueryBuilder("product_variant")
            .innerJoinAndSelect("product_variants.product", "product")
            .innerJoinAndSelect("product_variants.attribute", "attribute")
            .where("product.id = :id", { id: productId })
            .andWhere("attribute.id = :id ", { id: attributeId })
            .getMany();
    }
});

module.exports = ProductVariantRepository;