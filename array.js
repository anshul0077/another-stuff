let fruites=['Apple','Banana', 'Litchi']
console.log(fruites[1]);


let fruites2=['Apple','Banana', 'Litchi']
fruites2.push('Mango')
fruites2.unshift('Pineapple')
console.log(fruites2);


fruites2.splice(2,1,'Kiwi')
console.log(fruites2);

let number=[1,2,3,4,5,6]
number.pop()
console.log(number);

let colors=['Green','Yellow']
colors.splice(1,0,'Red','Blue')
console.log(colors);

let items=[1,2,3,4,5,6]
let newArr=items.slice(1,4)
console.log(newArr);

let names=["Zara",'Arjun','Mira','Sarthak']
let dec=names.sort().reverse()
console.log(dec);

let sq=[1,2,3,4,5,6,7,8]
let square=sq.map(e=>{

    return e**2
}) 
console.log(square);

let fill=[10,20,30,40,50]
let fil=fill.filter(e=>{
    return e>10
})
console.log(fil);


let re=[10,20,30]
let redu=re.reduce((acc,actual)=>{
     return acc+actual
},0)
console.log(redu);

let fi=[12,15,3,8,20]
let fin=fi.find(e=>{
    return e<10
})
console.log(fin);


let so=[40,60,28,90]
let som=so.some(e=>{
    return e<35
})
console.log(som);


let ev=[2,4,6,8,10]
let eve=ev.every(e=>{
    return e%2==0
})
console.log(eve);

let fullName=["Anshul","Choudhary"]
let [firstName,lastName]=fullName
console.log(firstName);




let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
console.log([...arr1,...arr2]);


let countries=['Uk',"Europe"]
console.log( ['India',...countries]);



let clone=[1,2,3,4,5]
let cloner=[...clone]
cloner.pop()
console.log(cloner);
console.log(clone);


let arrnum=[1,2,3,4,5,6]
let sum=0
arrnum.forEach(e=>{
sum+=e
})
console.log(sum);


function checkExist(){
let arr=[1,2,3,4,5,6,7]
let fi=arr.find(e=>{
    return e===3
})
console.log(fi);

}
checkExist()

function evenOdd(){
let arr=[2,10,6,4,8]
let eo=arr.every(e=>{
    return e%2==0
})
console.log(eo);

}
evenOdd()

function doubleit(){
let arr=[2,3,4,5,6,7,8]
let re=arr.map(e=>{
    return e*2
})
console.log(re);

}
doubleit()
function filterOdd(){
let arr=[1,2,3,4,5,6,7,8,9]
let filt=arr.filter(e=>{
    return e%2==1
})
console.log(filt);

}
filterOdd()

function sumofpos(){
let arr=[1,-2,3,4,-5,6]
let a=arr.reduce((acc,next)=>{

    
if(next>0){
    return acc + next    
    
}
else{
    return acc
}
}, 0)
console.log(a);

}
sumofpos()

function longestWord(){
   let words = ["apple", "banana", "grape", "strawberry", "kiwi"];
   
   let lWord=words.reduce((acc,act)=>{
    // console.log(acc.length,"thjs");
    
    // console.log(acc);
    
    if(acc.length>act.length){
        return acc
    }
    else{
        acc=act
        return acc
    }


    
   
   })
   console.log(lWord);
   
}
longestWord()