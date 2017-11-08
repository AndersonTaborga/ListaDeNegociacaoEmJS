class ListaNegociacoes {

    constructor(armadilha){

        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adciciona(negociacao){
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    //Retorna a lista de negociações
    get negociacoes(){
        return [].concat(this._negociacoes);    
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
    }
}