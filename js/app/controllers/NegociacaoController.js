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
        //
        let data = new Date(...
            this._inputData.value
            .split('-')
            //Arrow function otimizada com basicamente um retorno
            .map((item, indice) =>  item - indice % 2 )

            //Sem emissão das chaves numa arrow function
            // .map((item, indice) => {
            //     return item - indice % 2
            // })

            //Função map usando if para encontrar o indice 2 do mês de um Date()
            // .map(function(item, indice) {
                // if(indice == 1) {
                //     return item -1;
                // }
                // return item;
        );        

        //Adicionar a negociacao numa lista
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao);
    }
}