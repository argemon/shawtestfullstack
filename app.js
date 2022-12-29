const express = require("express");

const app = express();

app.get("/users", (request, response) => {
    return response.json({
        message: "users",
    });
});

app.listen(4002, () => console.log("server on 4002"));