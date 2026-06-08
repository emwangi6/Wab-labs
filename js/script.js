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
