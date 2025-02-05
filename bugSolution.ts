function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  people.forEach(person => {
    console.log(greeter(person));
  });
}

let user = ["Jane User", "John User"];

greeterArray(user); //This calls greeter for each element of the array.