/*Create a variable and display it on the webpage. Add a button on the webpage. 
Create a function that runs on every click of the button. Whenever the function is executed the value of the variable will be increased by 5.*/

let value = 0;

function variable() {
    value = value + 5;
    document.querySelector('p').innerHTML = value;        
}
