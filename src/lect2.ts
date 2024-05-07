// interface => how to give type to object
// function in which object is comming as argument

// create interface => it is like structure
interface User{
    name : string , 
    age : number
}



function greety(user:User){ // by default user is any type
   console.log("hello " + user.name);
}

let user = {
    name : "parag" , 
    age : 20
}

greety(user);


interface Person{
    name : string , 
    age : number , 
    greet:()=>void
}

class Employe implements Person{ // interface jo bnaya use k sare property person use  ( imp ) , sare property us krni prege agr hm use krege
    // this k sath hame phle define krna prega
    name : string ;
    age : number 
    constructor(a : string , b:number){
        this.name = a ,
        this.age = b
    }
    greet(){
        console.log("hello bhai kya haall hai " + this.name);
    }
}

let emp1 = new Employe("parag hu m " , 20);

emp1.greet();


/**
 car model
 
 */