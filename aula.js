var nome = window.prompt("Qual seu nome?");
var idade = window.prompt("Qual é a sua idade?");
var linguagem = window.prompt("Qual linguagem você estuda?");
var msg = (`Olá ${nome}, a sua idade é ${idade} anos e a sua linguagem de estudo é ${linguagem}`)

alert(msg);

var gosta = window.confirm(`Você gosta de estudar ${linguagem}?`)

function res (){    

    if(gosta == true){
       alert ("Que legal, continue seus estudos")
    } else{
        alert('Que pena, tente estudar outra linguagem')
    }
}
 res()







