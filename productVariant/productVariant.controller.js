const router = require('express').Router();
const ProductVariantService = require('./productVariant.service');

router.get("/", async (request, response) => {
    const { productId, attributeId } = request.query;
    const productVariantService = new ProductVariantService();
    const productVariants = await productVariantService.getProductVariantsByProductIdAndAttributeId(productId, attributeId);
    response.status(200).send(productVariants);
});

module.exports = router;



