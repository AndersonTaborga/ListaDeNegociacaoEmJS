class MensagemView extends View {

    //Usar o super somente quando o construtor está passando parametros.
    constructor(elemento) {
        super(elemento);
    }


    template(model){

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }


}