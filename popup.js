//alerts - just a popup for alert only one option 
alert("Are you sure you want to continue");

// confirm - gives two options yes no
let val = confirm("Enter your choice ");
document.writeln("The user choisce is : " +( (val === true)?"yes" : "no"));
document.writeln("<br>")

//prompt - get input from the user

let num1 = prompt("Enter your Name ")
document.writeln("The user name is " + num1);