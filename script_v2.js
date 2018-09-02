//1
const dog = {
    name: "WangWang",
    bark() {console.log("Woof!")}
}

console.log(dog.name)
dog.bark()
console.log(dog)

//2
console.log(`woof, I'm ${dog.name}!`)

//3
const person = {
    firstName: "Diana",
    lastName: "Goh",
    name() {
        return this.firstName + " " + this.lastName 
    },
    birthYear: 2003,
    ageThisYear() {
        const today = new Date()
        return today.getFullYear() - this.birthYear
    }
}
console.log(person.ageThisYear())

//4
const someString = "any string"

//5
console.log(someString.length)

//6
someString.length = 200

//7
console.log(someString.toUpperCase())
console.log(someString.replace("a", "@"))

//8
const decimalNumber = 3.48946

//9
console.log(decimalNumber.toFixed(3))

//10
const sum = (a, b) =>  a + b
console.log("sum = " + sum(4,7))

//11
console.log("sum function's name is " + sum.name)

//12
console.log(sum.toString())

