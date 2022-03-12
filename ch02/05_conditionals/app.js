const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("Please write a number");
} else if (age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age < 50) {
  console.log("Your are a man");
} else {
  console.log("Thank you for writing your age");
}
