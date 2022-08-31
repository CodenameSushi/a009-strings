const descricao = "jorge tem uma casa verde e com portão azul, com os dizeres:"

const boasVindas = "\"BOAS VINDAS, mas não deixe o gato sair\""

const boasVindasToUpperCase = boasVindas.toUpperCase()

const descricaoAlt = descricao.replace("verde","rosa").replace("azul","laranja")

console.log(descricaoAlt, boasVindasToUpperCase)

console.log(descricaoAlt.includes("verde"))
console.log(descricaoAlt.includes("laranja"))




