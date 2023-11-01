import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    telefone:{type: String, require: true},
    senha:{type: String, require: true}
},{versionKey: false})
//objeto de configuração estrutura e propriedade de um livro

const user = mongoose.model("users",userSchema);

export default user;