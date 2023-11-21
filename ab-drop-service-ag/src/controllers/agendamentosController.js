import { Barbearia, Agendamento } from "../models/Barbearia.js";
import mongoose from 'mongoose';

class AgendamentosController {
    static async Agendar(req, res) {
        try {
            const barbeariaId = req.body.barbeariaId;
    
            const novoAgendamento = new Agendamento(req.body.agendamento);
    
            const result = await Barbearia.findByIdAndUpdate(
                barbeariaId,
                { $push: { agendamentos: novoAgendamento } },
                { new: true }
            );
    
            if (result) {
                res.status(201).json({
                    message: "Agendamento realizado com sucesso!",
                    agendamento: novoAgendamento,
                });
            } else {
                res.status(404).json({
                    message: "Barbearia não encontrada ou agendamento não adicionado.",
                });
            }
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar agendamento`,
            });
        }
    }

    static async Cancelar(req, res) {
        try {
            const barbeariaId = req.body.barbeariaId;
            const agendamentoId = req.body.agendamentoId;
    
            const result = await Barbearia.findByIdAndUpdate(
                { _id: barbeariaId },
                { $pull: { agendamentos: { _id: agendamentoId } } },
                { new: true },
            );
    
            if (result) {
                res.status(200).json({
                    message: "Agendamento cancelado com sucesso!",
                    agendamentoId: agendamentoId,
                });
            } else {
                res.status(404).json({
                    message: "Barbearia não encontrada ou agendamento não cancelado.",
                });
            }
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao cancelar agendamento`,
            });
        }
    }

    static async Reagendar(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(
                id,
                req.body
            )
            res.status(200).json({message:"Agendamento atualizado com sucesso!"});

        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na atualização do agendamento`
            })
        }
    }


    static async ListarAgendamentos(req, res) {
        try{
            const listaAgendamentos = await livro.find({})//método mogoose que se conecta e procura tudo, está sem params
            res.status(200).json(listaAgendamentos);
        }catch (erro) {
            res.status(500).json({
                message:`${erro.message} - falha na requisição`
            })
        }
    }
};

export default AgendamentosController;