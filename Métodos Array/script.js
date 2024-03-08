//Métodos de Array//

const list = ["a", "b", "c", "d", "e"] // Contagem a partir do '0' //

console.log("Qtde Elementos = " + list.length)
//////////////////////////////////////////////
//Acessar Elemento

console.log("\nElemento = " + list[2])
//////////////////////////////////////
//Acessar o último elemento da Lista

console.log("\nUltimo Elemento = " + list[list.length - 1])
///////////////////////////////////////////////////////////
// Adicionar Elemento no final da Lista

list.push("g")

console.log("\nElemento = " + list[5])
//////////////////////////////////////
//Remover o Ultimo Elemento da Lista

list.pop()
console.log("\n")
console.log(list)

//////////////////////////////////////
//Adicionar Elemento no inicio da Lista

list.unshift("a")

console.log("\n")
console.log(list)
//////////////////////////////////////
//Remover o primeiro Elemento da Lista

list.shift()

console.log("\n")
console.log(list)






