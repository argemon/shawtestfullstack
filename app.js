const express = require("express");
const { randomUUID } = require("crypto");
const { request } = require("http");
const { response } = require("express");

const app = express();

app.use(express.json());

const users = [];

app.post("/users", (request, response) => {
    //users
    
    const { username, details, repos } = request.body;

    const users = {
        username,
        details,
        repos,
        id: randomUUID(),
    };

    users.push(users);

    return response.json(users);
});

app.get("/users", (request, response) => {
    return response.json(users);
});

app.get("/users/:id", (request, response) => {
    const { id } = request.params;
    const users = users.find((users) => users.id);
    return response.json(users);
});

app.listen(4002, () => console.log("server on 4002"));