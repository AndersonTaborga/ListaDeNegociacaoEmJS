class NegociacaoController {

    constructor(){
        //Passar essa manipulação da DOM para o constructor é performático e possibilita o conceito de cache
        let $ = document.querySelector.bind(document);
    
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        // console.log(this._inputData.value.split('-'));
        let data = new Date(this._inputData.value.replace(/-/g, ','));        

        //Adicionar a negociacao numa lista

        console.log(data);
    }
}