// var não é recomendado por não conseguir se utilizado fora do escopo
let a = 2
let b = 'teste'

function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
} 
// console.log(gravity) dará erro, já que var está apenas para aquele block

if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3

// utilizamos const e let para evitar que saia do escopo e de erro no codigo

for(let x = 0; x < 5; x++){
    console.log(x) // 0, 1, 2, 3, 4
}

// console.log(x) dará erro, pois let foi especificado apenas no for

const personTeste = {} // objeto sem valor

const person = {
    primeiroNome: 'Murillo',
    segundoNome: 'Vinícius',
    idade: 20,
    país: 'Brasil',
    cidade: 'João Pessoa',
    habilidades: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    nomeCompleto: function(){
        return `${this.primeiroNome} ${this.segundoNome}`
      },
      'phone number': '8398939393'
    
} // objeto pode amarzenar qualquer tipo de dados

    //acessando valor com o '.'
console.log(person.primeiroNome)
console.log(person.segundoNome)
console.log(person.idade)
console.log(person.namorada)

  //acessando valor com []

console.log(person['primeiroNome'])
console.log(person['segundoNome'])
console.log(person['idade'])
console.log(person['namorada'])
console.log(person['phone number'])


person.nacionalidade = 'brasileira'
person.animeFav = 'One Piece'
person.habilidades.push('Wordress')

console.log(person)
console.log(person.nomeCompleto())

// Object.assign copia o objeto sem alterar

// Object.keys para obter as chaves do objeto em forma de array
const chaves = Object.keys(person)
console.log(chaves)

// Object.values para obter valores das chaves em forma de array
const valores = Object.values(person)
console.log(valores)

// Object.entries para obter as chaves e o valores em forma de matriz
const all = Object.entries(person)
console.log(all)

console.log(person.hasOwnProperty('animeFav')) // verifica se existe a chave no objeto e retorna true or false
console.log(person.hasOwnProperty('João Pessoa'))