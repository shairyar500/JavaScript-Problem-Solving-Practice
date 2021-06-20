/*Make index.html, app.js and style.css files
Make two input fields, one for the email and other for password.
Also, make a button with ‘Log In’ text
Put a relevant event using addEventListener.
Now write a function that’d be called on that event
Check that whether values of both email and password fields are empty or not using the same function
If any of the fields is empty, ask use to fill up the fields
If both are filled, show an alert saying ‘Logged In Successfully’.
Also, check for format of email in the first input field and ensure that password field’s length is not less than 8 character.
*/

document.getElementById("login").addEventListener("click", submitFunction)

function submitFunction() {

  let emailValue = document.querySelector("#email").value;
  let passwordValue = document.querySelector("#pwd").value;

  console.log(emailValue,passwordValue);
  console.log(passwordValue.length);

  if ((emailValue == "") && (passwordValue == "")) {
        alert("Please fill the credentials correctly");
        
        
  } 
  else if(passwordValue.length <= 8){
 
    alert("Password must be of 6 digits"); }
}
function ValidateEmail(inputText)
{
let passwordValue = document.querySelector("#pwd").value;

if(inputText.value.match(mailformat) && (passwordValue.length >= 8))
{
  alert("Access Provided");
document.form1.text1.focus();
return true;
}
else
{
alert("invalid email / Password is less than 6 digits");
document.form1.text1.focus();
return false;
}
}