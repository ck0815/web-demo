// 布尔值
let isDone: Boolean = false
console.log('布尔值',isDone)
// 数字
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
console.log('数字',decLiteral,hexLiteral,binaryLiteral,octalLiteral)
// 字符串
let names: string = "bob"
names = "smith"
console.log('字符串',names)


// 1
// function greeter(person: string) {
//   return "Hello, " + person
// }
// let user = "Jane User"
// console.log(greeter(user),1)

// 2
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
let users = { firstName: "Jane", lastName: "User" }
console.log(greeter(users),2)