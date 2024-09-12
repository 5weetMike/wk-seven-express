//step 1
//object constains ={key(e.i the "key" given to a value): value(e.i:string,number,boolean)}
const myObj = {
    name: "mike",
    age: 32,
    isWicked: true,
    details: {
        computer: "Asus",
        phone: "iphone promax",
        desk: "brown"
    }
}
//console.log(object)
console.log(myObj);
//console.log(object.key)
console.log(myObj.name);
//console.log(object.key)
console.log(myObj.age);
//console.log(object.key)
console.log(myObj.isWicked);
//console.log(object.object.key)
console.log(myObj.details.computer);

const theObj = {
    name:"achilles",
    age: 24,
    isWarrior: true,
    battles:{
        battle1: "Trojan War",
        battle2: "died in the battle of troy"
    },
    family: [
        "Nereid Thetis",
        "peleus", 
    ]

}

console.log(theObj)
console.log(theObj.family[1])