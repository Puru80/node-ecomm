require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const authenticator = require('./src/user/auth.middleware');

const authRouter = require('./src/user/auth.controller');
const categoryRouter = require('./src/category/category.controller');
const brandRouter = require('./src/brand/brand.controller');
const productRouter = require('./src/product/product.controller');
const packagingRouter = require('./src/packaging/packaging.controller');
const attributeRouter = require('./src/attribute/attribute.controller');
const attributeValueRouter = require('./src/attributevalues/attributevalues.controller');
// const productAttributeRouter = require('./productattribute/productAttribute.controller');
const productVariantRouter = require('./src/productVariant/productVariant.controller');
const unitController = require('./src/units/unit.controller');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(authenticator);

app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/brand", brandRouter);
app.use("/product", productRouter);
app.use("/packaging", packagingRouter);
app.use("/attribute", attributeRouter);
app.use("/attribute/values", attributeValueRouter);
// app.use("/product/attribute", productAttributeRouter);
app.use("/product/variant", productVariantRouter);
app.use("/unit", unitController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running",
    }

    response.status(200).send(status);
});