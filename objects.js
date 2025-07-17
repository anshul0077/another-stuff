let student={
    name:"Anshul",
    age:21,
    isEnrolled:true
}


let check={
    42:"Answer",
    true:"Yes"
}
console.log(check[42]);

const user={
    "firstName":"Anshu",

}

console.log(user["firstName"])


let key="age"
const num={
age:21
}
console.log(num[key]);


const  location={
    city:"Bhopal",
    coordinates:{
     lat:23.2,
     lng:77.4   
    }
}
console.log(location.coordinates.lat)


const  lon={
    city:"Bhopal",
    coordinates:{
     lat:23.2,
     lng:77.4,
     
     home:{
        llc:"0,chock"
     }
    }
}
console.log(lon?.coordinates?.home?.llc);


const user2={
    "first-name":"Harsh",
}
let {"first-name":firstName}=user2
console.log(firstName);


const course={
    title:"JS",
    duration:"4Weeks"
}
Object.entries(course).forEach((e=>{
    console.log(e[0]+"  :  "+e[1]);
    
}))



