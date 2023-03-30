// // --------------- PRÁTICA GUIADA ---------------
// const bimestre1 = [7, 8, 9, 6]
// const bimestre2 = [7, 5, 6, 9]
// const bimestre3 = [6, 9, 10, 6]
// const bimestre4 = [5, 7, 6, 9]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// console.log(notasDoAno)

// // for (let i = 0; i < notasDoAno.length; i++) {
// //   let soma = 0

// //   for (let j = 0; j < notasDoAno[i].length; j++) {
// //     soma = soma + notasDoAno[i][j]
// //   }
// //   console.log(`a soma das notas do bimestre ${i + 1} é ${soma}`)
// //   console.log(`a média do bimestre ${i + 1} é: ${soma / notasDoAno[i].length}`)
// // }

// for (let i in notasDoAno) {
//   const valorBimestre = Number(i) + 1
//   let soma = 0
//   for (let nota of notasDoAno[i]) {
//     soma = soma + nota
//   }
//   console.log(`a soma das notas do bimestre ${valorBimestre} é ${soma}`)
//   console.log(`a média do bimestre ${valorBimestre} é: ${soma / notasDoAno[i].length}`)
// }















// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
// for (let i = 0; i < filmes.length; i++) {
//   console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}.`)
//   for(let j =0;j<filmes[i].elenco.length; j++){
//     console.log(filmes[i].elenco[j])
//   }
//   console.log("---------------------------")
// }
for (let i in filmes) {
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}.`)
  for (let j of filmes[i].elenco) {
    console.log(j)
  }
}

