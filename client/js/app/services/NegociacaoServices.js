class NegociacaoService {

    constructor() {

        this._http = new HttpService(); //Instância do obj conexão com IndexeDB retornando Promises
    }

    obterNegociacoesSemana() {

        return this._http
            .get('http://localhost:3000/negociacoes/semana')
            .then(negociacoes => {

                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

            })
            .catch(erro => {

                console.log(erro);

                throw new Error('Não foi possível obter as negociações da semana');

            });
    }

    obterNegociacoesSemanaAnterior() {

        return this._http
            .get('http://localhost:3000/negociacoes/anterior')
            .then(negociacoes => {

                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

            })
            .catch(erro => {

                console.log(erro);

                throw new Error('Não foi possível obter as negociações da semana');

            });
    }

    obterNegociacoesSemanaRetrasada() {

        return this._http
            .get('http://localhost:3000/negociacoes/retrasada')
            .then(negociacoes => {

                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

            })
            .catch(erro => {

                console.log(erro);

                throw new Error('Não foi possível obter as negociações da semana');

            });
    }

    obterNegociacoes() {

        return Promise.all([
            this.obterNegociacoesSemana(),
            this.obterNegociacoesSemanaAnterior(),
            this.obterNegociacoesSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), []);

            return negociacoes;

        }).catch(erro => {
            throw new Error(erro);
        });
    }

    cadastra(negociacao) {

        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociação adicionada com sucesso')
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível adicionar negociação');
            })
    }

    lista() {

        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível listar as negociações');
            })
    }

    apaga() {

        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .then(() => 'Negociação apagadas com sucesso')
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível apagar a lista de negociação');
            })

    }

    importa(listaAtual) {

        return this.obterNegociacoes()
            .then(negociacoes =>
                negociacoes.filter(negociacao =>
                    !listaAtual.some(negociacoesExistente =>
                        negociacao.isEquals(negociacoesExistente)))
            )
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possivel listar as importações');
            })

    }
}