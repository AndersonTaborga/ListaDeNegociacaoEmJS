class ListaNegociacoes {

    constructor(){

        this._negociacoes = [];
        
    }

    adiciona(negociacao){
        
        this._negociacoes.push(negociacao);
        
    }

    //Retorna a lista de negociações
    get negociacoes(){
        return [].concat(this._negociacoes);    
    }

    esvazia() {
        this._negociacoes = [];
       
    }
}