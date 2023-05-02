
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

