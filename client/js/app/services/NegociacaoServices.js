class NegociacaoService {

    constructor() {

        this._http = new HttpService();
    }

    obterNegociacoesSemana() {

        return new Promise((resolve, reject) => {
           
            this._http
           .get('http://localhost:3000/negociacoes/semana')
           .then(negociacoes => {
               resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
           })
           .catch(erro => {
               console.log(erro);
               reject('Não foi possível obter as negociações da semana');
           });

        });

    }

    obterNegociacoesSemanaAnterior() {

        return new Promise((resolve, reject) => {
            
             this._http
            .get('http://localhost:3000/negociacoes/anterior')
            .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            })
            .catch(erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações da semana');
            });
 
         });
    }

    obterNegociacoesSemanaRetrasada() {

        return new Promise((resolve, reject) => {
            
             this._http
            .get('http://localhost:3000/negociacoes/retrasada')
            .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            })
            .catch(erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações da semana');
            });
 
         });
    }


}