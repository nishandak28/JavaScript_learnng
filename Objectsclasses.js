let student = {
    name : "Nibi",
    age : 20,

    study() {
        console.log("He is topper");
    }
}

class Student1 {
    name = "Nishand";
    age = 20;

    study() {
        console.log("He is poor in studies");
    }
}

student.study();

std = new Student1();
std.study();