class Negociacao {

    //Propriedades com modificadores de acesso usando a conveção "_"
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    //Usando get, transformo o método em uma chamada por propriedade
    get volume() {
        return this._quantidade * this.valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    isEquals(outraNegociacao){
        return JSON.stringify(this) == JSON.stringify(outraNegociacao);
    }


}