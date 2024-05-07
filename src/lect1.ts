let number: number = 7; // give type to this number
console.log(number) ; // to run this use tsc -b(because it works only in js)
// 
const greet = (naam : string  , age : number = 20)=>{ // :string nhi dalege to nhi chlega kyuki useko ek any type miljayga 
  console.log("happy birthday " + naam + " \nkitne sal k h " + age);
}

/*

function sum(a:number , b:number):number{
  return a+b
}
function fun(a:number , b:number):void{ // when no

}

*/

let KnaamHaiTera  = "kyu btau";
greet(KnaamHaiTera);
// greet(5); => giving error

function fun2():void{
  console.log("hello word");
}

function fun(fun2 : Function):void{
    setTimeout(fun2 , 1000);
}

fun(fun2);







