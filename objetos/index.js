/*
const professores = [
{nome:'andrei', modulo : 1},
{nome:'fernado',modulo : 2}

]
console.log (professores);
console.log()

const curso = {
    nome :'Frontend' //tipo string
}//adicionando atributos ao objeto
curso.numeroEstudantes = 50;
curso['numeroEstudantes' ]= 80;
console.log(curso.numeroEstudantes)//frontend

//1.Adicione ao objeto do exercicio 1 uma lista com os nomes dos personagens do filme.

const  novoFilme =  {
    presidente:'Alberto Guerra',
    treinador:'Renato Gaucho',
    nome: 'campeão Brasileiro2023',
    ano:2023,
    elenco:['grando','geromel','kaneman','luis', 'soares'],
    visualizado : "N"
}
novoFilme.personagensFilme = ['alice'
, 'coelho', "torre", "bill", "geovane"];

console.log (novoFilme.personagensFilme[2])

//2.acesse e imprima no console cada pessoa do elenco junto com seus respectivos personagem
console.log(novoFilme.elenco[0], ' como' , novoFilme.personagensFilme[0]); 
console.log(novoFilme.elenco[1], ' como' , novoFilme.personagensFilme[1]);
console.log(novoFilme.elenco[2], ' como' , novoFilme.personagensFilme[2]);
console.log(novoFilme.elenco[3], ' como' , novoFilme.personagensFilme[3]);
console.log(novoFilme.elenco[4], ' como' , novoFilme.personagensFilme[4]); 


 const usuarioTeste = {
    nome : 'pedro',
    idade:25,
}
novoUsuario(usuarioTeste)
function novoUsuario(pessoa){
    const pessoaNova = {
        ...pessoa,
        comida: ['alface', 'beterraba'],
        amigo:{nome:'thales',idade: 35},
    }
return pessoaNova;
}let teste = novoUsuario(usuarioTeste)
console.log(`o nome da pessoa é ${teste.nome} e suas comidae preferidas são ${teste.comida[0]}e ${teste.comidas[1]}`)
*/
//condicoes :
/*
let ensinoMedio = prompt('concluiu ensino medio?[sim /não]')
let idade = Number (prompt('sua idade:'))
let outraFaculdade = prompt('Esta cursando outra faculdade?')
let resultado = verificaFaculdade(ensinoMedio, idade, outraFaculdade);
 console.log(resultado)
 alert(resultado)
function verificaFaculdade(ensinoMedio, idade, outraFaculdade){
    let mensagem = '';
    if (ensinoMedio.toUpperCase() === 'SIM'&& idade >=18 && outraFaculdade.toUpperCase() === 'NAO'  )//deixar tudo em caixa alta
     { mensagem = 'seja bem vindo!'

    }else { mensagem = 'Voce nao esta apto para entrar na faculdade'

    }
    return mensagem

}
let pais = prompt('digite o pais que vc nasceu:');

switch(pais) {
    case 'Brasil':
        console.log ('brasileiro');
        break;
        case 'lichtein':
        console.log ('lichteinense');
        break;
        case 'croacia':
        console.log ('croassan');
        break;
        default:
                console.log('Nacionalidade não encontrada ') ;
                break
}*/
let algarismo1 = Number(prompt('numero 1:'));
let algarismo2 = Number(prompt('numero 2:'));
let opcao = Number(prompt('Digite uma opção :\n1- soma\n2-subtração\n3-multiplicação\n4- Divisão'));
switch(opcao){
    case 1:
        let soma = algarismo1 + algarismo2;
        console.log(soma);
        break
        case 2:
            let subtracao = algarismo1 - algarismo2;
            console.log(subtracao);
            break
            case 3:
                let multiplicação = algarismo1 * algarismo2;
                console.log(multiplicação);
                break
                case 4:
                    let Divisão = algarismo1 / algarismo2;
                    console.log(Divisão);
                    break
    default:
        console.log('Opção não encontrada');
        break;
}