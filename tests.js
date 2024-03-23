
//Crear distintos arrays

const primerArray= function(){
const arrayPrimero=Array(100).fill(0)
console.log(arrayPrimero);
arrayPrimero.push(3000)
arrayPrimero[7]=27382
document.getElementById("mjm").textContent=arrayPrimero
}
const segundoArray= function(){
    const segunda=Array.of("hola", "pequeño", "Bastardo", 56, )

    console.log(segunda)
    segunda.pop()
    console.log(segunda)
}
//segundoArray()
 const tercerArray=Array.of("pencil", "Cellphone", "Table", "Coffe")
 tercerArray.forEach(function(element, index){
console.log(`<li id="${index}">elemento: ${element}</li>`)
 });
 

