/* You have to design a rocket launching problem.

Take 3 variables. IsSnow, IsRain, IsSpeed.
Give values to them true  or false as per your choice. 
To launch the rocket there are conditions that there should be no rain, no snow and the speed of wind should be less than 20km/hr. 
Use logical operators to match the conditions and observe the result.*/


let isSnow = false;
let isRain = false;
let isSpeed = 19;

let RocketLauching = (isSnow === false) && (isRain === false) && (isSpeed < 20);

alert(RocketLauching)