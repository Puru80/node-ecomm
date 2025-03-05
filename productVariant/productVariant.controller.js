const router = require('express').Router();
const ProductVariantService = require('./productVariant.service');

router.get("/get/all", async (request, response) => {
    const productVariantService = new ProductVariantService();
    const productVariants = await productVariantService.getAll();
    response.status(200).send(productVariants);
});

router.get("/get/:id", async (request, response) => {
    const { id } = request.params;
    const productVariantService = new ProductVariantService();
    const productVariant = await productVariantService.getProductVariantList(id);
    response.status(200).send(productVariant);
});

router.post("/create", async (request, response) => {
    const { product, attribute } = request.body;
    const productVariantService = new ProductVariantService();
    const productVariant = await productVariantService.createProductVariant(product, attribute);
    response.status(200).send(productVariant);
});

router.put("/update/:id", async (request, response) => {
    const {id} = request.params;
    const {product, attribute} = request.body;

    const productVariantService = new ProductVariantService();
    const updatedProductVariant = await productVariantService.updateProductVariant(id, product, attribute);
    response.status(200).send(updatedProductVariant);
});

module.exports = router;



