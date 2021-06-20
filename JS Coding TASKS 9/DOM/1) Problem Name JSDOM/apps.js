/*Make index.html, app.js and style.css files
Make 3 divs in your html file and give them class ‘div-class’
Now get the reference of first div using DOM methods
Change attribute class of this div to ‘changed-class’
After that change the style attribute of that div to give red color to the text and give solid blue border to it. Put some text in the first div too.*/


let d = document.getElementsByClassName("div-class")[0].className = "changed-class";
let r = document.getElementById("first-div").className;
console.log(r);

document.getElementById("first-div").style.color = "green";
document.getElementById("first-div").style.border = "10px solid red";