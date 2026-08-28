let age = 30;
if(age <= 10)
    console.log("Child")
else if(age > 10 && age <= 20) 
    console.log("Teen")
else if(age > 20 && age <=30)
    console.log("Bachelor")
else 
    console.log("Aged");


let grade = 'A';
switch(grade){
    case 'O':
        console.log("Outstanding");
        break;
    case 'A':
        console.log("Excellent");
    case 'B':
        console.log("Good");
    case 'C':
        console.log("poor");
}