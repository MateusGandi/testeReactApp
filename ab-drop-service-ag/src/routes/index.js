//ponto de entrada das rotas
import express from "express";
import livros from  "./livrosRoutes.js";
import autor from  "./autoresRoutes.js";
import usuarios from  "./loginRoutes.js";
import agendamentos from  "./agendamentoRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res)=>res.status(200)
        .send("Curso de Node.js"))
    app.use(express.json(),livros,autor,usuarios,agendamentos)//middleware
    
};

export default routes;