//lógica: ações a serem feitas em um livro
import produto from "../models/Produto.js";
import user from "../models/User.js";

class ProdutosController {//autenticar
    static async Comprar (req, res) {
        try{
            //atualizar disponibilidade
            //enviar api para cadastro de pedido
            //debitar quantide de produtos
            const telefone = req.body.telefone;
            const listaUsuarios = await user.create(req.body)//método mogoose que se conecta e procura tudo, está sem params
            res.status(200).json(listaUsuarios);

        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na requisição`
            })
        }
    }
};

export default ProdutosController;