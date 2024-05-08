    analisarAlcadaDaNegociacao = async (
        dadosNegociacao: NEGOCIACAO,
        idEmpresa: number,
        flagVencimentoMesmaSolicitacao: boolean
    ) => {
        console.log("dados:", dadosNegociacao);

        let titulosSemAtraso = []
        let titulosComAtraso = []

        dadosNegociacao.titulosNegociados.map(titulo => {

            if (titulo.atraso == 0) {
                titulosSemAtraso.push(titulo)
            } else {
                titulosComAtraso.push(titulo)
            }

        })

        if (!flagVencimentoMesmaSolicitacao||titulosSemAtraso.length > 0 && titulosComAtraso.length > 0) {
            return {
                sucesso: false,
                error:
                    "Títulos selecionados não pode ter Vencidos e À vencer na mesma negociação",
            };
        }

        const processoVencido = titulosComAtraso.length > 0

        const somaValorTitulos = dadosNegociacao.titulosNegociados
            .map((item) => item.valor)
            .reduce((total, valor) => total + valor);

        console.log("somaValorTitulos:", somaValorTitulos);

        const statusTitulo = flagVencimentoMesmaSolicitacao ? "Vencido/Vencer" : processoVencido ? 'Vencido' : 'À vencer'

        const analisefiltros = this.filtrosAlcadaPorOperacao(dadosNegociacao)
        if (!analisefiltros.sucesso) {
            return {
                sucesso: false,
                error: `Erro ao montar filtros auxiliares`
            };
        }

        const filtrosAuxiliar: FILTROAUXILIAR = analisefiltros.filtros
        console.log('filtrosAuxiliar ', filtrosAuxiliar)

        const alcadaNegociacao: Alcada_v2 = await Alcada_v2Service.pesquisarPorAcaoEValor(idEmpresa, dadosNegociacao, somaValorTitulos, statusTitulo)
            .then(({ result }) => result);

        if (!alcadaNegociacao) {
            return {
                sucesso: false,
                error: "Alçada não encontrada."
            };
        }

        const listaSubAlcada = alcadaNegociacao.subAlcada

        const totalDiasAtraso = dadosNegociacao.titulosNegociados.reduce((soma, titulo) => {
            return soma + titulo.atraso
        }, 0)

        console.log('totalDiasAtraso ', totalDiasAtraso)

        if (dadosNegociacao.alcadaNegociada.operacao == 'Prorrogar') {
            const subAlcada = listaSubAlcada.filter(item =>
                item.nivelSolicitante == dadosNegociacao.alcadaNegociada.nivelSolicitante &&
                filtrosAuxiliar.diasProrrogado <= item.quantidadeDiasProrogacao &&
                filtrosAuxiliar.percentualDescontoJuros <= item.percentualDescontoJuros &&
                filtrosAuxiliar.percentualDescontoMulta <= item.percentualDescontoMulta &&
                (statusTitulo == 'À vencer' || ((statusTitulo == 'Vencido' ||statusTitulo == "Vencido/Vencer" ) &&
                    item.quantidadeDiasTituloInicial <= Math.trunc(totalDiasAtraso) &&
                    item.quantidadeDiasTituloFinal >= Math.trunc(totalDiasAtraso)))
            ).sort(function (a, b) {
                if (a.aprovador.length > b.aprovador.length) {
                    return 1;
                }
                if (a.aprovador.length < b.aprovador.length) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            }).shift()

            if (!subAlcada) {
                return {
                    sucesso: false,
                    error: "SubAlçada não encontrada."
                };
            }

            alcadaNegociacao.subAlcada = [subAlcada]

            return {
                sucesso: true,
                message: "Negociação de Prorrogar encontrada.",
                result: alcadaNegociacao,
            };
        }

        if (dadosNegociacao.alcadaNegociada.operacao == 'Desconto') {
            const subAlcada = listaSubAlcada.filter(item =>
                item.nivelSolicitante == dadosNegociacao.alcadaNegociada.nivelSolicitante &&
                filtrosAuxiliar.percentualDesconto <= item.percentualDescontoCapital &&
                filtrosAuxiliar.percentualDescontoJuros <= item.percentualDescontoJuros &&
                item.quantidadeDiasTituloInicial <= Math.trunc(totalDiasAtraso) &&
                item.quantidadeDiasTituloFinal >= Math.trunc(totalDiasAtraso)
            ).sort(function (a, b) {
                if (a.aprovador.length > b.aprovador.length) {
                    return 1;
                }
                if (a.aprovador.length < b.aprovador.length) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            }).shift()

            if (!subAlcada) {
                return {
                    sucesso: false,
                    error: "SubAlçada não encontrada."
                };
            }

            alcadaNegociacao.subAlcada = [subAlcada]

            return {
                sucesso: true,
                message: "Negociação de Desconto encontrada.",
                result: alcadaNegociacao,
            };
        }

        if (dadosNegociacao.alcadaNegociada.operacao == 'Parcelamento') {
            const subAlcada = listaSubAlcada.filter(item =>
                item.nivelSolicitante == dadosNegociacao.alcadaNegociada.nivelSolicitante &&
                filtrosAuxiliar.qtdParcelas <= item.quantidadeParcelas &&
                filtrosAuxiliar.percentualDescontoJuros <= item.percentualDescontoJuros &&
                filtrosAuxiliar.percentualDescontoMulta <= item.percentualDescontoMulta
            ).sort(function (a, b) {
                if (a.aprovador.length > b.aprovador.length) {
                    return 1;
                }
                if (a.aprovador.length < b.aprovador.length) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            }).shift()

            if (!subAlcada) {
                return {
                    sucesso: false,
                    error: "SubAlçada não encontrada."
                };
            }

            alcadaNegociacao.subAlcada = [subAlcada]

            return {
                sucesso: true,
                message: "Negociação de Parcelamento encontrada.",
                result: alcadaNegociacao,
            };
        }

    };
