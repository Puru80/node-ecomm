require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const authRouter = require('./user/auth.controller');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use("/auth", authRouter);

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