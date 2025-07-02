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

function discountCalculator(value){

return function discount(value){
   let dis= value * (15/100)
return  (value - dis)
}
}
let res=discountCalculator(200)
console.log(res(200))


function square(number){
return 2**2
}
console.log(square(2))

function greaterNumber(a,b){
    
  return a>b? a: b;
}
console.log(greaterNumber(12,34))

function evenORodd(a){
if(a%2===0) return "even"
return "odd"
}
console.log(evenORodd(4))

function sumUpTo(a){
 let total=0
 for(let i=1;i<=a;i++){
    total+=i
 }
 return total
}
(console.log(sumUpTo(5)))

function primeOrNot(a){
    let toatl=0
    for(let i=1;i<=a;i++){
        if(a%i==0){
            toatl++
        }
    }
        if(toatl===2){
            return "given number is  prime number"
        }
        else{
            return "given number is not  prime number"
        }

    

}
console.log(primeOrNot(12));



function printPrime(){
    for(let i=1;i<=100;i++){
        let count=0

for( let j=1;j<=i;j++){
    
    if(i%j===0){
 
    count++
 
   
 }

}
 if(count===2){
  
   console.log(i);
    
}


    }
    
}

printPrime()


function factoria(a){
 let sum=1;
 for(i=1;i<=a;i++){
    sum*=i
 }

 return sum
}
console.log(factoria(5))


// digit count

function digitCount(a){
    let count=0
while(a>0){
    let digit=a%10
    count++
    a=Math.floor(a/10)
}
return count

}
console.log(digitCount(1234545));


let cc=()=>{

    let count=0
    return ()=>{
        count++
        return count
    }
}
let ccc=cc()
console.log(ccc());
console.log(ccc());
console.log(ccc());
console.log(ccc());

console.log(ccc());





function formatName(fname,lname){
        let firstletter= fname.charAt(0).toUpperCase()
        
        let firstletter2=lname.charAt(0).toUpperCase()

    return `${firstletter2}${lname.slice(1)} , ${firstletter}${fname.slice(1)}`
}

console.log(formatName("anshul","choudhary"))



function countVowles(a){
    let caseSen =a.toLowerCase()
let counter=0;
for (const e of caseSen) {
    if(e=="a" || e=="e" || e=="i" || e=="i" || e=="o" || e=="u"){
        counter++
    }
    
}
return counter
}
console.log(countVowles("aeiou"))


function reversNumber(a){
let actualNumber= Number(a)


let rev=0
if(actualNumber ==NaN){
    return "Enter the Number given number is not a number"
}else{


    while(actualNumber>0){
        
        let digit=actualNumber%10
        rev =rev*10+digit
        actualNumber=Math.floor(actualNumber/10)
    }
}

return rev
}

 console.log(reversNumber("3a1"))



function amstrong(a){
let amg=0
let actualNumber=a
while(a>0){
    let digit=a%10
    amg+=Math.pow(digit,3)
    a=Math.floor(a/10)

}
console.log(amg);

if(amg===actualNumber) return "This is a amstrong number"
else return "This is not a amstrong number"
}
console.log(amstrong(123))
 
function greetUser(a){

return function(){
    return `Hello, ${a}! welcome back`
}

}
let greet=greetUser("Anshul")
console.log(greet());


let power=(num,pow)=>{
return Math.pow(num,pow)
}
console.log(power(2,4));


function countdown(n){
if(n<=0)return
console.log(n);
countdown(n-1)

}
countdown(5)

function sumreccursion(a){
if(a==0)return 0;
return (a%10) +sumreccursion(Math.floor(a/10))
}
console.log(sumreccursion(123))


function recurssionReverseHelper(n,result){
    if( n==0)return result
let digit = n%10
let rev= result*10+digit
return recurssionReverseHelper(Math.floor(n/10),rev)
}
function recurssionReverse(n){
  return recurssionReverseHelper(n,0)
}
 console.log(recurssionReverse(12345))

