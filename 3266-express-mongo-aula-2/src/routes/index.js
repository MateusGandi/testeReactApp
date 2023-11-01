//ponto de entrada das rotas
import express from "express";
import livros from  "./livrosRoutes.js";
import autor from  "./autoresRoutes.js";
import login from  "./login.routes.js";



const routes = (app) => {
    app.route("/").get((req,res)=>res.status(200)
        .send("Curso de Node.js"))
    app.use(express.json(),livros,autor,login)//middleware
    
};

export default routes;