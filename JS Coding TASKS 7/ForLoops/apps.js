
let games = ["Ludo", "Scrabble","Hockey","Cricket","Football"];


// For loop

for (var i=0;i<games.length;i++){
    if ("Cricket" == games[i]){
        console.log("Cricket Exits!");
    }
    else {
        console.log("Does not Exist");
    }
}

// FOR EACH

games.forEach(myFunction)

function myFunction(arr) {
    if ("Cricket" == arr){
        console.log("Cricket Exits!");
    }
    else {
        console.log("Does not Exist");
    }
    
}

//For Of

for (i of games) {
    if ("Cricket" == i){
        console.log("Cricket Exits!");
    }
    else {
        console.log("Does not Exist");
    }
}