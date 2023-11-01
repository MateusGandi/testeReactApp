import express from "express";
import LoginController from "../controllers/login.controller.js";

const routes = express.Router();

routes.post("/login",LoginController.authUsuer);
export default routes;