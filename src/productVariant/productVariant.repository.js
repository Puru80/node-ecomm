const ProductVariant = require('./ProductVariant').ProductVariantEntity;
const database = require('../../database');

const ProductVariantRepository = database.getRepository(ProductVariant).extend({

    async findByProductId(productId) {
        return await this.findOneBy({
            product: {
                id: productId
            }
        })
    },

    async findByProductIdAndAttributeId(productId, attributeId) {
        return await this.findBy({
            product: {
                id: productId
            },
            attribute: {
                id: attributeId
            }
        });
    },

    async saveProductVariant(productVariant) {
        return await this.save(productVariant);
    },

    async getAllProductVariants() {
        return await this.findAndCount({
            relations: {
                product: true,
                attribute: true
            }
        });
    }
});

module.exports = ProductVariantRepository;