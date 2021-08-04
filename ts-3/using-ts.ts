enum Role { ADMIN = "Admin", READ_ONLY = 2, AUTHOR };

const person = {
  name: "Karina",
  age: 105,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

if (person.role === Role.READ_ONLY) {
  console.log('is read only');
}
if (person.role === Role.ADMIN) {
  console.log('is admin');
}