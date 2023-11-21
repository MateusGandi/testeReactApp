import mongoose from "mongoose";

const agendamentoSchema = new mongoose.Schema({
    data: { type: mongoose.Schema.Types.Date },
    funcionarioId: { type: mongoose.Schema.Types.ObjectId },
    clienteId: { type: mongoose.Schema.Types.ObjectId },
}, { versionKey: false });

const barbeariaSchema = new mongoose.Schema({
    agendamentos: [agendamentoSchema],
});

const Barbearia = mongoose.model("Barbearia", barbeariaSchema);
const Agendamento = mongoose.model('Agendamento', agendamentoSchema); // Crie um modelo separado para Agendamento

export { Barbearia, Agendamento };
