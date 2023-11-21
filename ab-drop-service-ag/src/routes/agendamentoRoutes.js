import express from "express";
import AgendamentosController from "../controllers/agendamentosController.js";

const routes = express.Router();

routes.post("/v1/agendar",AgendamentosController.Agendar);
routes.delete("/v1/cancelar",AgendamentosController.Cancelar);
routes.put("/v1/reagendar",AgendamentosController.Reagendar);
routes.get("/v1/agendamentos",AgendamentosController.ListarAgendamentos);
export default routes;