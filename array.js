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



