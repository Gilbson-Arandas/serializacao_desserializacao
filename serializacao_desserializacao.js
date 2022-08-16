const arrayDeObjetos = [
    { nome: 'Gilbson', status: 'Programador'},
    { nome: 'Ailma', status: 'Social Midia'},
    { nome: 'Pedro', status: 'Estudante'},
    { nome: 'Tiago', status:'  Estudante'}
]

const arrayConvertido = JSON.stringify(arrayDeObjetos);
console.log(arrayConvertido);

const retornandoParaArray = JSON.parse(arrayConvertido);
console.log(retornandoParaArray)