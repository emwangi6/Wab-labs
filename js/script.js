/*let age=20;
var course ="BBIT";
const university = "Strathmore University";

//let age=22
//var course ="BCOM"
//const university = "KCA University"
if (true){
  let time = "11:30"
  var day = "Monday"
  const year =2024
}
console.log(year)*/

/**
 * function that caclute the are of a rectangle
 * @param {int} height
 * @param {int} width
 * @return area
 */

function calculateArea(height , width)
{
  if ( height == null )
    {
    return console.log('Height missing !')
    
    }
  else if (width == null )
    {
    return console.log('width missing !')
    }
  else
    {
    let area = height * width
    return area
    }
}
console.log(calculateArea(20,3))
console.log(calculateArea(20))
console.log(calculateArea())

//function expression
const add = function (number_1 , number_2)
{
  return number_1 +  number_2
}
console.log(add(4,2))

//arrow Functions
const multiply = ( x , y ) => x * y;

console.log(multiply (2,3))

const scores=[45,56,67,67,78]

//access
console.log(scores[4])
console.log(scores[2])
console.log(scores[0])
console.log(scores[1])

let student_names = ["Omondi","Wafula","Kiprotich","Nyambane"]
console.log(student_names[2])

let governors=[
  [47 , "Johnson Sakaja"],
  [1,"Abdullswamad Sheriff"],
  [21,"Irungu Kang'ata"]

]
console.log("The governor if County number" , governors[1][0], "is called " , governors[1][1])

//Map(Perform operation on each element)
let double_scores=scores.map(x => x * 2)
console.log(double_scores)

//properties
console.log("The class has" , student_names.length , "Student")
console.log("Kenya has " , governors.length , "Governors")

for( let index in scores){
  console.log(scores[index])
}
for( let score of scores){
  console.log(score)
}
scores.forEach(function(score){
  console.log("Score" ,score)
});
const student=
{
  name: "Alice",
  age : 20,
  passed : "true",
  grade : 'A',
  "admission number" : 183380,
  course : "BBIT",
  group : "2A",
  attendance:20,
  addattendance: function(){
    this.attendance +=1
    
  }


}
console.log("My name is " ,student.name ,"from", student["admission number"] , "  Universtity")
student.addattendance()
console.log(student.attendance)

let bbit_2b_students=[
  {adm : 2223251 , name :"Blessing"},
  {adm : 192977 , name : 'Ryan'},
  {adm : 222024 , name : 'Ambrose'},
  {adm : 220941 , name : 'Neema'},

]
bbit_2b_students.forEach(function(student)
{
  console.log(student.name)
})


for (let student of bbit_2b_students) {
  console.log(student.name);
}

//getting the key of an object as a array
console.log(Object.keys(student));

//getting the values of an object as an array
console.log(Object.values(student));

//getting both keys and values of an object as an array
console.log(Object.entries(student));
//

