 const cachorro = {}

 console.log('=====OUTRA QUESTÃO=====')

 console.log(cachorro)

 console.log('=====OUTRA QUESTÃO=====')

 cachorro['Nome'] = 'Juca'
 cachorro['Pernas'] = 4
 cachorro['Cor'] = 'Black'
 cachorro['Idade'] = 1
 cachorro['latido'] = () => 'Woof Woof'

 console.log('=====OUTRA QUESTÃO=====')

 console.log(cachorro.Nome, cachorro.Pernas, cachorro.Cor, cachorro.Idade, cachorro.latido())

 console.log('=====OUTRA QUESTÃO=====')

 cachorro.Raça = 'Pitbull'
 cachorro.informacaoCachorro = function(e){
    console.log(cachorro.Nome)
    console.log(cachorro.Raça)
    console.log(cachorro.Idade)
 }
 
 cachorro.informacaoCachorro()

