/*
Add ‘Polo’ as a member of the same array at the end using one of the utility methods
Add ‘Polo’ as a member of the same array at the beginning of the array using one of the utility methods
Remove a member of the same array from the end
Remove a member of the same array from the beginning
*/

let games = ["cricket", "Footbal", "Basketball", "Vollyball", "Table Tennis"];
console.log(games);


games.push("Polo");
console.log(games);

games.unshift("Polo");
console.log(games);

games.pop();
console.log(games);

games.shift();
console.log(games);


