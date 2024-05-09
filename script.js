//OBS: o código abaixo foi editado para manter a confidencialidade dos dados utilizados portanto não funcionará como deve!
//função para envio de email
function envEmail() {

    try {
        //conversão dos dados para URL Encoded
        const email = encodeURIComponent(document.getElementById('email').value);
        const sender = encodeURIComponent('exemplo@mail.com')
        const subject = encodeURIComponent('Boas Vindas!')
        const body = encodeURIComponent('Olá caro! Este é apenas um email de boas vindas! Agradecemos seu interesse em se manter atualizado com informações sobre nossa floresta. Até breve!! 😊')

        //Requisição da API localizada na AWS
        $.ajax({
            type: 'GET', //tipo da chamada
            dataType: 'json', //formato de arquivo
            url: `https://exemplodelinkdaapi.amazonaws.com/pastaComAPI?sender=${sender}&receiver=${email}&subject=${subject}&body=${body}&pw=googleapppassword`, //caminho da API
            headers: {'Content-Type': 'application/json'}, //conteúdo
            //Imprime o LOG com a mensagem retornada pela API
            success: function(data) {
                console.log(data)
            },
            error: (error) => {
                console.log(error)
            }
        })

    }catch{
        //Tratamento de Erros
        console.log('Algo deu errado com o envio! Tente novamente')
    }

}