// Pegando os elementos do HTML pelo ID
var formulario = document.getElementById('formulario');
var cep = document.getElementById('cep');
var tbody = document.getElementById("tbody")

var listadeceps = [];

function buscarcep(event) {
    event.preventDefault();

    var valordocep = cep.value;

    //Fazendo uma requisição para a API VIA CEP
    fetch(`https://viacep.com.br/ws/${valordocep}/json/`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

           // var resultado = document.getElementById("resultado");
            listadeceps.push(data)

            console.log(listadeceps)

            var novalinha = tbody.insertRow();
            var celulacep = novalinha.insertCell(0);
            var celulalogradouro = novalinha.insertCell(1);
            var celulabairro = novalinha.insertCell(2);
            var celulalocalidade = novalinha.insertCell(3);
            var celulauf = novalinha.insertCell(4);

            listadeceps.forEach(item => {

                celulacep.innerText = item.cep;
            celulalogradouro.innerText = item.logradouro ? item.logradouro : 'Não informado';
            celulabairro.innerText = item.bairro ? item.bairro : 'Não informado';
            celulalocalidade.innerText = item.localidade ? item.localidade : 'Não informado';
            celulauf.innerText = item.uf ? item.localidade : 'Não informado';

            })

            
            
            
            // Adicionando conteudo no HTML
           // resultado.innerText = `cep: ${data.cep} - ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        })

    console.log(valordocep);
}

function mascaracep(event){
    event.currentTarget.maxLength = 9
    let value = event.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    event.currentTarget.value = value
    return event
}
cep.addEventListener("keyup", mascaracep);

//Adicionando um evento de SUBMIT (ENVIO) no fromulário
formulario.addEventListener('submit', buscarcep);

//alert('FORMULÁRIO ENVIADO COM SUCESSO!')

