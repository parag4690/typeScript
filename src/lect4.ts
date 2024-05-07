// generic

function identity<T>(arg : T){
    return arg
}

function identity2<T>(arg:T[]){
    return arg;
}
type def = string  | number;

let op1 = identity<string>("hello");
let op2 = identity<number>(12);

let op3 = identity2<def>([1 , "sharma" ]);


// another way:-> 
function diff<Type>(arg:Array<Type>) : Array<Type> {
console.log(arg.length);
return arg;
}

// :-> export

export let num : number = 10;
export function isLegal(age:number){
    if(age>18 ) return true;
    return false;
}

// import {num , isLegal} from "./lect4"
