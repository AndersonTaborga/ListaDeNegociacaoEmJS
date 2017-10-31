class ListaNegociacoes {

    constructor(){

        this._negociacoes = [];
    }

    adciciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);    
    }
}