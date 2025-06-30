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