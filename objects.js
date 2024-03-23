//La primera forma de declarar un objeto, pero no es recomendada usarla
const first= new Object();
// console.log(first)

const information={
name:"Ismael",
secondName:"Gómez",
age:"22",
country:"Costa Rica",
hobbies:{
first:"Play in the movil",
second:"Watch netflix",
third:"Watch the pastor Elias"
},
greet:function(){
    console.log("Hello :)")
}
,
tellMeName:function(){
console.log(`My name is ${this.name} ${this.secondName}, i am ${this.age} years`)
}
}
console.log(information)
information.greet()
console.log(information.hobbies.first)
information.tellMeName()
console.log(Object.keys(information))
console.log(Object.values(information))

