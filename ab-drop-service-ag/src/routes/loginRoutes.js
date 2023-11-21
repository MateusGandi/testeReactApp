import express from "express";
import LoginController from "../controllers/loginController.js";

const routes = express.Router();

routes.get("/v1/login",LoginController.AuthUsuer);
routes.post("/v1/cadastrar",LoginController.Cadastrar);
export default routes;