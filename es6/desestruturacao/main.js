const usuario = {
  nome: 'Leandro',
  idade: 22,
  endereco: {
    cidade: 'Campinas',
    estado: 'SP',
  }
}
console.log(usuario);


const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);


function mostraNome({ nome, idade}) {
  console.log(nome, idade);
}
mostraNome(usuario);