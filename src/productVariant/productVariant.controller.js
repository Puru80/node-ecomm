const router = require('express').Router();
const ProductVariantService = require('./productVariant.service');

router.get("/get/all", async (request, response) => {

    try {
        const productVariantService = new ProductVariantService();
        const productVariants = await productVariantService.getAll();
        response.status(200).send(productVariants);
    } catch (error) {
        console.error("Error fetching product variants:", error);
        response.status(500).send({ message: "Internal Server Error" });
    }
});

router.get("/get/:id", async (request, response) => {
    try {
        const {id} = request.params;
        const productVariantService = new ProductVariantService();
        const productVariant = await productVariantService.getProductVariantList(id);
        response.status(200).send(productVariant);
    } catch (error) {
        console.error("Error fetching product variants:", error);
        response.status(500).send({ message: "Internal Server Error" });
    }
});

router.post("/create", async (request, response) => {
    try {
        const {product, attribute} = request.body;
        const productVariantService = new ProductVariantService();
        const productVariant = await productVariantService.createProductVariant(product, attribute);
        response.status(200).send(productVariant);
    } catch (error) {
        console.error("Error creating product variant:", error);
        response.status(500).send({ message: "Internal Server Error" });
    }
});

router.put("/update/:id", async (request, response) => {
    try {
        const {id} = request.params;
        const {product, attribute} = request.body;

        const productVariantService = new ProductVariantService();
        const updatedProductVariant = await productVariantService.updateProductVariant(id, product, attribute);
        response.status(200).send(updatedProductVariant);
    } catch (error) {
        console.error("Error updating product variant:", error);
        response.status(500).send({ message: "Internal Server Error" });
    }
});

router.delete("/delete/:id", async (request, response) => {
    try {
        const {id} = request.params;
        const productVariantService = new ProductVariantService();
        await productVariantService.deleteProductVariant(id);
        response.status(200).send({message: "Product Variant deleted successfully"});
    } catch (error) {
        console.error("Error deleting product variant:", error);
        response.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;



