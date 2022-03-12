function plus(firstName, secondName) {
  console.log(firstName + secondName);
}

function divide(firstName, secondName) {
  console.log(firstName / secondName);
}

function power(firstName, secondName) {
  console.log(firstName ** secondName);
}

function calculateKrAge(ageOfForeiner) {
  return ageOfForeiner + 2;
}

const player = {
  name: "kim",
  age: 10,
  hello: function (otherAge, otherAge) {
    console.log(
      "Hello my name is " + otherAge + " and I'm " + otherAge + "'s old"
    );
  },
};

player.hello("david", 10);
player.hello("nico", 23);
player.hello("lynn", 21);

plus(60, 8);
divide(93, 2);
power(2, 3);

const enAge = 96;
const krAge = calculateKrAge(enAge);

console.log(krAge);
