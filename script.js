var nome = document.querySelector('#nome')
var email = document.querySelector('#email')
var idade = document.querySelector('#idade')
var cargo = document.querySelector('#cargo')
var sex = document.querySelectorAll('input[type="radio"]')
var img = document.querySelector('#img')


function enviar(){
    if (nome.value == ''){
        alert('ERRO: Digite seu nome')
    }else if (email.value == ''){
        alert('ERRO: Digite seu e-mail')
    }else if ( idade.value == 0 ){
        alert('ERRO: Digite seu nascimento')
    }else if ( cargo.value == ''){
        alert('ERRO: Digite seu cargo atual')
    }else{
        if (sex[0].checked){
            //console.log('mulher')

            document.querySelector('#dados').style.backgroundImage = 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(157,0,255,1) 100%)'
            document.querySelector('body').style.backgroundImage = 'linear-gradient(220deg, rgba(255,255,255,1) 73%, rgba(137,0,255,1) 100%)'

            //pesrssonaliza o h1 no topo
            document.querySelector('h1').style.boxShadow = 'none'
            document.querySelector('h1').style.transition = '1s'

            //refente ao cartão
            document.querySelector('section').style.backgroundImage = 'none'
            document.querySelector('section').style.transition = '5s'
            document.querySelector('div, .iden').style.transition = '0s'
            document.querySelector('h1').innerHTML = `Bem Vinda`

            //adiciona um icone de refencia feminina
            img.setAttribute('src', 'img/iconeM.png')
            img.style.marginBottom ='50px'
            img.style.width ='130px'
            img.style.height ='130px'

            //substitiu os espaços de identificação para somente o conteudo
            document.querySelector('#Dn').innerHTML = `<p>Nome: ${nome.value}</p>`
            document.querySelector('#Dn').style.color = 'white'
            document.querySelector('#De').innerHTML = `<p>@-mail: ${email.value}</p>`
            document.querySelector('#De').style.color = 'white'
            document.querySelector('#Di').innerHTML = `<p>Nascimento: ${idade.value}</p>`
            document.querySelector('#Di').style.color = 'white'
            document.querySelector('#Dc').innerHTML = `<p>Cargo: ${cargo.value}</p>`
            document.querySelector('#Dc').style.color = 'white'

            //retira o botão e seletor de sexo
            document.querySelector('#sexo').style.display = 'none'
            document.querySelector('#enviar').style.display = 'none'

        }else if(sex[1].checked){
            //console.log('homem')

            document.querySelector('#dados').style.backgroundImage = 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,252,255,1) 100%)'
            document.querySelector('body').style.backgroundImage = 'linear-gradient(220deg, rgba(255,255,255,1) 73%, rgba(0,255,199,1) 100%)'

            //pesrssonaliza o h1 no topo
            document.querySelector('h1').style.boxShadow = 'none'
            document.querySelector('h1').style.transition = '1s'

            //refente ao cartão
            document.querySelector('div, .iden').style.transition = '0s'
            document.querySelector('h1').innerHTML = `Bem Vindo`

            //adiciona um icone de refencia masculina
            img.setAttribute('src', 'img/iconeH.png')
            img.style.marginBottom ='30px'
            img.style.width ='130px'
            img.style.height ='130px'

            //substitiu os espaços de identificação para somente o conteudo
            document.querySelector('#Dn').innerHTML = `<p>Nome: ${nome.value}</p>`
            document.querySelector('#Dn').style.color = 'white'
            document.querySelector('#De').innerHTML = `<p>@-mail: ${email.value}</p>`
            document.querySelector('#De').style.color = 'white'
            document.querySelector('#Di').innerHTML = `<p>Nascimento: ${idade.value}</p>`
            document.querySelector('#Di').style.color = 'white'
            document.querySelector('#Dc').innerHTML = `<p>Cargo: ${cargo.value}</p>`
            document.querySelector('#Dc').style.color = 'white'
            document.querySelector('div, p').style.color = 'white'

            //retira o botão e seletor de sexo
            document.querySelector('#sexo').style.display = 'none'
            document.querySelector('#enviar').style.display = 'none'
        }else{
            alert('Erro: Selecione um genero')
        }
    }
}

