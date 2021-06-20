/*Loop values of object’s properties by using for...in loop and print them.*/

let cities = {
    first: "Karachi",
    second: "Lahore",
    third: "Islamabad",
    fourth: "Quetta"
};

// For in loop 

for (i in cities) {
    console.log(cities[i]);
}