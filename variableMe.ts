let greetings : string ="Hello Shivain";


console.log(greetings);

// number
let userId: number=334455; 

//boolean
let isLoggedIn:boolean=false;

function addTwo(num:number):number{
    return num+2;
    // return "hello"
}

addTwo(5);

let signUp= (name:string,email:string,paid:boolean=false)=>{

}
signUp("Shivain","");

// function getValue(myVal:number):boolean|string{
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
const getHello = (s:string):string=>{
    return "";
}
// const heros = ["harry","ron","hermione"];
const heros = [1,2,3];

heros.map(hero =>{
    return `hero is ${hero}`;
})


function consoleError(errormsg:string):void{
    console.log(errormsg);
}

function handleError(errmsg:string):never{
    throw new Error(errmsg);
}




export {}