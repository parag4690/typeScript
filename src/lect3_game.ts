type keyInput = "up" | "down" | "left" | "right";

function game(keyPress : keyInput){
   
}

game("up");
// not accept random string :-> game("random string")

// enum => do same thing but more readable ,

enum keyinp{
    up , 
    down , // if = 20 , then next will be 21 , if u give string then have to give others string also
    left , 
    right 
}
function game2(keypress : keyinp){
    if(keypress == keyinp.up){

    }
}
game2(keyinp.up);// bydefault = 0 , 
game2(keyinp.down); // bydeault = 1 , simillRLY left = 3 , right = 4 

// generic => dekh 

// function typee(arr : Array<string>){
//     console.log(arr[0]);
// }

// let arr = ["parag" , "sharma"];
// typee(arr);

// function getFirstElement(arg : string[] | number[]){
//     console.log(arg[0]);
// }

type def = string | number;
function getfirstelement(arg: def[]){
    return arg[0];
}
let res = getfirstelement([1 , "singh"]); // eski type def

// genric jisme kesa bhi type a skta hai , smj gya na bro 


