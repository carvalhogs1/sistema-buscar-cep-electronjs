// Pegando os elementos do HTML pelo ID
var formulario = document.getElementById('formulario');
var cep = document.getElementById('cep');

function buscarcep(event) {
    event.preventDefault();

    var valordocep = cep.value;

    //Fazendo uma requisição para a API VIA CEP
    fetch(`https://viacep.com.br/ws/${valordocep}/json/`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            var resultado = document.getElementById("resultado");

            // Adicionando conteudo no HTML
            resultado.innerText = `cep: ${data.cep} - ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        })

    console.log(valordocep);
}

function mascaracep(event){
    event.currentTarget.maxLength = 9
    let value = event.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    event.currentTarget.value = value
    return e
}
cep.addEventListener("keyup", mascaracep);

//Adicionando um evento de SUBMIT (ENVIO) no fromulário
formulario.addEventListener('submit', buscarcep);

//alert('FORMULÁRIO ENVIADO COM SUCESSO!')

