import express from "express";
import AutoresController from "../controllers/autoresController.js";

const routes = express.Router();

routes.get("/autor",AutoresController.listarAutores);
routes.get("/autor/:id",AutoresController.listarAutoresPorID);
routes.post("/autor",AutoresController.cadastrarAutor);
routes.put("/autor/:id",AutoresController.atualizarAutor);
routes.delete("/autor/:id",AutoresController.deletarAutor);




export default routes;