//lógica: ações a serem feitas em um livro
import user from "../models/User.js";

class UserController {//autenticar
    static async authUsuer(req, res) {
        try{
            const telefone = req.body.telefone;
            const listaUsuarios = await user.findOne({telefone:telefone})//método mogoose que se conecta e procura tudo, está sem params
            res.status(200).json(listaUsuarios);
        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na requisição`
            })
        }
    }
};

export default UserController;