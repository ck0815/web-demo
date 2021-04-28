// 1
// function greeter(person: string) {
//   return "Hello, " + person
// }
// let user = "Jane User"
// console.log(greeter(user),1)
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user), 2);
