import express from "express";
import connectBD from "./config/dbconnect.js";
import routes from "./routes/index.js";
import cors from 'cors'

const conexao = await connectBD();

const corsOptions ={
  origin: "http://localhost:3001"
}

conexao.on("error",(erro)=>{
  console.error("Não conseguimos conectar", erro);
})

conexao.once("open",()=>{
  console.log("Conexão bem sucedida!");
})

cors
const app = express();
app.use(cors(corsOptions))
routes(app);

export default app;
