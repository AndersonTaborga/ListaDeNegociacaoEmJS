//Armazenar os campos da TR em lista atraves da API da DOM
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault();
    
    var tr = document.createElement('tr');

    //Itera com a array campos para add nos campos tr e td
    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });
    
    //Criando campo do volume e passando os valores para DOM
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    //Limpa os campos das trs
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    //Passa o focu do cursor para o campo data.
    campos[0].focus();
});

