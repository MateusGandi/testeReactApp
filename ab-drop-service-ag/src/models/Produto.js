import mongoose from "mongoose";
import Fornecedor from './User.js';

const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nomeProduto: { type: String, required: true },
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true },
    descricao: { type: String, required: true },
    retirada: { type: Number, required: true },
    fornecedorId: { type: mongoose.Schema.Types.ObjectId, ref: Fornecedor, required: true },
    parcelas: { type: Number, default:1},
    status: { type: Boolean, required: true },
}, { versionKey: false });

const Produto = mongoose.model("produtos", produtoSchema);

export default Produto;



