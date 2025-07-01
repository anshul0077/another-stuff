function multiply(a,b){
return a*b
}
let result=multiply(12,2)
console.log(result);

// convert in fat arrow function
let multiplyFat=(a,b)=> a*b
console.log(multiplyFat(12,4));


// rest

function totalScore(...val){
    let total=0
    val.forEach(element => {
  total+= element
    });
    return total
}
console.log(totalScore(12,3,4,5,6,6,53,3));

//early retun 
function checkage(age){
if(age<12) return "no eligible"
else return "you are eligible"
}
console.log(checkage(12))
// assgin function to variable

let munna=function(){
console.log("you get it");

}
munna()


// passs function to another fucntoin

function firstFcn(val){
val()
}
firstFcn(function(){
    console.log("helllo");
    
})

// hof

function abcc(){

    return function(){
        console.log("hof");
        
    }
}
abcc()()   // anohter way hold this abc() into vaibale and the call the variable


// bmi calculator

function calculator(weight,height){
  let formula= weight/ (height*height)
  console.log(formula);
  
  if(formula <18.5) return "Underweight"
  else if(formula >18.5 &&  formula<24.9) return "Normal weight"
  else if(formula >25.0 &&  formula<29.9) return " over weight"
  return "Obese"
}
let stats=calculator(90,1.61544)
console.log(stats);


// discount
