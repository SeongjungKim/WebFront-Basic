const player = {
  name: "david",
  points: 10,
  fat: true,
};

player.fat = false;
player.last_name = "potato";
player.points = player.points + 15;

console.log(player);
console.log(player.name);
console.log(player["fat"]);
