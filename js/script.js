
//let age = 20;
//let course = "BBIT";
//const university = "Strathmore University";


//let age = 27;
//let course = "ECONOMICS STATISTICS";
//const university = "USIU";
 //if (true) {
    //let time = "11:30";
    //var day = "Monday";
    //const month = "June";
   

//console.log (time);
/**
 * A funtion that ccalulates the area of a rectangle
 * @param {int} height 
 * @param {int} width 
 * @returns {int} area of a rectangle
 */

//function declaration
function calculateArea(height , width) {
    let area = height * width
    return area
    //console.log("function calculateArea is called")
    //alert("function called/executed");
}

// execution - called
calculateArea(20,4) // a function call
console.log(calculateArea(20,4)) 
console.log(calculateArea(20))
console.log(calculateArea())
const add = funtion add(number_1,number_2) 
 return number_1 + number_2
}
console.log(add(10,20))
// arrow function
const add = (number_1,number_2) => {
    return number_1 + number_2
} 
/**Javascript Arrays (related) */
const scores  =[54, 68,69,70 ,50, 78, 90, 100] ;
// access array name {index}
//78
console.log(scores[4]);

console.log(scores[2]);

console.log(scores[0]);

console.log(scores[1]);

let 
 student_names =["omondi ", "wafula", "john", "kiprotich", "nyambane", "toipan"];
console.log(student_names[2]);

let governors = [
    [47 , "Johnson Sakaja"],
    [1 , "Abdullswamad Sherif"],
    [21, "Irungu Kang'ata"],
];

//The governor of county number 1 is Abdullswamad Sherif
console.log("The governor of county number", governors[1][0], "is", governors[1][1]);

//map (perform an operation on each element of an array)
 let doubled  =  scores.map(x => x * 2); // multiply each score by 2
console.log(doubled);

//properties
//The class has j students (student names)
console.log("The class has", student_names.length, "students");

//Kenya has b governors
console.log("Kenya has", governors.length, "governors");
//for
for (let index in scores) {
    console.log(scores [index]);
}

for (let score of scores) {
    console.log(score);
}
//forEach
scores.forEach(function(score) {
    console.log(score);
});

const students = [
    {
        name : "Alice ",
        age: 20,
        passed: true,
        grade : 'A',
        "admission number" : 183380,
        Course : "BBIT",
        group: "2A"

    };
    //accessing items
    //student name
    console.log('My name is',
    students.name, "from",
    student ["admission number"], 
    "university"
    Course: "BBIT",
    group : "2A",
    attendance : 20,
    addattendance : function() {
        this.attendance = this.attendance + 1
    }


};


//accessing items
//student names
console.log ('My name is',
    student.name,"from",
    student["admission number"],
    "university"
);

//a method in the object
student .addAttendance();
console.log(student.attendance);

let bbit_2b = [
    {
        adm: 183380, name : "Blessing"},
    {adm: 223251, name : "Ryan"},
    {adm: 1929977, name : "Ambrose"},
    {adm: 220941, name : "Neema"},


];
//print out the names of all students in bbit 2b using a loop
bbit_2b.forEach(function(student) {
    console.log(student .name);

}
);
// getting the keys of an object as an array
//todo:show looping of objects
//getting the keys of an object  in an array
console.log(student.keys().toArray())
//getting the values of an object as an array
console.log(student.values().toArray())
//getting  both keys and values of an object in an array
console.log(student.entries().toArray())