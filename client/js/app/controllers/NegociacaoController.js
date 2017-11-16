class NegociacaoController {

    constructor(){
        //Passar essa manipulação da DOM para o constructor é performático e possibilita o conceito de cache
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia');

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')), 'texto');

    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limpaFormulario();
       
    }

    importaNegociacoes() {
        
        let services = new NegociacaoService();

        Promise.all([
            services.obterNegociacoesSemana(),
            services.obterNegociacoesSemanaAnterior(),
            services.obterNegociacoesSemanaRetrasada()
        ]).then(negociacoes => {
            
            negociacoes
            .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
            .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociações importadas com sucesso';
        })
        .catch(error => this._mensagem.texto = error);
        
        
        /*
        services.obterNegociacoesSemana()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
            this._mensagem.texto = 'Negociações da semana obtida com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);

        services.obterNegociacoesSemanaAnterior()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
            this._mensagem.texto = 'Negociações da semana obtida com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);

        services.obterNegociacoesSemanaRetrasada()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
            this._mensagem.texto = 'Negociações da semana obtida com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);



        
        services.obterNegociacoesSemana((err, negociacao) => {
            
            if(err) {
                this._mensagem.texto = err;
                return;
            }

            negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            services.obterNegociacoesSemanaAnterior((err, negociacao) => {
                
                if(err) {
                    this._mensagem.texto = err;
                    return;
                }
    
                negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                services.obterNegociacoesSemanaRetrasada((err, negociacao) => {
                    
                    if(err) {
                        this._mensagem.texto = err;
                        return;
                    }
        
                    negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociacaoes importadas com sucesso!';
        
                });
    
            });

        });
        */

        

        
        
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();

    }

}