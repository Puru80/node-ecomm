require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const authenticator = require('./user/auth.middleware');
const authRouter = require('./user/auth.controller');
const categoryRouter = require('./category/category.controller');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// This is the middleware that checks for the token in the header
app.use(authenticator);
app.use("/auth", authRouter);
app.use("/category", categoryRouter);

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