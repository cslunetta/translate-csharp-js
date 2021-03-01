const names = [
  "Nashville",
  "Hong Kong",
  "The back yard",
  "Earth",
  "London",
  "The mall",
  "Ryman Auditorium",
  "The Great Wall of China",
];

console.log("All Place Names");
for (n of names) {
  console.log(n);
}

console.log("");

const theNames = names.filter((n) => n.startsWith("The"));

console.log("'The' Place Names");
for (n of theNames) {
  console.log(n);
}