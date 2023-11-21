import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    nome:{type:String, required: true},
    nacionalidade:{type:String}
},{versionKey:false});

const autor = mongoose.model("autores",autorSchema);

export default autor;
//autor existe como objeto mas que deve tbm fazer parte do livrp, pór isso
//expostamos tbm seu Schema;