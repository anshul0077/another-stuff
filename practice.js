let count = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    count++;
  }
}

console.log("Total numbers divisible by 3 between 1 and 50: " + count);


// factorial of 5
let factorial =1
for(let i=1;i<=5;i++){
    factorial*=i
}
console.log(factorial);

// square fo the number form 1 to 10

for(let i=1;i<=10;i++){
    console.log(i**2);
    
}

// number is prime or not



let n=7;
let  count1 = 0
for(let i=1;i<=n;i++){
if(n%i===0){
    count1++
}
}
if(count1===2){
    console.log("it is the prime number");
    
}
else{
    console.log("it is not prime");
    

}
let num=1234
let rev=0
while(num>0){
    let digit=num%10
    rev=rev*10+digit
    num=Math.floor(num/10)
} 
console.log(rev);




let rev1=0
let num2=121
let original=num2
while(num2>0){
    let digit=num2%10
    rev1=rev1*10+digit
    num2=Math.floor(num2/10)
}

if(rev1==original){
    console.log(`this number is a Palindrome`);
    
}
else{
     console.log(`this number is not a Palindrome`);
}




let userNumber=12345
let summ=0
while(userNumber>0){
    let digit=userNumber%10
    summ+=digit
    userNumber=Math.floor(userNumber/10)
}
console.log(summ);

let r=1
for(let i=1;i<=4;i++){
    let rr=""
    for(let j=1;j<=i;j++){
       rr+= r + ""
       r++
    }
    console.log(rr);
}



for(let i=5;i>=1;i--){
    let line=""
    for(let j=i;j>=1;j--){
        line+="*"
    }
    console.log(line);
    
}


for(let i=5;i>=1;i--){
    let line=""
    for(let j=i;j>=1;j--){
        line+="*"
    }
    console.log(line);
    
}
let row=5
for(let i=1;i<=row;i++){
    let line=" "
    for(let space=1;space<=row-i;space++){
       line+=" "
    }
    for(let j=1;j<=i;j++){
        line+="*"
    }
    console.log(line);
    
}

for(let i=1;i<=5;i++){
    let line=""
    for(let j=1;j<=i;j++){
        line+="  "+j
    }
    console.log(line);
    
}
let row1=5
for(let i=1;i<=row1;i++){
    let line= " "
    for(let space=1 ;space<=row1-i;space++){
        line+=" "
    }
    for(let j=1;j<=i;j++){
        line+=j
    }
    console.log(line);
    
}

let number222=1234
let summmmm=0
while(number222>0){
    let digit=number222%10
    summmmm+=digit
    number222=Math.floor(number222/10)
}
console.log(summmmm);



let anotherNumber=34567822
let countre=0
while(anotherNumber>0){
   anotherNumber= Math.floor(anotherNumber/10)
   countre++
}
console.log(countre);



// 

let eSum=0
let nnn=48253
while(nnn>0){
    let digit=nnn%10
    if(digit%2===0){
   eSum+=digit
        
    }
    nnn=Math.floor(nnn/10)
}
console.log(eSum);


// amstrong number checker

let input=153
let amst=0
while(input>0){
    let digit=input%10
amst+=(digit**3)


input=Math.floor(input/10)
}
console.log(amst);

