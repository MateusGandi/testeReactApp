import express from "express";
import connectBD from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await connectBD();

conexao.on("error",(erro)=>{
  console.error("Não conseguimos conectar", erro);
})

conexao.once("open",()=>{
  console.log("Conexão bem sucedida!");
})

const app = express();
routes(app);

export default app;
