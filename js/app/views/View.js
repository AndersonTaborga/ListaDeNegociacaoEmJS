class View {

    constructor (elemento) {
        this._elemento = elemento;
    }

    //Como javascript não contem classes abstratas, usamos do artefato de lançar uma exceção
    template(elemento) {

        throw new Error('O método template deve ser implementado');
    }

    update(model) {
        
                this._elemento.innerHTML = this.template(model);
            }
}