const usuario = {
  nome: 'Leandro',
  idade: 22,
  empresa: 'Orion',
};

const { nome, ...resto } = usuario;
console.log(nome); // nome
console.log(resto); // idade, empresa

const arr = [1, 2, 3, 4];
const [ a, b, ...c];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3, 4

const usuario2 = { ...usuarioo, nome: 'Pedro' };