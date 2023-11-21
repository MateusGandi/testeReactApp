import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, default:"Anônimo"},
    telefone:{type: String, required: true},
    senha:{type: String, required: true},
    respRecuparacao:{type: String},
    carrinho:{
        type: Object,
        default:{},
    }
},{versionKey: false})

const user = mongoose.model("usuarios",userSchema);

export default user;