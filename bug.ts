function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); //This will result in an error because the function expects a string but receives an array of strings. 