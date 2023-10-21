//lógica: ações a serem feitas em um livro
import livro from "../models/Livro.js";

class LivrosController {
    static async listarLivros(req, res) {
        try{
            const listaLivros = await livro.find({})//método mogoose que se conecta e procura tudo, está sem params
            res.status(200).json(listaLivros);
        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na requisição`
            })
        }
    }

    static async listarLivroPorID(req, res) {
        try{
            const id = req.params.id;
            const livroEcontrado = await livro.findById(id)//método mogoose que se conecta e procura tudo, está sem params
            res.status(200).json(livroEcontrado);
        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na requisição do livro`
            })
        }
    }

    static async cadastrarLivro(req, res){
        try {
            const novoLivro = await livro.create(req.body);//método para criar
            res.status(201).json({
                message: "criado com sucesso", 
                livro : novoLivro
            })
        } catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha ao cadastrar livro`
            })
            //500, código de erro interno no servidor
        }
        
    }

    static async atualizarLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(
                id,
                req.body // informações do body para atualizar
            )
            res.status(200).json({message:"Livro atualizado com sucesso!"});

        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na atualização do livro`
            })
        }
    }

    static async deletarLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id)
            res.status(200).json({message:"Livro excluído com sucesso!"});

        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na exclusão do livro`
            })
        }
    }
};

//static: querer usar usar metodos de uam classe sem ter ue instanciar a classe
export default LivrosController;