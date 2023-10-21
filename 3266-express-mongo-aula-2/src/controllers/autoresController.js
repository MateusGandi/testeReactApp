//lógica: ações a serem feitas em um livro
import autor from "../models/Autor.js";

class AutoresController {
    static async listarAutores(req, res) {
        try{
            const listaAutores = await autor.find({})//método mogoose que se conecta e procura tudo, está sem params
            res.status(200).json(listaAutores);
        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na requisição`
            })
        }
    }

    static async listarAutoresPorID(req, res) {
        try{
            const id = req.params.id;
            const autorEcontrado = await autor.findById(id)//método mogoose que se conecta e procura tudo, está sem params
            res.status(200).json(autorEcontrado);
        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na requisição do autor`
            })
        }
    }

    static async cadastrarAutor(req, res){
        try {
            const novoAutor = await autor.create(req.body);//método para criar
            res.status(201).json({
                message: "criado com sucesso", 
                autor : novoAutor
            })
        } catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha ao cadastrar autor`
            })
            //500, código de erro interno no servidor
        }
        
    }

    static async atualizarAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(
                id,
                req.body // informações do body para atualizar
            )
            res.status(200).json({message:"Autor atualizado com sucesso!"});

        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na atualização do Autor`
            })
        }
    }

    static async deletarAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id)
            res.status(200).json({message:"Autor excluído com sucesso!"});

        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na exclusão do autor`
            })
        }
    }
};

//static: querer usar usar metodos de uam classe sem ter ue instanciar a classe
export default AutoresController;