//lógica: ações a serem feitas em um livro
import { ObjectId } from "mongodb";
import user from "../models/User.js";

class UserController {//autenticar
    static async AuthUsuer(req, res) {
        try{
            const telefone = req.body.telefone;
            const usuario = await user.findOne({ telefone: telefone });
            const flag = (usuario.senha === req.body.senha) ? "logado" : "não logado";
            
            res.status(200).json({
                message: flag,
                user: usuario,
            });
        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na requisição`
            })
        }
    }
    static async Cadastrar(req, res) {
        try{
            const newUser = req.body
            await user.create(newUser)
            res.status(200).json({
                message:"Usuário cadastrado com sucesso!",
                user:"Usuário cadastrado com sucesso!"
            });
        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na criação de usuário`
            })
        }
    }
};

export default UserController;