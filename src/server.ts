import express from "express";

//@types/express
const app = express();

/**
 * GET    - Buscar uma informação
 * POST   - Inserir criar  uma informação
 * PUT    - Alterar uma informação 
 * DELETE - Remover uma informação
 * PATCH  - Alterar uma informação especifica(senha, avatar)
 */

app.get("/test", (request, response) => {
    //request - entrada
    //response - saida
    return response.send("Olá Mundo GET")
});
app.post("/test-post", (request, response) => {
    return response.send("Olá Mundo POST")
});


// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))

