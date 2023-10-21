import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, require: true},
    editora:{type: String},
    preco:{type: Number}
},{versionKey: false})
//objeto de configuração estrutura e propriedade de um livro

const livro = mongoose.model("livros",livroSchema);

export default livro;